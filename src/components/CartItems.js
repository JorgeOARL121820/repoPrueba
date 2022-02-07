import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { deleteCar, updateCar } from '../actions/actions';

import logo from '../assets/images/logo.png';

export const CartItems = ({ id, precio, origen, destino, duracion,  fecha, hora, horallegada, cantity, nombre, apellidos, direccion, correo, enableButtons = true }) => {

  const [count, setCount] = useState(cantity);

  const dispatch = useDispatch();

  const handleRemove = async () => { 
  

    const result = await Swal.fire({
      title: '¿Desea eliminar el artículo?',
      text: 'El artículo se eliminará de la lista de compras',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    });
    if (result.value) {

      dispatch(deleteCar(id));

    }

  };

  const handleUpdate = useCallback(async () => {

    if( count === 0 ) {
      const result = await Swal.fire({
        title: '¿Desea eliminar el artículo?',
        text: 'El artículo se eliminará de la lista de compras',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
      });

      if (result.value) {

        dispatch(deleteCar(id));
        return;
      }
    }

    dispatch( updateCar( { id, cantity: count } ) );

  }, [count, dispatch, id]);

  useEffect(() => {
    handleUpdate();
  }, [count, handleUpdate]);
  

  const handleConcurrency = (num) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'USD',
        maximumSignificantDigits: 3}).format(num)
  };

const add = () => {
  if( count >= 10 ) return;

  setCount(count + 1);
};

const remove = () => {
  if( count <= 0 ) return;
  
  setCount(count - 1);
};

  return <>
    <div className="card">
        <div className="col l2 t3 m3">
            <div className="card-image">
                <img src={logo} alt="" width='100%' />
            </div>
        </div>

        <div className="col l12 t12 m12">
            
        <div className="col l12 pull-center">

          {

            enableButtons 
              ? null 
              : (
                <div className="fila col l12">

                  <div className="col l12 t6 m12 pull-left">

                    <h5>
                      Reservante: {nombre} {apellidos}

                      <br />

                      Dirección: {direccion}

                      <br />

                      Correo: {correo}

                      <br />

                      Fecha del vuelo: {fecha}
                    </h5>

                  </div>
            
                </div>
              )

          }
                                <div className="fila">
                                  { enableButtons ? (
                                  <div className="col l12 pull-center">

                                    <h3>
                                      Fecha de vuelo: {fecha}
                                    </h3>

                                  </div>) : null }
                                    <div className="col l2 t4 pull-left">
                                        
                                        <h5>
                                            {'Salida: ' + origen}
                                            <br />
                                            {'Hora: ' + hora}
                                        </h5>

                                    </div>

                                    <div className="col l8 t4">
                                        <i className='bx bxs-plane-alt bx-fade-right' ></i>
                                    </div>

                                    <div className="col l2 t4 pull-right">
                                        
                                        <h5>
                                            {'Llegada: ' + destino}
                                            <br />
                                            {'Hora: ' + horallegada}
                                        </h5>

                                    </div>
                                </div>
                            </div> 

                            <div className="col l12 t12 m12 pull-center">
                                <h5>
                                    { 'Tiempo de viaje: ' + duracion }
                                </h5>
                            </div>

                            <div className="col l12 t12 m12 pull-center">
                                <h5>
                                    { 'Precio: ' + handleConcurrency( precio ) + ' p/p' }
                                </h5>
                            </div>

                            <div className="fila col l12">

                            <div className="fila col l6 t12 m12">

                                <div className='col l6 t12 m12 pull-center'>
                                    <h5> { enableButtons ? '¿Cuántos boletos necesita?' : 'Boletos adquiridos' } </h5>
                                </div>

                                <div className='col l12'></div>

                                <div className="number col l2 t5 m5">
                                  {
                                    enableButtons ?
                                      <button onClick={remove}>-</button>
                                    : null
                                  }
                                </div>
                                <div className="col l2 pull-center">
                                    <label>{count}</label>
                                </div>
                                <div className="number col l2 t5 m5">
                                    {
                                      enableButtons ?
                                        <button onClick={add}>+</button>
                                      : null
                                    }
                                </div>

                                </div>
                                {
                                  enableButtons ?
                                    <div className="col l6 t12 m12">
                                      <button onClick={handleRemove}>Eliminar del carrito</button>
                                    </div>
                                  : null
                                }

                            </div>


                            <div className="col l12 pull-right">
                              <h3>
                                { ( enableButtons ? 'A pagar por boletos: ' : 'Total pagado: ') + handleConcurrency( precio * count ) }
                              </h3>
                            </div>

        </div>
    </div>

    <hr />
  </>;
};

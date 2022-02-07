

import Swal from 'sweetalert2';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CartItems } from '../components/CartItems';
import { getCarrito } from '../selectors/comprasSelector';
import logo from '../assets/images/emptyCart.gif';
import { fetchVuelos, finishBuy } from '../actions/actions';
import { validEmail } from '../regex/regex';
import { alert } from '../utils/alerts';
// import { ItemLinks } from '../components/shop/ItemLinks';

export const CartPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVuelos("", "", ""));
  }, [dispatch]);
  

  const carrItems = useSelector( getCarrito );

  console.log( "cardItems", carrItems );

  const handleConcurrency = (num) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'USD',
        maximumSignificantDigits: 20}).format(num)
  };

  const handleFinishBuy = () => {

    Swal.fire({
      title: 'Completa tus datos para continuar completar la compra',
      html: 
        '<div class="form-group">' +
          '<label for="swal-input1"> Nombre del reservante</label>' +
          '<input id="swal-input1" class="swal2-input" />' +
        '</div>' +
        '<div class="form-group">' +
          '<label for="swal-input2"> Apellidos del reservante</label>' +
          '<input id="swal-input2" class="swal2-input" />' +
        '</div>' +
        '<div class="form-group">' + 
          '<label for="swal-input3"> Dirección completa</label>' +
          '<input id="swal-input3" class="swal2-input" />' + 
        '</div>' +
        '<div class="form-group">' +
          '<label for="swal-input4"> Correo electrónico</label>' +
          '<input type="email" id="swal-input4" class="swal2-input" />' +
        '</div>'
      ,
      focusConfirm: false,
      preConfirm: () => {

        console.log( document.querySelector('#swal-input1').value);

        return [
          document.querySelector('#swal-input1').value,
          document.querySelector('#swal-input2').value,
          document.querySelector('#swal-input3').value,
          document.querySelector('#swal-input4').value
        ]
      }
    }).then( ({ value }) => {

      if( value ) {

        if( value[0] === "" || value[1] === "" || value[2] === "" || value[3] === "" ) {
          return alert( "Error", "Todos los campos son obligatorios", "error" );
        }

        if( !validEmail.test( value[3] ) ) return alert( "Error", "El correo no es válido", "error" );

        dispatch( finishBuy( value ) );  

        alert( "Exito", "Compra realizada con éxito", "success" );

      }
    });
    
    // console.log( formValues );

    
      
  };
  // const handleSelectedOption = (e) => {};

  return <>
    <div>
    
      <div className="card fila">

        <div className="col l12 pull-center">
          <h5> Carrito </h5>

          <hr />
        </div>
        
        <div className="col l2 t2 m1">

        </div>

        <div className="col l8 t8 m10">

          {

            carrItems?.map( (vuelo, index) => {

              console.log("map loop", vuelo);

              if( index < carrItems.length - 1 ) {
                  
                  return <CartItems key={vuelo.id} {...vuelo} />;

              }

              return null;

            })

          }

        {

          carrItems?.length > 1 ? 
            <div className="fila">

              <div className="col l6 pull-left">
                <h1> Total a pagar: </h1>
              </div>

              <div className="col l6 pull-right">
                <h1>{ handleConcurrency(carrItems[ carrItems.length - 1 ]?.precioTotal) }</h1>
              </div>

              <div className="fila col l12">
                <div className="col l8 t12 m12">
                </div>
                <div className="col l4 t12 m12">
                  <button type="" onClick={handleFinishBuy}> Finalizar compra </button>
                </div>
              </div>
              
            </div>
          :

          <div className="fila">
            <div className="col l4 pull-center"></div>
            <div className="col l4 pull-center">
              <img src={logo} alt="" width="100%" />

              <h5>
                No hay vuelos en el carrito
              </h5>
            </div>
            <div className="col l4 pull-center"></div>
          </div>

        }

        </div>

        <div className="col l2 t2 m1">

        </div>

      </div>  

    </div>
  </>;
};

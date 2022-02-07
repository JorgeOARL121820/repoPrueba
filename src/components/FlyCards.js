import React, { useState } from 'react';

import logo from '../assets/images/logo.png';
import { CustomButton } from './shop/CustomButton';

export const FlyCards = ({vuelo, origen, destino}) => {

    const [count, setCount] = useState(0);

    const handleConcurrency = (num) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'USD',
            maximumSignificantDigits: 3}).format(num)
    };

    const add = () => {
        if(count >= 10) return;

        setCount(count + 1);
    };

    const remove = () => {
        if(count === 0) return;

        setCount(count - 1);
    };

    console.log( vuelo );

    return <>
        <div className="card fila">
            <div className="col l2 t2 m3">
                <div className="card-image">
                    <img src={logo} alt="" width="100%"/>
                </div>
            </div>

            <div className="col l12 t12 m12">
                
                <div className="fila">
                    <div className="col l12 t12 m12">

                        <div className="fila">
                            <div className="col l12 pull-center">
                                <div className="fila">
                                    <div className="col l12 pull-center">

                                        <h3>
                                        Fecha de vuelo: {vuelo.fecha}
                                        </h3>

                                    </div>
                                    <div className="col l2 t4 pull-left">
                                        
                                        <h5>
                                            {'Salida: ' + origen}
                                            <br />
                                            {'Hora: ' + vuelo.hora}
                                        </h5>

                                    </div>

                                    <div className="col l8 t4">
                                        <i className='bx bxs-plane-alt bx-fade-right' ></i>
                                    </div>

                                    <div className="col l2 t4 pull-right">
                                        
                                        <h5>
                                            {'Llegada: ' + destino}
                                            <br />
                                            {'Hora: ' + vuelo.horallegada}
                                        </h5>

                                    </div>
                                </div>
                            </div> 

                            <div className="col l6 t12 m12 pull-center">
                                <h5>
                                    { 'Tiempo de viaje: ' + vuelo.duracion }
                                </h5>
                            </div>

                            <div className="col l6 t12 m12 pull-center">
                                <h5>
                                    { 'Precio: ' + handleConcurrency( vuelo.precio ) + ' p/p' }
                                </h5>
                            </div>

                            <div className="col l12">

                            </div>

                        </div>

                    </div>

                    <div className="fila col l6 t12 m12">

                        <div className='col l6 t12 m12 pull-center'>
                            <h5>¿Cuántos boletos necesita?</h5>
                        </div>

                        <div className='col l12'></div>

                        <div className="number col l2 t5 m5">
                            <button onClick={remove}>-</button>
                        </div>
                        <div className="col l2 pull-center">
                            <label>{count}</label>
                        </div>
                        <div className="number col l2 t5 m5">
                            <button onClick={add}>+</button>
                        </div>

                    </div>

                    <div className="col l6 t12 m12">
                        <CustomButton vueloButton={true} text="bx bxs-cart-add" customText='Agregar al carrito' {...vuelo} origenT={origen} destinoT={destino} cantity={count} />
                    </div>
                </div>

            </div>
        </div>

        <hr />
    </>;
};


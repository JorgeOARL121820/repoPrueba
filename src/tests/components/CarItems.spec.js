import React from "react";
import { mount } from 'enzyme';


import { CartItems } from "../../components/CartItems";
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import '@testing-library/jest-dom';


describe( 'Prueba de funcionalidad de la seccion de tarjetas del carrito', () => {

    const handleConcurrency = (num) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'USD',
            maximumSignificantDigits: 20}).format(num)
      };

    const data = { 
        id: 12345678, 
        precio: 25896, 
        origen: 'Morelia', 
        destino: 'Guadalajara', 
        duracion: '5 hrs',  
        fecha: '2022-03-19', 
        hora: "10:00", 
        horallegada: "15:00", 
        enableButtons: true,
        cantity: 5};

    test( 'Comprobar que al dar click en el botón de "+" incremente el número de boletos', () => {
        // const store = store
        const wrapper = mount( 
            <Provider store={store}>
                <CartItems { ...data } />
            </Provider> 
        );

        
        expect( wrapper ).toMatchSnapshot();
        
        wrapper.find( 'button' ).at(1).simulate( 'click' );
        expect( wrapper.find( '#countValue' ).text() ).toBe( (data.cantity + 1).toString() );

    } );

    test( 'Comprobar que al dar click en el bóton de "-" decremente el número de boletos', () => {

        // const store = store
        const wrapper = mount( 
            <Provider store={store}>
                <CartItems { ...data } />
            </Provider> 
        );

        
        expect( wrapper ).toMatchSnapshot();
        
        wrapper.find( 'button' ).at(0).simulate( 'click' );
        expect( wrapper.find( '#countValue' ).text() ).toBe( (data.cantity - 1).toString() );

    } );

    test( 'Comprobar que al dar click en cualquier boton ya sea "+" ó "-" el costo a pagar se modifique correctamente', () => { 

        // const store = store
        const wrapper = mount( 
            <Provider store={store}>
                <CartItems { ...data } />
            </Provider> 
        );

        
        expect( wrapper ).toMatchSnapshot();
        
        //Se reduce en 1 la cantidad de boletos
        wrapper.find( 'button' ).at(0).simulate( 'click' );
        expect( wrapper.find( 'h3' ).at(1).text() ).toBe( `A pagar por boletos: ${ (handleConcurrency(data.precio * (data.cantity - 1))) }` );

        //Como se redujo en 1 la cantidad de boletos, se incrementa en 1, por lo que se debe quedar a la misma cantidad original
        wrapper.find( 'button' ).at(1).simulate( 'click' );
        expect( wrapper.find( 'h3' ).at(1).text() ).toBe( `A pagar por boletos: ${ (handleConcurrency(data.precio * (data.cantity))) }` );


    });

} );
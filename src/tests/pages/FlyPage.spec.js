import React from 'react';
import { shallow } from 'enzyme';
import { FlyPage } from '../../pages/FlyPage';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import '@testing-library/jest-dom';



describe( 'Prueba del funcionamiento de la pagina de compra de voletos <FlyPage />', () => {


    test( 'Componente debe mostrar correctamente', () => {

        // const store = store

        const wrapper = shallow( 
            <Provider store={store}>
                <FlyPage /> 
            </Provider>
        );

        expect( wrapper ).toMatchSnapshot();

    } );


});
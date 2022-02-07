import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from 'react-router-dom';
import { fetchDestinos, loadCart } from '../actions/actions';

// import { useDispatch } from 'react-redux';
import { NavigationBar } from '../components/NavigationBar';
import { ItemLinks } from '../components/shop/ItemLinks';
import { CartPage } from '../pages/CartPage';
import { FlyPage } from '../pages/FlyPage';
import { TicketsPage } from '../pages/TicketsPage';
import { types } from '../types/types';
const links = {
    icon: 'bx bxs-cart-alt', link: '/carrito'
};
export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        console.log("USE_EFFECT PASO POR AQUÍ");
        dispatch(fetchDestinos());
        dispatch(loadCart());
        dispatch({
            type: types.calculateTotal,
        });
    }, [dispatch]);

    
    return (
        <Router>
            <NavigationBar></NavigationBar>
            <div id="principalDiv" className="pages">
            <div className="card">
                <div className="pull-right">
                    <ItemLinks {...links} />      
                </div>
            </div>
                <Routes>
                    
                
                    <Route exact
                        path="/comprar-vuelos"
                        element={ <FlyPage /> }  />
                    <Route exact
                        path="/mis-compras"
                        element={ <TicketsPage/> }  />
                    <Route exact
                        path="/carrito"
                        element={ <CartPage/> }  />

                    <Route
                            path="*"
                            element={<Navigate to="/comprar-vuelos" />}
                        />


                </Routes>

                </div>
        </Router>
    )
}

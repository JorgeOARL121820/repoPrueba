import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { cartReducer } from '../reducers/cartReducer';
import { comprasReducer } from '../reducers/comprasReducers';
import { destinosReducer } from '../reducers/destinosReducers';
import { vuelosReducer } from '../reducers/vuelosReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    cart: cartReducer,
    compras: comprasReducer,
    destinos: destinosReducer,
    vuelos: vuelosReducer
});


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);
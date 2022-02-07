import { types } from '../types/types';

export const comprasReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        case types.getCompras:
            return {
                compras: action.payload,
                loader: false
            };

        case types.initLoadCompras:
            return {
                loader: true,
                compras: []
            };

        default:
            return state;
    }

}
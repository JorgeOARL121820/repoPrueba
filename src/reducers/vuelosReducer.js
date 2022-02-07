import { types } from '../types/types';

export const vuelosReducer = ( state = {}, action ) => {

    switch ( action.type ) {

        case types.fetchVuelos:
            return {
                vuelos: action.payload,
                loader: false
            }

        case types.initFetchVuelos:
            return {
                loader: true,
                vuelos: []
            };

        default:
            return state;
    }

}
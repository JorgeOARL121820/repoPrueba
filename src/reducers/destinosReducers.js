import { types } from '../types/types';

export const destinosReducer = ( state = {}, action ) => {

    switch ( action.type ) {

        case types.fetchDestinos:
            return {
                destinos: action.payload
            };
            
        default:
            return state;
    }

}
import { types } from '../types/types';

export const cartReducer = ( state = [], action ) => {

    switch ( action.type ) {

        case types.addToCar:
            return [
                ...state,
                action.payload
            ];
        case types.deleteCar:
                return action.payload;
    
        case types.complete:
                return [];

        case types.calculateTotal: 

            console.log(state);

            const car = state.filter( ( item ) => item?.id !== undefined && item?.id !== null );

            const total = car.reduce( ( acumulador, item ) => {
                
                if( item.id !== null )
                return acumulador + (parseFloat(item.precio) * parseFloat(item.cantity));
                return acumulador;
            }, 0 );


            return [
                ...car,
                {
                    precioTotal: total,
                    final: true
                }
            ];

        case types.loadCart:
            return action.payload;

        case types.updateCar:

            const newState = state.map( ( item ) => {

                if( item.id === action.payload.id ) {

                    return {
                        ...item,
                        ...action.payload
                    }

                } else return item;

            });

            return newState;

        case types.removeFromCart: 

            return state.filter( ( item ) => item.id !== action.payload );

        default:
            return state;
    }

}
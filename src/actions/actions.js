import { types } from "../types/types";

export const fetchDestinos = () => {
    return async (dispatch) => {
        const destinos = await getDestinos();

        console.log(destinos);
        
        dispatch({
            type: types.fetchDestinos,
            payload: destinos
        });
    };
};

export const fetchVuelos = ( origen, destino ) => {

    
    return async (dispatch) => {
        dispatch({
            type: types.initFetchVuelos,
        });

        const vuelos = await getVuelos( origen, destino );
            
        dispatch({
            type: types.fetchVuelos,
            payload: vuelos
        });

    };
};

export const deleteCar = ( id ) => {
    return async (dispatch) => {

        let car = removeItemCar(id);

        console.log( "deleteCar", car );

        dispatch({
            type: types.deleteCar,
            payload: car
        });

        dispatch({
            type: types.calculateTotal,
        });

        loadCart();

    };
};

export const addCar = ( data ) => {
    return async (dispatch) => {

        addToCarLS(data);

        dispatch({
            type: types.addToCar,
            payload: data
        });

        dispatch({
            type: types.calculateTotal,
        });

        loadCart();

    };
};

export const loadCart = () => {

    return async (dispatch) => {

        const car = JSON.parse(localStorage.getItem("car"));

        console.log(car);

        dispatch( {
            type: types.loadCart,
            payload: car ?? []
        } )

    };

};

export const updateCar = ( data ) => {
    return async (dispatch) => {

        dispatch({
            type: types.updateCar,
            payload: data
        });

        dispatch({
            type: types.calculateTotal,
        });

        loadCart();

    };
};

export const removeFromCar = ( data ) => {
    return async (dispatch) => {

        removeItemCar(data.id);

        dispatch({
            type: types.removeFromCart,
            payload: data.id
        });

        dispatch({
            type: types.calculateTotal,
        });

        
        loadCart();

    };
};

export const getCarrito = ( ) => {
    return async (dispatch) => {

        const car = getCarritoLS();

        dispatch({
            type: types.getCarrito,
            payload: car
        });


    };
};

export const getCompras = () => {
    return async (dispatch) => {
        
    };
};

export const loadCompras = () => {
    return async (dispatch) => {

        dispatch({
            type: types.initLoadCompras
        });

        const compras = JSON.parse(localStorage.getItem("buy"));

        dispatch({
            type: types.getCompras,
            payload: compras
        });
    };
};

export const finishBuy = ( [nombre, apellidos, direccion, correo] ) => {
    return async (dispatch) => {

        loadBuyToLS( nombre, apellidos, direccion, correo );

        dispatch({
            type: types.complete,
        });

        dispatch({
            type: types.calculateTotal,
        });

    };
};

const addToCarLS = ( dataFly ) => {

    let car = JSON.parse(localStorage.getItem("car"));

    let data = {
        ...dataFly
    };

    if ( car ) {
        car.push(data);
    } else {
        car = [data];
    }

    localStorage.setItem("car", JSON.stringify(car));

}

const removeItemCar = ( id ) => {

    const car = JSON.parse(localStorage.getItem("car"));

    const newCar = car.filter( ( item ) => item.id !== id );

    console.log( "new Car", newCar );

    localStorage.setItem("car", JSON.stringify(newCar));

    return newCar;

};

const getDestinos = async () => {

    const destinos = await fetch(
        "https://pruebatruehome.herokuapp.com/getDestinos"
    ).then((res) => res.json());

    return destinos["cities"];
};

const getVuelos = async ( origen, destino ) => {
    
        const vuelos = await fetch(
            "https://pruebatruehome.herokuapp.com/getVuelos",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    origen: origen,
                    destino: destino
                }),
            }
        ).then((res) => res.json());

        console.log(vuelos);
    
        return vuelos;
};

const getCarritoLS = (  ) => {

    const car = JSON.parse(localStorage.getItem("car"));

    return car;

};

const loadBuyToLS = ( nombre, apellidos, direccion, correo ) => {

    let car = JSON.parse(localStorage.getItem("car"));
    const buy = localStorage.getItem("buy");

    car = car.map( ( item ) => {
        return {
            ...item,
            nombre: nombre,
            apellidos: apellidos,
            direccion: direccion,
            correo: correo,
        }
    });

    if( buy ) {
        const newBuy = JSON.parse(buy);

        localStorage.setItem("buy", JSON.stringify([
            ...newBuy,
            ...car
        ]));

        localStorage.removeItem("car");

    } else {
        localStorage.setItem("buy", JSON.stringify(car));
    
        localStorage.removeItem("car");
    }
    
    
    
};
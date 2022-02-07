
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "../hooks/useForm";

import { fetchVuelos } from '../actions/actions';

import { CustomButton } from '../components/shop/CustomButton';
// import { CustomInput } from '../components/shop/CustomInput';
// import { CustomInput } from '../components/shop/CustomInput';
import { CustomSelect } from '../components/shop/CustomSelect';
import { getDestinos, getVuelos } from '../selectors/comprasSelector';
import { FlyCards } from '../components/FlyCards';
import { Loader } from '../components/Loader';
import { alert } from '../utils/alerts';


export const FlyPage = () => {

  const destinos = useSelector(getDestinos);
  const vuelos = useSelector(getVuelos);
  const dispatch = useDispatch();

  const [options, setOptions] = useState([]);

  const [{origen, destino, fecha}, handleChangeInput] = useForm({
    origen: "",
    destino: ""
  });

  console.log("origen ", origen);
  console.log("destino ", destino);

  useEffect(() => {

    setOptions( destinos?.map( (option) => (
        {
            value: option.id, 
            label: option.name
        } 
    )));
  }, [destinos]);

  const handleOnSubmit = (e) => {
    
    e.preventDefault();

    console.log(origen, destino, fecha);

    if( !origen || !destino ) 
      return alert( "Error", "Debes seleccionar un origen y un destino", "error" );
      

    dispatch(fetchVuelos(origen, destino));
  
  };
  
  return <>
    <div>
    <div className="fila">
      <form className="col l4 t6 m12" onSubmit={handleOnSubmit}>
        <div className="card">
          
          <CustomSelect name={"origen"} optionDefault={origen} options={options} handleSelectedOption={handleChangeInput} />
          <CustomSelect name={"destino"} optionDefault={destino} options={options} handleSelectedOption={handleChangeInput} />

          {/* <CustomInput placeholder={'Fecha de viaje'} type={'date'} name={'fecha'} value={fecha} handleChangeInput={handleChangeInput} /> */}

          <CustomButton />

        </div>
      </form>

      <div className="col l8 t6 m12">
        <div className="card">
          
          <div className="col l12 pull-center">
            <h3>Vuelos disponibles</h3>

            <hr />
          </div>

          {

            vuelos != null && origen !== "" && destino !== ""
            ? ( vuelos.loader ? <Loader /> : vuelos.vuelos?.map( (vuelo) => 
              <FlyCards key={vuelo.id} vuelo={vuelo} origen={(destinos?.filter(dest => (dest.id + '') === (origen + '')))[0]?.name} destino={(destinos?.filter(dest => (dest.id + '') === (destino + '')))[0]?.name} />
            )
            ): null

          }

        </div>
      </div>
    </div>
        

    </div>
  </>;
};

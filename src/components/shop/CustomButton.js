import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { addCar, fetchVuelos } from '../../actions/actions';

import '../../styles/button.css';

export const CustomButton = ({ precio, origen, destino, duracion, origenT, destinoT, fecha, hora, horallegada, cantity, text = "", customText = "", vueloButton = false }) => {
  
  const dispatch = useDispatch();

  const handleClick = () => {

    if( !vueloButton ) return;

    if( cantity === 0 ) return Swal.fire({
      title: 'Advertencia',
      text: 'Para continuar es necesario agregar al menos un boleto',
      icon: 'warning',
      confirmButtonText: 'Aceptar'
    });

    const data = {
      precio: precio,
      origen: origenT,
      destino: destinoT,
      fecha: fecha,
      duracion: duracion,
      hora: hora,
      horallegada: horallegada,
      cantity: cantity,
      id: new Date().getTime()
    }

    dispatch( addCar( data ) );

    dispatch( fetchVuelos( origen, destino, fecha ) );

    Swal.fire({
      title: 'Boleto agregado',
      text: 'El boleto ha sido agregado a la lista de compras',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });

  };
  
  return <>
  
  <div className="group-input">
      
      <button type="" onClick={handleClick}>{ text === "" ? 'Buscar' : <p><i className={text}></i> <span>{customText}</span> </p> }</button>

  </div>

  </>;
};

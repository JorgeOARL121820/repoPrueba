import React, { useEffect } from 'react';
import { CartItems } from '../components/CartItems';

import logo from '../assets/images/emptyCart.gif';
import { useDispatch, useSelector } from 'react-redux';
import { getCompras } from '../selectors/comprasSelector';
import { loadCompras } from '../actions/actions';

export const TicketsPage = () => {
  const buyItems = useSelector( getCompras );

  const dispatch = useDispatch();
  console.log(buyItems);

  useEffect(() => {
    dispatch( loadCompras() );
  }, [dispatch]);

  return <>
    <div>
    
    <div className="card fila">

      <div className="col l12 pull-center">
        <h5> Historial de compras </h5>

        <hr />
      </div>
      
      <div className="col l2 t2 m1"></div>

      <div className="col l8 t8 m10">

        {

          buyItems.compras?.map( (vuelo, index) => {

              return <CartItems key={vuelo.id} {...vuelo} enableButtons={false} />;

          })

        }

      {

        buyItems.compras?.length > 0 ? 
          null
        :

        <div className="fila">
          <div className="col l4 pull-center"></div>
          <div className="col l4 pull-center">
            <img src={logo} alt="" width="100%" />

            <h5>
              No hay compras realizadas
            </h5>
          </div>
          <div className="col l4 pull-center"></div>
        </div>

      }

      </div>

      <div className="col l2 t2 m1"></div>

    </div>  

  </div>

  </>;
};

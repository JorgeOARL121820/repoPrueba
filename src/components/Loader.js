import React from 'react';

import logo from '../assets/images/loader.gif';

export const Loader = () => {
  return <>
    
    <div className="card">
        
        <div className="pull-center" >
            
            <img className="col l4" src={logo} alt="" />

            <br />

            <h6>Buscando, un momento por favor...</h6>

        </div>

    </div>
  
  </>;
};

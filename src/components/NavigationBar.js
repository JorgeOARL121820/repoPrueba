import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import {NavLink} from 'react-router-dom';
import logo from '../assets/images/logo.png';
import minlogo from '../assets/images/minlogo.png';
import '../styles/navbar.css';

export const NavigationBar = () => {

  const [config, setConfig] = useState({
    isOpen: false,
    logo: minlogo,
    openClass: 'close',
    mode: 'light',
    textMode: 'Modo oscuro'
  });

  const body = document.querySelector('body');
  const principalDiv = document.querySelector('#principalDiv');
  const cards = document.querySelectorAll('.card');
  
  const handleOpenCloseMenu = () => {

    if(config.isOpen) {
      setConfig({
        ...config,
        isOpen: false,
        openClass: '',
        logo: logo
      });
      principalDiv.classList.add('close');
      
    } else {
      setConfig({
        ...config,
        isOpen: true,
        openClass: 'close',
        logo: minlogo
      });
      principalDiv?.classList?.remove('close');
    }

  };

  const handleModeChange = () => {
  
    if(config.mode === 'light') {
      setConfig({
        ...config,
        mode: 'dark',
        textMode: 'Modo claro'
      });
      body.classList.add('dark');
      cards.forEach(card => {
        card.classList.add('dark');
      });
    } else {
      setConfig({
        ...config,
        mode: 'light',
        textMode: 'Modo oscuro'
      });
      body.classList.remove('dark');
      cards.forEach(card => {
        card.classList.remove('dark');
      });
    }


  };


  return (
    <>
    <nav className={'sidebar ' + config.openClass}>
        <header>
            <div className="image-text">
                <span className="image">
                    <img src={config.logo} alt="" />
                </span>
            </div>

            <i className='bx bx-chevron-right toggle' onClick={handleOpenCloseMenu}></i>
        </header>

        <div className="menu-bar">
            <div className="menu">

                <ul className="menu-links">
                    <li className="nav-link">
                        <NavLink to={'/comprar-vuelos'} activeclassname='active'>
                            <i className='bx bxs-plane-alt icon' ></i>
                            <span className="text nav-text">Comprar boletos</span>
                        </NavLink>
                    </li>

                    <li className="nav-link">
                        <NavLink to={'/mis-compras'} activeclassname='active'>
                            <i className='bx bx-history icon' ></i>
                            <span className="text nav-text">Ver mis compras</span>
                        </NavLink>
                    </li>

                </ul>
            </div>

            <div className="bottom-content">
                
                <li className="mode">
                    <div className="sun-moon">
                        <i className='bx bx-moon icon moon'></i>
                        <i className='bx bx-sun icon sun'></i>
                    </div>
                    <span className="mode-text text" > { config.textMode } </span>

                    <div className="toggle-switch" onClick={handleModeChange}>
                        <span className="switch" ></span>
                    </div>
                </li>
                
            </div>
        </div>

    </nav>
    </>
);
};

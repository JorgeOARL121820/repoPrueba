import React from 'react';
import { NavLink } from 'react-router-dom';

export const ItemLinks = ({ link, icon }) => {
    return <>
        <div>
            <NavLink to={link} className="link_nav">

                <i className={icon}></i>

            </NavLink>
        </div>
    </>;
};

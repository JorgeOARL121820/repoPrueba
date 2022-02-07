import React from 'react';

import '../../styles/custom_input.css';

export const CustomInput = React.memo(({placeholder, type, name, value, handleChangeInput}) => {
    return <>
        <div className="group-input">
            <label htmlFor={name}>{placeholder}</label>
            <input className="inputCustom" id={name} placeholder={placeholder} type={type} name={name} value={value} onChange={handleChangeInput} />
        </div>
    </>;
});

import React from 'react';
import Select from 'react-select';

import '../../styles/custom_input.css';

export const CustomSelect = React.memo(({optionDefault, name, options = [], handleSelectedOption}) => {
    
    return <>
        <div className="group-input">
            <label htmlFor={name}>{name}</label>
            <Select
                id={name}
                name={name}
                defaultValue={optionDefault}
                onChange={(e) => handleSelectedOption({ ...e, name: name })}
                options={options}/>
        </div>
    </>;
});

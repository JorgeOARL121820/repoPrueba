import { useState } from "react";

export const useForm = ( initialState = {}) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({target, value = "", name = ""}) => {
        setValues({
            ...values,
            [target?.name ?? name]: target?.value ?? value
        });
    }

    return [values, handleInputChange, reset];
    
}

import React from 'react'
import { useState } from 'react';


export default function useForm(inputValues) {
    const [values, setValues] = useState(inputValues);
    console.log(inputValues)

    // spread operator to use only one state object 
    // https://dev.to/deboragaleano/how-to-handle-multiple-inputs-in-react-55el
    const handleChange = (event) => {
        console.log('form change')
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    return { values, setValues, handleChange };
}

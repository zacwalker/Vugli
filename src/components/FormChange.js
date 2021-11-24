import React from 'react'

export default function FormChange(inputValues) {

    const [values, setValues] = React.useState(inputValues);

    // spread operator to use only one state object 
    // https://dev.to/deboragaleano/how-to-handle-multiple-inputs-in-react-55el
    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    return (
        <div>

        </div>
    )
}

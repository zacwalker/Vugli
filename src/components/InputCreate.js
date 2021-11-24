import React from 'react'
import { TextField } from '@mui/material'

export default function InputCreate(props) {
    // TODO label, 
    const { name, value, handleChange } = props;

    return (
        <TextField
            name={name}
            required
            fullWidth
            value={value}
            onChange={handleChange}
            label="Test"
            variant="filled"
        />
    )
}

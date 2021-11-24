import React from 'react'
import { TextField, MenuItem } from '@mui/material'


export default function InputCreate(props) {
    const { label, name, value, options,  onChange } = props;
    
    // if options are provided for a select input
    if (options) {
        const select = true;
        return (
            <TextField
                name={name}
                required
                select={select}
                fullWidth
                value={value}
                onChange={onChange}
                label={label}
                variant="filled"
            >
            {options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
        )
    }

    return (
        <TextField
            name={name}
            required
            fullWidth
            value={value}
            onChange={onChange}
            label={label}
            variant="filled"
        />
    )
}

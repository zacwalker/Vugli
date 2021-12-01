import React from 'react'
import { TextField, MenuItem } from '@mui/material'
import { Box } from '@mui/system';


export default function InputCreate(props) {
  const { label, name, value, options, error = null, onChange } = props;

  // if options are provided for a select input
  if (options) {
    const select = true;
    return (
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, mx: 'auto' },
        }}
      >
        <TextField
          name={name}
          required
          select={select}
          fullWidth
          value={value}
          onChange={onChange}
          {...(error && { error: true })}
          label={label}
          variant="filled"
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Box >
    )
  }

  return (
    <Box
      sx={{
        '& .MuiTextField-root': { m: 1, mx: 'auto' },
      }}
    >
      <TextField
        name={name}
        required
        fullWidth
        value={value}
        onChange={onChange}
        {...(error && { error: true })}
        label={label}
        variant="filled"
      />
    </Box>
  )
}

import React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';


export default function InputField() {
    return (
        <Box>
            <TextField
                required
                fullWidth
                variant="filled"
            />
        </Box>
    )
}


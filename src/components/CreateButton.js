import React from 'react';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


export default function CreateButton() {
    return (
        <Box
            sx={{
                textAlign: 'right',
                '& button': {
                    m: 1
                }
            }}
        >
            <Button
                color="info"
                type="submit"
                variant="outlined"
                startIcon={<DeleteIcon />}
            >
                Discard
            </Button>
            <Button
                color="secondary"
                type="submit"
                variant="contained"
                endIcon={<ChevronRightIcon />}
            >
                Create
            </Button>
        </Box>
    )
}

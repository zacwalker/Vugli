import React from 'react';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useHistory } from "react-router-dom";


export default function CreateButton() {
  const history = useHistory()

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
        variant="outlined"
        onClick={() => {
          history.push('/')
        }}
        startIcon={<DeleteIcon />}
      >
        Discard
      </Button>
      <Button
        color="secondary"
        type="submit"
        variant="contained"
        endIcon={<AddIcon />}
      >
        Create
      </Button>
    </Box>
  )
}

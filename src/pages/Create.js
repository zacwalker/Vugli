import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CreateTextField from '../components/CreateTextField';
import CreateButton from '../components/CreateButton';
import { useState } from 'react';
import Header from '../components/Header';
import InputCreate from '../components/InputCreate';
import FormChange from '../components/FormChange';


export default function Create() {
  // const handleSubmit = (event) => {
  //   if (title && details) {
  //     fetch('http://localhost:8000/notes', {
  //       method: 'POST',
  //       headers: {"Content-type": "application/json"},
  //       body: JSON.stringify({ title, details, category })
  //     }).then(() => history.push('/'))
  //   } 
  // }

  const inputValues = {
    category: "",
    title: "",
    uniqname: "",
    desc: "",
    contInfo: ""
  };

  // const [data, setData] = useState(inputValues);

  const handleSubmit = (event) => {
    // setData(event.target);
    console.log(inputValues.category)
    console.log(event);
    console.log(event);
    console.log(event);
    console.log(event);
    console.log(event);
  }

  return (
    <Box
      sx={{
        mx: 'auto',
        my: 5,
        maxWidth: '60%',
      }}
    >
      {/* <Header /> */}
      <Typography
        variant="h3"
        color="secondary"
        gutterBottom
      >
        Create Post
      </Typography>
      <form noValidate onSubmit={handleSubmit} autoComplete="off">
        <InputCreate
          name='test'
          value='test'
          handleChange={FormChange(inputValues)}
        />
        <CreateTextField inputValues={inputValues} />
        <CreateButton />
      </form>
    </Box>
  )
}

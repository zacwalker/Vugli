import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CreateTextField from '../components/CreateTextField';
import CreateButton from '../components/CreateButton';
import { useState } from 'react';
import Header from '../components/Header';
import InputCreate from '../components/InputCreate';
import useForm from '../components/useForm';


const inputValues = {
  category: "",
  title: "",
  uniqname: "",
  desc: "",
  contInfo: ""
};

const categoryOpts = [
  'Music',
  'Movies',
  'School',
  'Reading',
  'Studying',
];

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



  // const [data, setData] = useState(inputValues);

  const handleSubmit = (event) => {
    // setData(event.target);
    console.log(inputValues.category)
  }

  const { values, handleChange } = useForm(inputValues);



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
        <Box
          sx={{
            '& .MuiTextField-root': { m: 1, mx: 'auto'},
          }}
        >
          <InputCreate
            label='Category'
            name='category'
            options={categoryOpts}
            value={values.category}
            onChange={handleChange}
          />
          <InputCreate
            label='Title'
            name='title'
            value={values.title}
            onChange={handleChange}
          />
          <InputCreate
            label='Uniqname'
            name='uniqname'
            value={values.uniqname}
            onChange={handleChange}
          />
          <InputCreate
            label='Contact Info'
            name='contInfo'
            value={values.contInfo}
            onChange={handleChange}
          />
          <InputCreate
            label='Description'
            name='desc'
            value={values.desc}
            onChange={handleChange}
          />
        </Box>
        <CreateButton />
      </form>
    </Box>
  )
}

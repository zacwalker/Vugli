import React from 'react'
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CreateButton from '../components/CreateButton';
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
  const { values, handleChange } = useForm(inputValues);
  
  // simple (but probably bad) validation
  const [categoryError, setcategoryErr] = useState(false);
  const [titleError, settitleErr] = useState(false);
  const [uniqnameError, setuniqnameErr] = useState(false);
  const [descError, setdescErr] = useState(false);
  const [contInfoError, setcontInfoErr] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!values.category) {
      setcategoryErr(true);
    }
    if (!values.title) {
      settitleErr(true);
    }
    if (!values.uniqname) {
      setuniqnameErr(true);
    }
    if (!values.desc) {
      setdescErr(true);
    }
    if (!values.contInfo) {
      setcontInfoErr(true);
    }

    console.log('valid post submission')
    // if (valid()) {
    //   console.log('valid post submission')
    // }
    // if (title && details) {
    //   fetch('http://localhost:8000/notes', {
    //     method: 'POST',
    //     headers: { "Content-type": "application/json" },
    //     body: JSON.stringify({ title, details, category })
    //   }).then(() => history.push('/'))
    // }
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
          label='Category'
          name='category'
          error={categoryError}
          options={categoryOpts}
          value={values.category}
          onChange={handleChange}
        />
        <InputCreate
          label='Title'
          name='title'
          error={titleError}
          helperT
          value={values.title}
          onChange={handleChange}
        />
        <InputCreate
          label='Uniqname'
          name='uniqname'
          error={uniqnameError}
          value={values.uniqname}
          onChange={handleChange}
        />
        <InputCreate
          label='Contact Info'
          name='contInfo'
          error={contInfoError}
          value={values.contInfo}
          onChange={handleChange}
        />
        <InputCreate
          label='Description'
          name='desc'
          error={descError}
          value={values.desc}
          onChange={handleChange}
        />
        <CreateButton />
      </form>
    </Box>
  )
}

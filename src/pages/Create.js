import React from 'react'
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CreateButton from '../components/CreateButton';
import InputCreate from '../components/InputCreate';
import useForm from '../components/useForm';
import { useHistory } from "react-router-dom";


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
  'Homework',
];

const imageOpts = {
  "Music": "/img/spencer-imbrock-JAHdPHMoaEA-unsplash.jpg",
  "Movies": "/img/krists-luhaers-AtPWnYNDJnM-unsplash.jpg",
  "School": "/img/pexels-pixabay-207691.jpg",
  "Reading": "/img/inaki-del-olmo-NIJuEQw0RKg-unsplash.jpg",
  "Homework": "/img/pexels-keira-burton-6147276.jpg",
}

// TODO make a services directory for serperate validate and insert functions
// TODO improve form validation (limit input chars, length, and types)
export default function Create() {
  const { values, handleChange } = useForm(inputValues);
  const history = useHistory();

  // simple (but bad) validation
  const [categoryError, setcategoryErr] = useState(false);
  const [titleError, settitleErr] = useState(false);
  const [uniqnameError, setuniqnameErr] = useState(false);
  const [descError, setdescErr] = useState(false);
  const [contInfoError, setcontInfoErr] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setcategoryErr(false);
    settitleErr(false);
    setuniqnameErr(false);
    setdescErr(false);
    setcontInfoErr(false);

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

    if (values.category && values.title && values.uniqname && values.desc && values.contInfo) {
      fetch('http://localhost:8000/posts', {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          "category": values.category,
          "image": imageOpts[values.category],
          "title": values.title,
          "uniqname": values.uniqname,
          "desc": values.desc,
          "contInfo": values.contInfo
        })
      }).then(() => history.push('/'))
      console.log('Post Created!')
    }
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
        color="primary"
        gutterBottom
      >
        Create Post
      </Typography>
      <form noValidate onSubmit={handleSubmit} autoComplete="off">
        <InputCreate
          label='Category'
          name='category'
          error={categoryError}
          helperText='This field is required'
          options={categoryOpts}
          value={values.category}
          onChange={handleChange}
        />
        <InputCreate
          label='Title'
          name='title'
          error={titleError}
          helperText='Please give the post a title'
          value={values.title}
          onChange={handleChange}
        />
        <InputCreate
          label='Uniqname'
          name='uniqname'
          error={uniqnameError}
          helperText='This field is required'
          value={values.uniqname}
          onChange={handleChange}
        />
        <InputCreate
          label='Contact Info'
          name='contInfo'
          error={contInfoError}
          helperText='This field is required'
          value={values.contInfo}
          onChange={handleChange}
        />
        <InputCreate
          label='Description'
          name='desc'
          error={descError}
          helperText='This field is required'
          value={values.desc}
          onChange={handleChange}
        />
        <CreateButton />
      </form>
    </Box>
  )
}

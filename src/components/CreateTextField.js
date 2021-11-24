import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';


// TODO: shorten function
export default function CreateTextField(inputValues) {
  const categoryOpts = [
    'Music',
    'Movies',
    'School',
    'Reading',
    'Studying',
  ];

  const [values, setValues] = React.useState(inputValues);

  // spread operator to use only one state object 
  // https://dev.to/deboragaleano/how-to-handle-multiple-inputs-in-react-55el
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <Box
      sx={{
        '& .MuiTextField-root': { m: 1 },
      }}
    >
      {/* <TextField
        name='category'
        fullWidth
        id="outlined-select-category"
        select
        required
        label="Category"
        value={values.category}
        onChange={handleChange}
        variant="filled"
        defaultValue = ""
      >
        {categoryOpts.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField> */}
      <TextField
        name="title"
        required
        fullWidth
        value={values.title}
        onChange={handleChange}
        label="Test"
        variant="filled"
      />
      <TextField
        name="title"
        required
        fullWidth
        value={values.title}
        onChange={handleChange}
        label="Title"
        variant="filled"
      />
      <TextField
        name="uniqname"
        required
        fullWidth
        value={values.uniqname}
        onChange={handleChange}
        label="Uniqname"
        variant="filled"
      />
      <TextField
        name="contInfo"
        required
        fullWidth
        value={values.contInfo}
        onChange={handleChange}
        label="Contact Info"
        variant="filled"
      />
      <TextField
        name="desc"
        required
        fullWidth
        value={values.desc}
        multiline
        rows={4}
        onChange={handleChange}
        label="Description"
        variant="filled"
      />
    </Box>
  );
}

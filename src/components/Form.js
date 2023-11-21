import { Box, Button, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react'

// Form component for Home page
function Form() {

  // custom hook to take form input
  function useFormInput(initialValue){
    const [value, setValue] = useState(initialValue);
    console.log(value);

    const handleChange = (event) => {
      setValue(event.target.value);
    }

    return {
      value,
      onChange: handleChange
    }
  }

  // set the state
  const questions = useFormInput(''); //state to store no. of questions in input form
  const category = useFormInput('Any'); //state to store the category of the quiz in form
  const difficulty = useFormInput('Any'); //state to store the difficulty level of quiz
  const quizType = useFormInput('Any'); //state to store the quiz type

  return (
    <>
      <Box component='form' style={styles.quizForm}>
        <TextField 
          type='text'
          label='Enter the Number of Questions' 
          variant='outlined' 
          color='warning'
          fullWidth
          sx={{ mb: '30px' }}
          {...questions}
        />

        <TextField
          select 
          label='Select Category'
          variant='outlined' 
          color='warning'
          fullWidth
          sx={{ mb: '30px' }}
          {...category}
        >
          <MenuItem value='Any'>Any Category</MenuItem>
          <MenuItem value='Anime'>Anime</MenuItem>
          <MenuItem value='Sports'>Sports</MenuItem>
          <MenuItem value='CA'>Current Affairs</MenuItem>
        </TextField>

        <TextField
          select 
          label='Select Difficulty'
          variant='outlined' 
          color='warning'
          fullWidth
          sx={{ mb: '30px' }}
          {...difficulty}
        >
          <MenuItem value='Any'>Any Difficulty</MenuItem>
          <MenuItem value='Easy'>Easy</MenuItem>
          <MenuItem value='Medium'>Medium</MenuItem>
          <MenuItem value='Hard'>Hard</MenuItem>
        </TextField>

        <TextField
          select 
          label='Select Type'
          variant='outlined' 
          color='warning'
          fullWidth
          sx={{ mb: '30px' }}
          {...quizType}
        >
          <MenuItem value='Any'>Any Type</MenuItem>
          <MenuItem value='MCQ'>Multiple Choice</MenuItem>
          <MenuItem value='TF'>True/False</MenuItem>
        </TextField>

        <Button variant='contained' color='warning' size='large'>
          Start Quiz
        </Button>
      </Box>
    </>
  )
}

// ccustom styles object
const styles = {
  quizForm: {
    width: '100%',
    paddingTop: '1rem',
    borderTop: '1px solid grey'
  },
  labelStyle: {
    color: 'white',
  }
}

export default Form;
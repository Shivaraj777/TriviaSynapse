import { Box, Button, MenuItem, TextField } from '@mui/material';
import React from 'react'

// Form component for Home page
function Form() {
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
        />

        <TextField
          select 
          label='Select Category'
          variant='outlined' 
          color='warning'
          fullWidth
          sx={{ mb: '30px' }}
        >
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
        >
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
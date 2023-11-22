import { Box, Button, MenuItem, TextField } from '@mui/material';
import { useState } from 'react';
import quizData from '../quizData';
import { useQuiz } from '../context/hooks';

// Form component for Home page
function Form() {

  // function to fetch options for quiz select menu
  const getOptions = (data) => {
    return data.map((item) => {
      let objectKeys = Object.keys(item)[0]; //get the first key in the object/item
      return <MenuItem key={objectKeys} value={item[objectKeys]}>{objectKeys}</MenuItem>
    });
  }

  // custom hook to take form input
  function useFormInput(initialValue){
    const [value, setValue] = useState(initialValue);
    // console.log(value);

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
  const category = useFormInput('any'); //state to store the category of the quiz in form
  const difficulty = useFormInput('any'); //state to store the difficulty level of quiz
  const quizType = useFormInput('any'); //state to store the quiz type
  const quiz = useQuiz();
  console.log(quiz);

  // start the quiz
  const handleStartQuiz = async () => {
    const url = `https://opentdb.com/api.php?amount=${questions.value}&category=${category.value}&difficulty=${difficulty.value}&type=${quizType.value}`;
    const response = await quiz.fetchQuestions(url);
    // console.log(url);
    console.log(response);
  }

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
          { getOptions(quizData.category) }
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
          { getOptions(quizData.difficulty) }
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
          { getOptions(quizData.type) }
        </TextField>

        <Button variant='contained' color='warning' size='large' onClick={handleStartQuiz}>
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
import { Box, Stack, Typography } from '@mui/material';
import React from 'react'
import Form from '../components/Form';
import QuizArea from './QuizArea';
import { useQuiz } from '../context/hooks';

function Home() {
  const quiz = useQuiz(); //get the quiz state

  return (
    <>
      {
        (quiz.questions.length === 0)
          ?
          <Stack spacing={3} direction='column' my={3} mx={{ xs: 3, sm: 10 }}>
            <Box>
              <Typography variant='h3'>Start your Quiz now</Typography>
              <Form />
            </Box> 
          </Stack>
          :
          <QuizArea />
      }
    </>
  )
}

export default Home;
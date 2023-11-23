import { Box, Stack, Typography } from '@mui/material';
import React from 'react'
import Form from '../components/Form';
import QuizArea from './QuizArea';
import { useQuiz } from '../context/hooks';
import { HashLoader } from 'react-spinners';

function Home() {
  const quiz = useQuiz(); //get the quiz state
  const { questions, loading} = quiz;

  return (
    <>
      {/* Loader */}
      <Box>
        <HashLoader
          color={'#3585c1'}
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
          style={{ 
            backgroundColor: '#4d4d4dcc', 
            width: '100%', 
            height: '89vh', 
            position: 'absolute', 
            top: '11%' }}
        />
      </Box>
      {
        (questions.length === 0)
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
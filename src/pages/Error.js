import { Button, Stack, Typography } from '@mui/material';
import React from 'react'
import { useQuiz } from '../context/hooks';

function Error() {
  const { error } = useQuiz();

  // go to home page
  const handleGoToHome = () => {
    window.location.reload();
  }

  return (
    <Stack 
      spacing={2} 
      height='85vh' 
      direction='column' 
      justifyContent='center' 
      alignItems='center' 
      textAlign='center'
      mx={3}
    >
      <Typography variant='h6' color='gray' >
        {error.message}
      </Typography>
      <Button variant='outlined' sx={{ color: 'grey'}} onClick={handleGoToHome}>
        Return to Home
      </Button>
    </Stack>
  )
}

export default Error;
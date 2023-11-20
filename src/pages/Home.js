import { Stack, Typography } from '@mui/material';
import React from 'react'
import Form from '../components/Form';

function Home() {
  return (
    <Stack spacing={3} direction='column' my={3} mx={10}>
      <Typography variant='h3'>Start your Quiz now</Typography>
      <Form />
    </Stack>
  )
}

export default Home;
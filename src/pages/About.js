import { Avatar, Box, Card, CardContent, Stack, Typography } from '@mui/material';
import ProfileAvatar from '../assets/images/dp.jpeg';

// About page
function About() {
  return (
    <Stack spacing={6} direction='column' m={6}>

      {/* About Header */}
      <Stack spacing={3} direction='column' alignItems='center'>
        <Typography 
          variant='h6' 
          sx={{ fontFamily: 'Work Sans', color:'#9F7AEA', fontWeight: '700' }}
        >
          PEOPLE LOVE US
        </Typography>
        <Typography 
          variant='h3'
          sx={{ 
            fontFamily: 'Work Sans', 
            fontWeight: '700', 
            textAlign: 'center', 
            fontSize: { xs: '30px', sm: '50px' } 
          }}
        >
          Trivia Synapse
        </Typography>
        <Typography 
          variant='body1'
          sx={{ fontFamily: 'Work Sans', color: '#718096', width: { lg: '20em' }, textAlign: 'center' }}
        >
          Test Your Knowledge with Fun Quizzes on my Exciting Website
        </Typography>
      </Stack>
      
      {/* Aboout card section */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Card sx={{ 
            width: { sm: '40em' },
            display: { sm: 'flex' },
            flexDirection: { sm: 'row' }, 
            borderRadius: '12px',
          }}
        >
          <Box sx={{
              display: 'flex', 
              justifyContent: { xs: 'center' },
              alignItems: { sm: 'center' },
              mt: { xs: '10px' },
              ml: { sm: '10px' } 
            }}
          >
            <Avatar 
              src={ProfileAvatar} 
              alt='Shivaraj' 
              sx={{ height: '90px', width: '90px', align: 'center' }}
            >
              SS
            </Avatar>
          </Box>
          <CardContent>
            <Typography variant='body1' color='#718096' fontFamily='Work Sans'>
              This quiz web app is built using React JS. It can allow the user to select the criteria 
              for their quiz from a list of options. The user can then proceed to answer the questions 
              in the quiz and their performance will be tracked and shown in the scoreboard. 
              Moreover, the app is be designed to be responsive and user-friendly.
            </Typography>
            <Typography variant='body1' color='#718096' fontFamily='Work Sans' mt={3}>
              <b>Shivaraj M Shetty</b> - Full Stack Developer
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Stack>
  )
}

export default About;

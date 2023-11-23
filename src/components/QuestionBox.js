import { Box, Button, Card, CardActions, CardContent, Chip, Paper, Stack } from '@mui/material';

function QuestionBox() {
  return (
    <Stack direction='column' alignItems='center'  my={3} mx={{ xs: 3, sm: 10 }}>
      <Paper>
        <Card sx={{ 
            p: '10px', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            textAlign: 'center', 
            backgroundColor: '#212832', 
            color: 'white', 
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)'
          }}
        >
          {/* Question */}
          <Box>
            <Box sx={{
                display: 'inline-block',
                backgroundColor: 'rgb(50, 60, 74)',
                color: 'yellow',
                fontSize: '1rem',
                padding: '12px',
                borderRadius: '50px 50px 0px 0px',
                position: 'relative',
                top: '11px',
                mx: 'auto'
              }}
            >
              Timer
            </Box>
            <Box sx={{
                backgroundColor: 'rgb(50, 60, 74)',
                padding: '10px',
                fontSize: { xs: '0.8em', sm: '1.5em'},
                fontWeight: '600',
                borderRadius: '11px'
              }}
            >
              Question dhsadhs sandbns hshsha dbsna sdns adnnsadb sdnsd dbs ssbasns sandbs 
            </Box>
          </Box>

          {/* Options */}
          <CardContent sx={{ m: '15px 0px', width: '100%' }}>
            <Box sx={{
                backgroundColor: '#4F5684',
                border: '1px solid #7A70ED',
                m: '9px 0px',
                p: '5px 10px 5px 0px',
                borderRadius: '50px',
                textAlign: 'start',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Box sx={{ 
                  backgroundColor: '#7A70ED', 
                  m: '0px 6px', p: '6px 11px', 
                  fontSize: '12px', 
                  borderRadius: '50px', 
                  transition: 'background-color 0.3s ease-in-out' 
                }}
              >
                A
              </Box>
              <Box>Option 1</Box>
            </Box>
          </CardContent>

          {/* Question box actions */}
          <CardActions sx={{ 
              width: '100%', 
              display: 'flex', 
              flexDirection: 'row', 
              justifyContent: 'space-between', 
              boxSizing: 'border-box', 
              px: { xs: '0', sm: '20px' }
            }}
          >
            <Chip label='Quiz Category' variant='filled' color='secondary' />
            <Button variant='contained' >Next</Button>
          </CardActions>
        </Card>
      </Paper>
    </Stack>
  )
}

export default QuestionBox
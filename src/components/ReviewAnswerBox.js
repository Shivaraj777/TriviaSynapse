import { Box, Card, CardActions, CardContent, Chip, Typography } from '@mui/material';
import React from 'react'
import { decodeHtmlEntities } from '../utils';

function ReviewAnswerBox(props) {
  const { question, options, category, rightAnswer, index } = props;
  const optionNo = ['A', 'B', 'C', 'D']; //header for options

  return (
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
      <Box sx={{ 
          minWidth: { lg: '660px' }, 
          maxWidth: { xs: '445px', lg: '660px'},
          '@media screen and (max-width: 390px)': {
            maxWidth: '286px'
          }
        }}
      >
        <Box sx={{
            display: 'inline-block',
            backgroundColor: 'rgb(50, 60, 74)',
            color: 'yellow',
            fontSize: '1rem',
            padding: '12px',
            borderRadius: '50px 50px 0px 0px',
            position: 'relative',
            top: '11px',
            mx: 'auto',
          }}
        >
          {index + 1}
        </Box>
        <Box sx={{
            backgroundColor: 'rgb(50, 60, 74)',
            padding: '10px',
            fontWeight: '600',
            borderRadius: '11px',
          }}
        >
          <Typography 
            dangerouslySetInnerHTML={{ __html: question }}
            sx={{ 
              fontSize: { xs: '1em', sm: '1.5em'},
              '@media screen and (max-width: 390px)': {
                fontSize: '10px', // Adjust font size for smaller screens
                overflowWrap: 'break-word'
              }
            }}
          ></Typography>
        </Box>
      </Box>

      {/* Options */}
      <CardContent className='q-box_body' sx={{ m: '15px 0px', width: '100%' }}>
        {
          options.map((option, index) => (
            <Box 
              key={option}
              sx={{
                backgroundColor: (option === rightAnswer) ? '#28ae6138' : '#ee545338',
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
                  backgroundColor: (option === rightAnswer) ? '#28ae61' : '#ee5453', 
                  m: '0px 6px', p: '6px 11px', 
                  fontSize: '12px', 
                  borderRadius: '50px', 
                  transition: 'background-color 0.3s ease-in-out' 
                }}
              >
                {optionNo[index]}
              </Box>
              <Box dangerouslySetInnerHTML={{ __html: option }}></Box>
            </Box>
          ))
        }
      </CardContent>

      {/* Question box actions */}
      <CardActions sx={{ 
          width: '100%', 
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'center', 
          boxSizing: 'border-box', 
          px: { xs: '0', sm: '20px' }
        }}
      >
        <Chip label={decodeHtmlEntities(category)} variant='filled' color='secondary' />
      </CardActions>
    </Card>
  )
}

export default ReviewAnswerBox;
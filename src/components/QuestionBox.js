import { Box, Button, Card, CardActions, CardContent, Chip, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useQuiz } from '../context/hooks';
import ClickAudio from '../assets/audios/select-sound.mp3';

// create audio for option selection
const audio = new Audio(ClickAudio);

function QuestionBox(props) {
  const [selectedOption, setSelectedOption] = useState(''); // state to store selected option
  const [selectedAnswer, setSelectedAnswer] = useState(''); //state to store the selected answer
  const [timer, setTimer] = useState(300); //state to manage quiz timer
  const { question, options, category} = props;
  const { questions, next, setNext, score, setScore } = useQuiz(); 
  const optionNo = ['A', 'B', 'C', 'D'];  // option indexes

  // set the timer to answer questions
  useEffect(() => {
    const intervalId = setInterval(() => {
      if(timer > 0){
        setTimer(timer - 1);
      }else{
        setNext(next + 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  });

  //update quiz score by checking answer
  const checkAnswer = (selectedAns) => {
    if (selectedAns === '') {
        return true;
    } else if (selectedAns === options[1]) {
        setScore({ ...score, 'rightAnswers': score.rightAnswers + 1 });
    } else {
        setScore({ ...score, 'wrongAnswers': score.wrongAnswers + 1 });
    }
  }

  // handle option selection for question
  const handleOptionClick = (event, index) => {
    setSelectedOption(index);
    audio.play();
    setSelectedAnswer(event.target.innerText.slice(1).trim());
  }

  // handle switching to next question
  const handleNextQuestion = () => {
    if(next < questions.length){
      checkAnswer(selectedAnswer);
      setNext(next + 1);
      setSelectedAnswer('');
    }
  }

  return (
    <Stack direction='column' alignItems='center'  my={3} mx={{ xs: 0, sm: 10 }}>
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
            {timer}s
          </Box>
          <Box sx={{
              backgroundColor: 'rgb(50, 60, 74)',
              padding: '10px',
              fontWeight: '600',
              borderRadius: '11px',
            }}
          >
            <Typography sx={{ 
              fontSize: { xs: '1em', sm: '1.5em'},
              '@media screen and (max-width: 390px)': {
                fontSize: '10px', // Adjust font size for smaller screens
                overflowWrap: 'break-word'
              }
            }}>{question}</Typography>
          </Box>
        </Box>

        {/* Options */}
        <CardContent className='q-box_body' sx={{ m: '15px 0px', width: '100%' }}>
          {
            options[0].map((option, index) => (
              <Box 
                key={option}
                onClick={(event) => handleOptionClick(event, optionNo[index])} 
                sx={{
                  backgroundColor: selectedOption === optionNo[index] ? '#3f4468b5' : '#4F5684',
                  border: '1px solid #7A70ED',
                  m: '9px 0px',
                  p: '5px 10px 5px 0px',
                  borderRadius: '50px',
                  textAlign: 'start',
                  display: 'flex',
                  alignItems: 'center',
                  '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: '#3f4468b5',
                    transition: 'background-color 0.3s ease-in-out'
                  }
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
                  {optionNo[index]}
                </Box>
                <Box>{option}</Box>
              </Box>
            ))
          }
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
          <Chip label={category} variant='filled' color='secondary' />
          <Button variant='contained' onClick={handleNextQuestion}>Next</Button>
        </CardActions>
      </Card>
    </Stack>
  )
}



export default QuestionBox
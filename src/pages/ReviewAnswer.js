import React from 'react'
import { useQuiz } from '../context/hooks';
import ReviewAnswerBox from '../components/ReviewAnswerBox';
import { Stack } from '@mui/material';

function ReviewAnswer() {
  const { answerList } = useQuiz();

  return (
    <>
      <Stack alignItems='center'  my={3} mx={{ xs: 0, sm: 10 }}>
        {
          answerList.map((answer, index) => {
            const { question, options, category, myAnswer, rightAnswer } = answer;

            return <ReviewAnswerBox key={index} question={question} options={options} myAnswer={myAnswer} rightAnswer={rightAnswer} category={category} index={index} />
          })
        }
      </Stack>
    </>
  )
}

export default ReviewAnswer;
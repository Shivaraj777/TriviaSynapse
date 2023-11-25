import QuestionBox from '../components/QuestionBox';
import { useQuiz } from '../context/hooks';
import { ScoreBoard } from './';

function QuizArea() {
  const { questions, next, score } = useQuiz();

  // generate random number from 0 to 4
  const randomNumber = () => {
    return Math.floor(Math.random() * 4);
  } 

  // get Options for question
  const getOptions = (incorrectAns, correctAns) => {
    let optionsArray = incorrectAns;

    // if correct option does not exists in optionsArray add the correct option to any random index
    if (!optionsArray.includes(correctAns)) {
        optionsArray.splice(randomNumber(), 0, correctAns);
        return [optionsArray, correctAns];
    } else {
        return [optionsArray, correctAns];
    }
  }

  return (
    <>
      {
        (next < questions.length)
          ?
          <QuestionBox 
            key={next}
            question={questions[next].question}
            options={getOptions(questions[next].incorrect_answers, questions[next].correct_answer)}
            category={questions[next].category}
          />
          :
          <ScoreBoard totalQues={questions.length} correctQues={score.rightAnswers} wrongQues={score.wrongAnswers} />
      }
    </>
  )
}

export default QuizArea;
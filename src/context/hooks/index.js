import { useContext, useState } from "react";
import { QuizContext } from "../providers/QuizProvider";
import { getQuizData } from "../../api";

// custom hook which will use useContext hook and return the global state
export const useQuiz = () => {
  return useContext(QuizContext);   
}

// custom hook to handle the state and functionalities for quiz
export const useProvideQuiz = () => {
  const [questions, setQuestions] = useState([]);  //state to store the question fetched from API
  const [score, setScore] = useState({ rightAnswers: 0, wrongAnswers: 0 });  //state to store the score for the quiz section
  const [next, setNext] = useState(0);  //state used to switch to next question while taking quiz
  const [loading, setLoading] = useState(false);  //loader state
  const [answerList, setAnswerList] = useState([]);  //state to store the answered questions
  const [error, setError] = useState({state: false, message: ''}); //state to store error status

  // fetch trivia question
  const fetchQuestions = async (url) => {
    const response = await getQuizData(url);

    if(response.response_code === 0){
      return response.results;
      
    }else if(response.response_code === 1){
      setError({
        state: true,
        message: 'No Results Could not return results. The API does not have enough questions for your query.'
      });
      console.log(`Error in fetching quiz questions: ${response.response_code}`);

    }else if(response.response_code === 2){
      setError({
        state: true,
        message: 'Invalid Parameter Contains an invalid parameter. Arguements passed in are not valid.'
      });
      console.log(`Error in fetching quiz questions: ${response.response_code}`);

    }else{
      setError({
        state: true,
        message: 'Internal Server Error'
      });
      console.log(`Error in fetching quiz questions: ${response.response_code}`);
    }
  }

  // return global quiz state
  return {
    questions,
    setQuestions,
    score,
    setScore,
    next,
    setNext,
    loading,
    setLoading,
    answerList,
    setAnswerList,
    fetchQuestions,
    error
  };
}
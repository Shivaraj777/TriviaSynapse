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

  // fetch trivia question
  const fetchQuestions = async (url) => {
    const response = await getQuizData(url);

    if(response.response_code === 0){
      return response.results;
    }else{
      console.log(`Error in fetching quiz questions: ${response.response_code}`);
    }
  }

  // return global quiz state
  return {
    questions,
    score,
    next,
    loading,
    answerList,
    fetchQuestions
  };
}
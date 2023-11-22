import { createContext } from "react";
import { useProvideQuiz } from "../hooks";

// set the initial state for quiz
const initialState = {
  questions: [],
  score: { rightAnswers: 0, wrongAnswers: 0 },
  next: 0,
  loading: false,
  answerList: [],
  fetchQuestions: () => {}
}

// create the quiz context
export const QuizContext = createContext(initialState);

// component used to wrap the app component so that quiz state is provided to all child components of App
export const QuizProvider = ({children}) => {
  // fetch the current quiz state
  const quiz = useProvideQuiz();

  // provide quiz state to children
  return <QuizContext.Provider value={quiz}>{children}</QuizContext.Provider>
}
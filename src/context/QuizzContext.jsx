import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuestionsService } from "../services/QuestionsService";

export const Context = createContext({});

export function QuizzContext({ children }) {
  const [questions, setQuestions] = useState([]);
  const [userName, setUserName] = useState("");
  const [isEndOfQuizz, setIsEndOfQuizz] = useState(false);
  const [result, setResult] = useState({});
  const [error, setError] = useState(false);
  let navigate = useNavigate();

const handleNavigate = (path) =>{
  navigate(path);
}
  const handlerSetUserName = (username) => {
    if (username) {
      setUserName(username);
      navigate("/Questions");
      setError(!error);
    } else {
      setError(!error);
    }
  };
  const handleCalculateResult = (markedAnswers) => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (question.correctOptionIndex == markedAnswers[index]) {
        correct++;
      }
    });
    return setResult({
      total: questions.length,
      correct,
      percentage: Math.trunc((correct / questions.length) * 100),
    });
  };
  useEffect(() => {
    const fetchQuestions = async () => {
      const questions = await QuestionsService.getRandomQuestions();
      setQuestions(questions);
    };
    if (questions.length === 0) {
      fetchQuestions();
    }
  }, [questions]);
  const contextValue = {
    questions,
    userName,
    isEndOfQuizz,
    result,
    error,
    handleCalculateResult,
    setIsEndOfQuizz,
    handlerSetUserName,
    handleNavigate
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export function useQuizzContext() {
  return useContext(Context);
}

import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "../components/Button";
import QuestionCard from "../components/cards/QuestionCard";
import ProgressBar from "../components/ProgressBar";
import { Context } from "../context/QuizzContext";

export function Questions() {
  const { questions, setIsEndOfQuizz, handleCalculateResult, handleNavigate } =
    useContext(Context);
  const { t } = useTranslation();
  const initialMarkedAnswer = () => {
    return questions ? new Array(questions.length) : [];
  };
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [markedAnswers, setMarkedAnswers] = useState(initialMarkedAnswer);

  const handleSetAnswer = (index) => {
    setMarkedAnswers((arr) => {
      let newArr = [...arr];
      newArr[currentQuestionIndex] = index;
      return newArr;
    });
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  const goToNextQuestion = () => {
    handleSetAnswer(selectedOption);
    setSelectedOption(null);
    if (currentQuestionIndex + 1 === questions.length) {
      setIsEndOfQuizz();
      handleCalculateResult(markedAnswers);
      handleNavigate("/Result");
    }
  };

  return (
    <>
      {questions && questions.length > 0 && (
        <>
          <ProgressBar
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={questions.length}
          />
          <QuestionCard
            question={questions[currentQuestionIndex]}
            setSelectedOption={(index) => setSelectedOption(index)}
            selectedOption={selectedOption}
          />

          <Button
            accent={"mx-auto w-72"}
            disabled={selectedOption === null}
            btnText={t("page-questions.btnText")}
            handleAction={goToNextQuestion}
          />
        </>
      )}
    </>
  );
}

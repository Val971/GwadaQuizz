import React from "react";
import PropTypes from "prop-types";

export default function ProgressBar({ currentQuestion, totalQuestions }) {
  return (
    <div className="flex flex-col items-center my-10 mx-auto w-72">
      <progress
        className="progress h-6  "
        value={(100 * currentQuestion) / totalQuestions}
        max="100"
      ></progress>
      <h3 className="self-end">{`${currentQuestion}/${totalQuestions}`}</h3>
    </div>
  );
}

ProgressBar.defaultProp = {
  currentQuestion: 0,
  totalQuestions: 0,
};
ProgressBar.prototypes = {
  currentQuestion: PropTypes.number,
  totalQuestions: PropTypes.number,
};

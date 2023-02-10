import React from "react";
import PropTypes from "prop-types";

export default function AnswersCard({ question }) {
  return (
    <div className="bg-white-baby-powder flex flex-col items-center m-auto p-5 h-72 w-72 shadow-md rounded-lg">
      <h2 className="text-4xl mt-4">{question}</h2>
    </div>
  );
}

AnswersCard.defaultProp = {
  question: "",
};
AnswersCard.prototypes = {
  question: PropTypes.string,
};

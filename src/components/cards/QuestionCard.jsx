import React from "react";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};
const squareVariants2 = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

export default function QuestionCard({
  question,
  setSelectedOption,
  selectedOption,
}) {
  const { i18n } = useTranslation();

  return (
    <>
      {question && (
        <>
          <motion.div
            key={`${question.id + 1}`}
            animate="visible"
            initial="hidden"
            variants={squareVariants}
            className="bg-white-baby-powder flex flex-col mx-auto p-5 w-72 shadow-ld rounded-lg"
          >
            <h2 className="whitespace-pre-wrap text-2xl font-semibold text-center">
              {i18n.language === "en-US" ? question.title : question.titleFr}
            </h2>
          </motion.div>
          <motion.div
            key={question.id}
            animate="visible"
            initial="hidden"
            variants={squareVariants2}
            className="bg-white-baby-powder flex flex-col mx-auto my-9 p-5 h-72 w-72 items-center shadow-lg gap-4 rounded-lg"
          >
            {question && (
              <>
                {i18n.language === "en-US"
                  ? question.options.map((option, index) => {
                      return (
                        <button
                          className={`${
                            index == selectedOption
                              ? "btn-active"
                              : "bg-green-cadet-blue"
                          } btn rounded-3xl  grow btn-wide border-0`}
                          key={index}
                          onClick={() => setSelectedOption(index)}
                        >
                          {option}
                        </button>
                      );
                    })
                  : question.optionsFr.map((option, index) => {
                      return (
                        <button
                          className={`${
                            index == selectedOption
                              ? "btn-active"
                              : "bg-green-cadet-blue"
                          } btn rounded-3xl  grow btn-wide border-0`}
                          key={index}
                          onClick={() => setSelectedOption(index)}
                        >
                          {option}
                        </button>
                      );
                    })}
              </>
            )}
          </motion.div>
        </>
      )}
    </>
  );
}

QuestionCard.prototypes ={
  question:PropTypes.string,
  setSelectedOption:PropTypes.string,
  selectedOption:PropTypes.string
}
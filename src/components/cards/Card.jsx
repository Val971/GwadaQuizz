import React, { useContext, useState } from "react";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import { Context } from "../../context/QuizzContext";
import { AnimatedCard } from "../../animations/Bounce";

export function Card({
  title,
  description,
  placeholder,
  btnText,
  handleBtnEvent,
  simple,
  image,
}) {
  const [userName, setUserName] = useState("");
  const { error } = useContext(Context);
  const { t } = useTranslation();

  return (
    <AnimatedCard style={"bg-white-baby-powder flex flex-col items-center m-auto p-5 h-72  shadow-md rounded-3xl"}>
      {simple ? (
        <>
          <img src={image} alt="picture caribean beach" />
          <h2 className="text-4xl my-10">{title}</h2>
          <button
            className="btn bg-green-midnight btn-wide border-0"
            onClick={() => handleBtnEvent(userName)}
          >
            {btnText}
          </button>
        </>
      ) : (
        <>
          <h2 className="text-4xl mt-4">{title}</h2>
          <div className="grow flex flex-col items-center justify-end">
            <h3>{description}</h3>
            {error && (
              <h5 className="text-red-600 self-start">
                {t("page-start.errorText")}
              </h5>
            )}
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              placeholder={placeholder}
              className={`input input-bordered w-full max-w-xs mb-4 mt-2 ${
                error ? "input-error" : ""
              }`}
            />
            <button
              className="btn bg-green-midnight btn-wide border-0"
              onClick={() => handleBtnEvent(userName)}
            >
              {btnText}
            </button>
          </div>
        </>
      )}
    </AnimatedCard>
  );
}


Card.prototypes ={
  title:PropTypes.string,
  description:PropTypes.string,
  placeholder:PropTypes.string,
  btnText:PropTypes.string,
  handleBtnEvent:PropTypes.func,
  simple:PropTypes.bool,
  image:PropTypes.string,
}
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Context } from "../context/QuizzContext";
import trophy from "../../src/assets/trophy.png";
import star from "../../src/assets/star.png";
import { Button } from "../components/Button";

export function Result() {
  const { userName, result, setIsEndOfQuizz, handleNavigate } =
    useContext(Context);
  const { t } = useTranslation();
  const retray = () => {
    setIsEndOfQuizz();
    handleNavigate("/Start");
  };
  return (
    <div className="flex flex-col m-auto items-center">
      <motion.div
        className={`w-32 ${result.percentage < 50 ? "" : "animate-bounce"}`}
      >
        <img
          className={`w-32 ${result.percentage < 50 ? "grayscale" : ""}`}
          src={trophy}
          alt="win image"
        />
      </motion.div>

      <h2 className="text-white-baby-powder py-6 font-semibold text-2xl">
        {result.percentage < 50
          ? t("page-result.badText")
          : t("page-result.winText")}{" "}
        {userName}
      </h2>

      <div className=" bg-white-baby-powder flex flex-col items-center justify-center m-auto p-5 btn-wide shrink  gap-5 shadow-md rounded-3xl">
        <div className="flex items-center gap-2">
          <img className="w-8" src={star} alt="star image" />
          <h2 className="text-lg font-semibold">
            {t("page-result.textScore")}
          </h2>
        </div>
        <div
          className="radial-progress bg-coral text-primary-content"
          style={{ "--value": result.percentage }}
        >
          {result.percentage}%
        </div>
        <h3>{t("page-result.score", { percentage: result.percentage })}</h3>
      </div>

      <Button
        disabled={false}
        accent={"mt-5"}
        btnText={t("page-result.btnRetray")}
        handleAction={() => retray()}
      />
      <Button
        disabled={false}
        accent={"btn-accent"}
        btnText={t("page-result.goHome")}
        handleAction={() => handleNavigate("/")}
      />
    </div>
  );
}

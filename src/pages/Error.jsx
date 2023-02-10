import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import caribeanBeach from "../assets/CaribeanBeach.png";

export function Error() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white-baby-powder  p-1 rounded-full shadow-md w-40 md:w-72 lg:w-72"
      >
        <img
          className="rounded-full"
          src={caribeanBeach}
          alt="picture caribean beach"
        />
      </motion.div>
      <p className="text-3xl md:text-3xl lg:text-5xl m-10 font-bold text-white-baby-powder">
        {t("page-error.title")}
      </p>
    </div>
  );
}

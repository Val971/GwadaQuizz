import React, { useContext } from "react";
import { Trans,useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import caribeanBeach from "../assets/CaribeanBeach.png";
import { Button } from "../components/Button";
import { Context } from "../context/QuizzContext";
import { AnimatedCard } from "../animations/Bounce";
import { AnimatedPage } from "../animations/AnimatedPage";

export function Home() {
  const { handleNavigate } = useContext(Context);
  const { t } = useTranslation();

  return (
    <div className="bg-green-teal grow flex flex-col items-center ">
      <AnimatedCard style={""}>
        <h2 className="text-3xl md:text-3xl lg:text-5xl my-10 font-bold text-white-baby-powder">
          {t("page-home.welcome")}
        </h2>
      </AnimatedCard>
      <motion.div
        whileHover={{ scale: 1.05 }}
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: -10, opacity: 1 }}
        transition={{
          delay: 0.3,
          type: "tween",
          stiffness: 120,
          duration: 0.5,
        }}
        className="bg-white-baby-powder  p-1 rounded-full shadow-md w-40 md:w-72 lg:w-72"
      >
        <img
          className="rounded-full box"
          src={caribeanBeach}
          alt="picture caribean beach"
        />
      </motion.div>

      <div className="max-w-screen-sm m-10 text-center text-white-baby-powder">
        <AnimatedPage delay={0.4}>
          <div
            className="first-letter:text-5xl"
            dangerouslySetInnerHTML={{ __html: t("page-home.description",{link:<a href="https://www.google.com/maps/place/Guadeloupe/@16.1496297,-61.39705,10z/data=!3m1!4b1!4m5!3m4!1s0x8c0e755a77287d51:0xecbe3e37b74a07ab!8m2!3d16.265!4d-61.551"> <b>Guadeloupe</b></a>}) }}
          />
        </AnimatedPage>
        <br></br>
        <AnimatedPage delay={0.6}>
          <p>{t("page-home.description2")}</p>
        </AnimatedPage>
      </div>

      <AnimatedPage delay={0.8}>
        <Button
          disabled={false}
          accent={""}
          btnText={t("page-home.btnNext")}
          handleAction={() => handleNavigate("/Start")}
        />
      </AnimatedPage>
    </div>
  );
}

import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import { Card } from "../components/cards/Card";
import { Context } from "../context/QuizzContext";

export function Start() {
  const { handlerSetUserName } = useContext(Context);
  const { t } = useTranslation();

  return (
    <>
      <Card
        title={t("page-start.title")}
        description={t("page-start.description")}
        placeholder={t("page-start.placeholder")}
        btnText={t("page-start.btnText")}
        handleBtnEvent={(username) => handlerSetUserName(username)}
      />
    </>
  );
}

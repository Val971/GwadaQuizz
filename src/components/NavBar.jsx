import React from "react";
import {useNavigate} from "react-router-dom" 
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const {i18n } = useTranslation();
  let navigate = useNavigate() 
  const toogleLanguage = () => {
    if (i18n.language === "en-US") {
      i18n.changeLanguage('fr-FR');
    } else {
      i18n.changeLanguage('en-US');
    }
  };
  return (
    <>
      <nav className=" bg-green-midnight flex-none px-10 w-full flex h-[70px]">
        <ul className="flex flex-row w-full items-center justify-between">
          <li className="text-white-baby-powder cursor-pointer font-bold tracking-widest text-lg">
            <a onClick={() =>  navigate("/")}>Gwadislang Quiz</a>
          </li>
          <li>
            <button
              onClick={() => toogleLanguage()}
              className="btn btn-circle btn-outline text-white-baby-powder"
            >
              {i18n.language === "en-US" ? "FR" : "EN"}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

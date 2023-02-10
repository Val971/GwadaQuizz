import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QuizzContext } from "./context/QuizzContext";
import "./index.css";
import "./i18n/index";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <QuizzContext>
      <App />
    </QuizzContext>
  </BrowserRouter>
);

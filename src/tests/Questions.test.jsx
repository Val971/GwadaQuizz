import "@testing-library/jest-dom";
import {render, screen} from '@testing-library/react'
import React from "react";
import { Context } from "../context/QuizzContext";
import { Questions } from "../pages/Questions";

const contextValues ={
    questions: [
      {
          id: "3htSOQEYfo2vjnw0us8z",
          title: "What is the official language of Guadeloupe?",
          options: [
              "English",
              "French",
              "German",
              "Spanich"
          ],
          correctOptionIndex: 1
      }
  ]
}

describe("Questions", () => {

  it('NameProvider/Consumer shows name of character', () => {
   const wrapper = ({children}) =>(
      <Context.Provider value={contextValues}>
        {children}
      </Context.Provider>
    )
    render(<Questions />, {wrapper})
    
    expect(screen.getByText("What is the official language of Guadeloupe?")).toBeDefined();
    expect(screen.getByText("English")).toBeDefined();
    expect(screen.getByText("French")).toBeDefined();
    expect(screen.getByText("German")).toBeDefined();
    expect(screen.getByText("Spanich")).toBeDefined();
    expect(screen.getByText("Go to the next question")).toBeDefined();
  })
});

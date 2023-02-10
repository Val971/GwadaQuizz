import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import AnswersCard from '../components/cards/AnswersCard';

describe("Card", () => {
  test("displays correct question label on init screen", () => {
    // ARRANGE
    render(<AnswersCard question={"It's a question"}/>);

    // ASSERT
    expect(screen.getByText("It's a question")).toBeDefined();
  });
});

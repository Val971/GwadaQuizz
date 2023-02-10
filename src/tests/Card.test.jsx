import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import {Card} from "../components/cards/Card"

describe("Card", () => {
  test("displays correct label on init card screen", () => {
    // ARRANGE
    render(<Card title={"Let's go"} description={'What should we call you?'} placeholder={'Your name'} btnText={'Start'} handleBtnEvent simple={false} image={""}/>);

    // ASSERT
    expect(screen.getByText("Let's go")).toBeDefined();
    expect(screen.getByText("What should we call you?")).toBeDefined();expect(screen.queryByPlaceholderText("Your name")).toBeDefined();
    expect(screen.getByText("Start")).toBeDefined();
  });
});

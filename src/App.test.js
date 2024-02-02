import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Test counter App", () => {
  render(<App />);
    // assert if initial count value is 0 on render
    const currCount=screen.getByTestId('count-test');
    expect(currCount).toHaveTextContent(0);
  
    // assert if increment button is present
    const incrementButton=screen.getByRole("button",{name:"Increment"});
    expect(incrementButton).toBeInTheDocument();
  
    // assert if decrement button is present
    const decrementButton=screen.getByRole("button",{name:"Decrement"});
    expect(decrementButton).toBeInTheDocument();
  
    // click increment button twice
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    // const currCount=screen.getByTestId('count-test');
  
    // assert if count value is 2
    expect(currCount).toHaveTextContent(2);
  
    // click decrement button once
    fireEvent.click(decrementButton);
  
    // assert if count value is 1
    expect(currCount).toHaveTextContent(1);
  
    // click decrement button once
    fireEvent.click(decrementButton);
  
    // assert if count value is 0
    expect(currCount).toHaveTextContent(0);
  
    // click decrement button once
    fireEvent.click(decrementButton);
  
    // assert if count value is 0 if below 0 it wont decrement
    expect(currCount).toHaveTextContent(0);
});

  /*
  TODO:
    hints:
    for getting dom elements use getBy/queryBy from screen
    use getByRole/findByRole query to find 'increment' button
    use fireevent or user event to click
    make assertions using expect with screen.getBy or queryBy
    repeat the above steps dependent on test case requirement in todo
  */

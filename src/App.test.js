import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Test counter App", () => {
  render(<App />);
  /*
  TODO:
    assert if initial count value is 0 on render
    assert if increment button is present
    assert if decrement button is present
    click increment button twice
    assert if count value is 2
    click decrement button once
    assert if count value is 1
    click decrement button once
    assert if count value is 0
    click decrement button once
    assert if count value is 0 if below 0 it wont decrement

    hints:
    for getting dom elements use getBy/queryBy from screen
    use getByRole/findByRole query to find 'increment' button
    use fireevent or user event to click
    make assertions using expect with screen.getBy or queryBy
    repeat the above steps dependent on test case requirement in todo
  */
});

import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
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
test("check initial count value as 0", () => {
  render(<App />);
    expect(screen.getByText(/Counter Value is 0/i)).toBeInTheDocument();
});

test("check if buttons are present", ()=>{
  render(<App />);

  expect(screen.getByRole('button', {name: /Increment/})).toBeInTheDocument();
  expect(screen.getByRole('button', {name: /Decrement/})).toBeInTheDocument();
});

test("check if count value is 2 after increments", ()=>{
  render(<App />);

  const incrementBtn = screen.getByRole('button', {name: /increment/i});
  fireEvent.click(incrementBtn);
  fireEvent.click(incrementBtn);
  expect(screen.getByText(/Counter Value is 2/)).toBeInTheDocument();
});

test("check if count value is 0 after decrements", ()=>{
  render(<App />);

  const decrementBtn = screen.getByRole('button', {name: /decrement/i});
  fireEvent.click(decrementBtn);
  fireEvent.click(decrementBtn);
  expect(screen.getByText(/Counter Value is 0/)).toBeInTheDocument();
});


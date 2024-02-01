import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("assert if initial count value is 0 on render", () => {
  render(<App />);
  const countValue = screen.getByText(/counter/i)
  expect(countValue).toHaveTextContent(/counter value is 0/i);  
});

test("increment button is present", ()=>{
  render(<App />);
  const incrementButton = screen.getByRole('button', {
    name: /increment/i
  })
  expect(incrementButton).toBeInTheDocument();
})

test("decrement button is present", ()=>{
  render(<App />);
  const decrementButton = screen.getByRole('button', {
    name: /decrement/i
  })
  expect(decrementButton).toBeInTheDocument();
})

test("click increment button twice assert if count value is 2", ()=>{
  render(<App />);
  const incrementButton = screen.getByRole('button', {
    name: /increment/i
  })
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  const countValue = screen.getByText(/counter/i)
  expect(countValue).toHaveTextContent(/counter value is 2/i);  
})

test("click decrement button once assert if count value is 1", ()=>{
  render(<App />);
  const incrementButton = screen.getByRole('button', {
    name: /increment/i
  })
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  const decrementButton = screen.getByRole('button', {
    name: /decrement/i
  })
  fireEvent.click(decrementButton);
  const countValue = screen.getByText(/counter/i)
  expect(countValue).toHaveTextContent(/counter value is 1/i);  
})

test("click decrement button once assert if count value is 0", ()=>{
  render(<App />);
  const incrementButton = screen.getByRole('button', {
    name: /increment/i
  })
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  const decrementButton = screen.getByRole('button', {
    name: /decrement/i
  })
  fireEvent.click(decrementButton);
  fireEvent.click(decrementButton);
  const countValue = screen.getByText(/counter/i)
  expect(countValue).toHaveTextContent(/counter value is 0/i);  
})

test("click decrement button once assert if count value is 0 if below 0 it wont decrement", ()=>{
  render(<App />);
  const incrementButton = screen.getByRole('button', {
    name: /increment/i
  })
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  const decrementButton = screen.getByRole('button', {
    name: /decrement/i
  })
  fireEvent.click(decrementButton);
  fireEvent.click(decrementButton);
  fireEvent.click(decrementButton);
  const countValue = screen.getByText(/counter/i)
  expect(countValue).toHaveTextContent(/counter value is 0/i);  
})


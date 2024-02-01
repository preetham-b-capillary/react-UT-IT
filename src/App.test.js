import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

/*
   TODO:
    1. Fill in the username and password fields getByLabelText
    2. type user name and password - fireEvent.change or userEvent.type
    3. find the submit button - getByRole/findByRole
    4. click the submit button - fireEvent.click or userEvent.click
    5. add a assertion to check if submitted data is correct
    6. mock onSubmit function to the App component and check if its getting called with correct username and password
  */

test("Fill in the username and password fields getByLabelText", () => {
  render(<App />);
  const username = screen.getByRole('textbox', {name: /username/i})
  const password = screen.getByLabelText(/password/i)
  fireEvent.change(username,{target: {value: 'Akash'}})
  fireEvent.change(password,{target: {value: 'Password123'}})
  expect(username).toHaveValue("Akash")
  expect(password).toHaveValue("Password123")
});

test("type user name and password - fireEvent.change or userEvent.type", () => {
  render(<App />);
  const username = screen.getByRole('textbox', {name: /username/i})
  const password = screen.getByLabelText(/password/i)
  const submitButton = screen.getByRole('button', {
    name: /submit/i
  })
  fireEvent.change(username,{target: {value: 'Akash'}})
  fireEvent.change(password,{target: {value: 'Password123'}})
  fireEvent.click(submitButton);
  expect(username).toHaveValue("Akash")
  expect(password).toHaveValue("Password123")
});

test("find the submit button", () => {
  render(<App />);
  const submitButton = screen.getByRole('button', {
    name: /submit/i
  })
  expect(submitButton).toBeInTheDocument()
});

test("click the submit button", () => {
  const mockedFn = jest.fn();
  render(<App onSubmit={mockedFn}/>);
  const username = screen.getByRole('textbox', {name: /username/i})
  const password = screen.getByLabelText(/password/i)
  const submitButton = screen.getByRole('button', {
    name: /submit/i
  })
  

  fireEvent.change(username,{target: {value: 'Akash'}})
  fireEvent.change(password,{target: {value: 'Password123'}})
  fireEvent.click(submitButton);
  expect(mockedFn).toHaveBeenCalled()
});

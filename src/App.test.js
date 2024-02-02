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
test("filling details and submitting", () => {
  const mockhandleSubmit = jest.fn();

  render(<App onSubmit={mockhandleSubmit}/>)
  const user = screen.getByRole('textbox', {  name: /username/i});
  const pass = screen.getByRole('textbox', {  name: /password/i});
  const submit = screen.getByRole('button', {name: /submit/i});
  const form = screen.getByRole("form", {name: ""})
  fireEvent.change(user, {
    target: { value: "Kushagra" }
  });
  fireEvent.change(pass, {
    target: { value: "12345678" }
  });
  fireEvent.click(submit);
  expect(mockhandleSubmit).toHaveBeenLastCalledWith({
    username: "Kushagra",
    password: "12345678"
  });
});



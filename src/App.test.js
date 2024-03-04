import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

const mockFuncSubmit=jest.fn();

test("Stimulate login flow", () => {
  render(<App onSubmit={mockFuncSubmit}/>);
  // 1. Fill in the username and password fields getByLabelText
  const userNameInput = screen.getByLabelText("Username");
  const pwdInput = screen.getByLabelText("Password");
  userEvent.type(userNameInput, "Nandini");
  userEvent.type(pwdInput, "12345678");
  expect(userNameInput.value).toBe("Nandini");
  expect(pwdInput.value).toBe("12345678");

  // 2. type username and password - fireEvent.change or userEvent.type
  fireEvent.change(userNameInput, { target: { value: "Nandini Palakollu" } });
  fireEvent.change(pwdInput, { target: { value: "123456" } });

  // 3. find the submit button - getByRole/findByRole
  const submitButton=screen.getByRole('button',{name:'Submit'});
  expect(submitButton).toBeInTheDocument();

  // 4. click the submit button - fireEvent.click or userEvent.click
  fireEvent.click(submitButton);

  // 5. add an assertion to check if submitted data is correct
  expect(mockFuncSubmit).toHaveBeenCalledWith({
    username:"Nandini Palakollu",
    password:"123456"
  })
});

/*
  TODO:
  1. Fill in the username and password fields getByLabelText
  2. type user name and password - fireEvent.change or userEvent.type
  3. find the submit button - getByRole/findByRole
  4. click the submit button - fireEvent.click or userEvent.click
  5. add a assertion to check if submitted data is correct
  6. mock onSubmit function to the App component and check if its getting called with correct username and password
*/

import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("Stimulate login flow", () => {
  const mockSubmit = jest.fn();
  render(<App onSubmit={mockSubmit} />);
  /*
   TODO:
   */
  //1. Fill in the username and password fields getByLabelText
  const username = screen.getByRole("textbox", {
    name: /username/i,
  });
  expect(username).toHaveValue("");
  const password = screen.getByLabelText(/password/i);
  expect(password).toHaveValue("");

  //2. type user name and password - fireEvent.change or userEvent.type
  fireEvent.change(username, { target: { value: "Bhavik" } });
  fireEvent.change(password, { target: { value: "Bhavik@34" } });

  expect(username).toHaveValue("Bhavik");
  expect(password).toHaveValue("Bhavik@34");

  //3. find the submit button - getByRole/findByRole
  const submitButton = screen.getByRole("button", { name: /submit/i });
  expect(submitButton).toBeInTheDocument();

  //4. click the submit button - fireEvent.click or userEvent.click
  fireEvent.click(submitButton);

  //5. add a assertion to check if submitted data is correct
  //6. mock onSubmit function to the App component and check if its getting called with correct username and password
  expect(mockSubmit).toHaveBeenCalledWith({
    username: "Bhavik",
    password: "Bhavik@34",
  });
});

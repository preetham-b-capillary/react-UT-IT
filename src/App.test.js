import { fireEvent, getByLabelText, getByRole, render, screen } from "@testing-library/react";
import App from "./App";


test("Stimulate login flow", () => {

  /*
   TODO:
    1. Fill in the username and password fields getByLabelText
    2. type user name and password - fireEvent.change or userEvent.type
    3. find the submit button - getByRole/findByRole
    4. click the submit button - fireEvent.click or userEvent.click
    5. add a assertion to check if submitted data is correct
    6. mock onSubmit function to the App component and check if its getting called with correct username and password
  */
});


describe("Testing Login form", () => {

  test("filling username and password fields", () => {

    render(<App />);
    const username = screen.getByLabelText("Username")
    const password = screen.getByLabelText("Password")
    expect(username).toBeInTheDocument()
    expect(password).toBeInTheDocument()

    fireEvent.change(username, {
      target: { value: "Nikhil" }
    })

    fireEvent.change(password, {
      target: { value: "Joshi" }
    })

    expect(username.value).toBe("Nikhil")
    expect(password.value).toBe("Joshi")
  })


  test("finding submit button", () => {
    render(<App />)
    const submitButton = screen.getByRole("button")
    expect(submitButton).toBeInTheDocument()

  })


  test("testing the submit button", () => {
    render(<App />)
    const submitButton = screen.getByRole("button")
    fireEvent.click(submitButton)

  })


  test('submits with correct username and password', () => {

    const mockSubmit = jest.fn();
    render(<App onSubmit={mockSubmit} />);


    const username = screen.getByLabelText("Username")
    const password = screen.getByLabelText("Password")
    expect(username).toBeInTheDocument()
    expect(password).toBeInTheDocument()



    fireEvent.change(username, { target: { value: 'testuser' } });
    fireEvent.change(password, { target: { value: 'testpassword' } });


    const submitButton = screen.getByRole("button")
    fireEvent.click(submitButton);


    expect(mockSubmit).toHaveBeenCalled();
  });


})

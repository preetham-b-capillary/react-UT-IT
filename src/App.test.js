

import { fireEvent, getByTestId, render, screen } from "@testing-library/react";

import App from "./App";
import { userEvent } from '@testing-library/user-event';


test("Stimulate login flow", () => {
  render(<App />);
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

// test("Test counter App", () => {
//   render(<App />);
//   /*
//   TODO:
//     assert if initial count value is 0 on render
//     assert if increment button is present
//     assert if decrement button is present
//     click increment button twice
//     assert if count value is 2
//     click decrement button once
//     assert if count value is 1
//     click decrement button once
//     assert if count value is 0
//     click decrement button once
//     assert if count value is 0 if below 0 it wont decrement

//     hints:
//     for getting dom elements use getBy/queryBy from screen
//     use getByRole/findByRole query to find 'increment' button
//     use fireevent or user event to click
//     make assertions using expect with screen.getBy or queryBy
//     repeat the above steps dependent on test case requirement in todo
//   */
// });



describe("UI Testing", () => {

  test("Increment button present or not", () => {
    const { getByTestId } = render(<App title="Increment" />);
    expect(getByTestId("increment-btn")).toHaveTextContent("Increment")

  })



  test("Decrement button present or not", () => {
    const { getByTestId } = render(<App title="Decrement" />)
    expect(getByTestId("decrement-btn")).toHaveTextContent("Decrement")
  })



  test("checking initial value is 0", () => {
    const { getByTestId } = render(<App title="count" />)
    expect(getByTestId("count-val")).toHaveTextContent(0)
  })




  test("check Counter value after increment", () => {
    const { getByTestId } = render(<App title="Increment" />);
    const button = getByTestId("increment-btn");
    expect(getByTestId("count-val")).toHaveTextContent("0")
    fireEvent.click(button)
    expect(getByTestId("count-val")).toHaveTextContent("1")
    fireEvent.click(button)
    expect(getByTestId("count-val")).toHaveTextContent("2")
  })





  test("check Counter value after decrement", () => {
    const { getByTestId } = render(<App title="Decrement" />);
    const button1 = getByTestId("increment-btn");
    const button2 = getByTestId("decrement-btn");
    expect(getByTestId("count-val")).toHaveTextContent("0")
    fireEvent.click(button1)
    expect(getByTestId("count-val")).toHaveTextContent("1")
    fireEvent.click(button1)
    expect(getByTestId("count-val")).toHaveTextContent("2")
    fireEvent.click(button2)
    expect(getByTestId("count-val")).toHaveTextContent("1")
  })




  test("check Counter value does not goes below 0", () => {
    const { getByTestId } = render(<App title="Decrement" />);
    const button1 = getByTestId("increment-btn");
    const button2 = getByTestId("decrement-btn");
    expect(getByTestId("count-val")).toHaveTextContent("0")
    fireEvent.click(button1)
    expect(getByTestId("count-val")).toHaveTextContent("1")
    fireEvent.click(button1)
    expect(getByTestId("count-val")).toHaveTextContent("2")
    fireEvent.click(button2)
    expect(getByTestId("count-val")).toHaveTextContent("1")
    fireEvent.click(button2)
    expect(getByTestId("count-val")).toHaveTextContent("0")
    fireEvent.click(button2)
    expect(getByTestId("count-val")).toHaveTextContent("0")
  })


})


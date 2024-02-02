import { act, fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("Write test case for todo", async () => {
  render(<App />);
  // check if elements renders and button, input box is present
  const addToDoBtn = screen.getByRole("button", {
    name: /add todo/i,
  });
  const inputBox = screen.getByRole("textbox");
  expect(addToDoBtn).toBeInTheDocument();
  expect(inputBox).toBeInTheDocument();

  // stimulate add todo
  act(() => {
    fireEvent.change(inputBox, {
      target: { value: "Finish pending assignments" },
    });
    fireEvent.click(addToDoBtn);
  });
  const addedTask = screen.getByText(/finish pending assignments/i);
  expect(addedTask).toBeInTheDocument();

  // on success assert on notification and check if inserted data present in ui
  fireEvent.change(inputBox, { target: { value: "Successful task" } });
  fireEvent.click(addToDoBtn);
  const successTask = screen.getByText(/successful task/i);
  expect(successTask).toBeInTheDocument();

  // if failure assert failure notification and new row should not be created
  fireEvent.change(inputBox, { target: { value: "" } });
  fireEvent.click(addToDoBtn);
  const displayAlert = await screen.findByText(/error in creating new todo/i);
  expect(displayAlert).toBeInTheDocument();

  // if delete button clicked assert on notification and check if deleted data is not present in ui
  fireEvent.change(inputBox, {
    target: { value: "To Delete the task" },
  });
  fireEvent.click(addToDoBtn);
  const deleteTask = await screen.findAllByText(/to delete the task/i);
  expect(deleteTask[0]).toBeInTheDocument();
  const deleteToDoBtn = await screen.findAllByRole("button", {
    name: /delete/i,
  });
  fireEvent.click(deleteToDoBtn[0]);
  const first_row= screen.queryByText(/pushes/);
  expect(first_row).toBeNull(); // deleted task not present in ui
});

/*
    check if elements renders and button, input box is present
    stimulate add todo
    on success assert on notification and check if inserted data present in ui
    if failure assert failure notification and new row should not be created
    if delete button clicked assert on notification and check if deleted data is not present in ui
*/

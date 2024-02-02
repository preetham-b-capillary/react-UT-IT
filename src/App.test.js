import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { act } from "react-dom/test-utils";

describe("Write test case for todo", () => {
  test("check if elements renders and button, input box is present", () => {
    render(<App />);

    const lableToDoList = screen.getByRole("heading", {
      name: /todo list/i,
    });
    expect(lableToDoList).toBeInTheDocument();

    const inputBox = screen.getByRole("textbox");
    expect(inputBox).toBeInTheDocument();

    const addToDoButton = screen.getByRole("button", {
      name: /add todo/i,
    });

    expect(addToDoButton).toBeInTheDocument();
  });
  test("stimulate add todo on success assert on notification and check if inserted data present in ui", async () => {
    render(<App />);
    const inputBox = screen.getByRole("textbox");
    fireEvent.change(inputBox, { target: { value: "First Todo" } });
    expect(inputBox).toHaveValue("First Todo");
    const addToDoButton = screen.getByRole("button", {
      name: /add todo/i,
    });
    expect(addToDoButton).toBeInTheDocument();
    fireEvent.click(addToDoButton);
    await waitFor(() => screen.getByText(/Create Success/i));

    expect(
      screen.getByText(/created todo named First Todo/i)
    ).toBeInTheDocument();
  });

  test("if failure assert failure notification and new row should not be created", async () => {
    render(<App />);

    const addButton = screen.getByRole("button", { name: /add todo/i });

    fireEvent.click(addButton);

    await waitFor(() => screen.getByText(/Error in creating new todo/i));
  });

  test("if delete button clicked assert on notification and check if deleted data is not present in ui", async () => {
    render(<App />);

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Delete Me" },
    });
    fireEvent.click(screen.getByRole("button", { name: /add todo/i }));

    await waitFor(() => screen.getAllByText(/Create Success/i));

    fireEvent.click(screen.getByRole("button", { name: /delete/i }));

    await waitFor(() => screen.getByText(/Delete success/i));

    expect(screen.queryByText("Delete Me")).not.toBeInTheDocument();
  });
});

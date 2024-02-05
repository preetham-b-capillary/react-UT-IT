import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
/*
  check if elements renders and button, input box is present
  stimulate add todo
  on success assert on notification and check if inserted data present in ui
  if failure assert failure notification and new row should not be created
  if delete button clicked assert on notification and check if deleted data is not present in ui
*/
jest.setTimeout(10000);

test('checking if elements render', () => {
  render(<App />);
  
  expect(screen.getByRole('button', {  name: /add todo/i})).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});


test('checking if inserted data is present in ui on success', () => {
  render(<App />);

  const addTodo = screen.getByRole('button', {  name: /add todo/i});
  const inputBox = screen.getByRole('textbox');
  fireEvent.change(inputBox, {
    target: {value: "New task"}
  });
  fireEvent.click(addTodo);
  const task = screen.getByText(/New Task/i);
  expect(task).toBeInTheDocument();
});

test('checking if invalid data is absent from ui on failure', () => {
  render(<App />);

  const addTodo = screen.getByRole('button', {  name: /add todo/i});
  const inputBox = screen.getByRole('textbox');
  fireEvent.change(inputBox, {
    target: {value: ""}
  });
  fireEvent.click(addTodo);
  const errorAlert = screen.getByText(/error in creating new todo/i);
  expect(errorAlert).toBeInTheDocument();
});

test('checking if data is deleted from ui on clicking delete button', async () => {
  render(<App />);

  const addTodo = screen.getByRole('button', {  name: /add todo/i});
  const inputBox = screen.getByRole('textbox');
  fireEvent.change(inputBox, {
    target: {value: "New task"}
  });
  fireEvent.click(addTodo);
  
  const addedAlert = await screen.findAllByText(/created todo named New Task/i);
  expect(addedAlert[0]).toBeInTheDocument();
  const task = await screen.findAllByText(/New Task/i);
  
  const deleteBtn = screen.getByRole('button', {  name: /delete/i});
  fireEvent.click(deleteBtn);
  expect(task[2]).not.toBeInTheDocument();
})
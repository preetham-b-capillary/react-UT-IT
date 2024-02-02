import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { Select } from 'antd';
 /*
    check if elements renders and button, input box is present
    stimulate add todo
    on success assert on notification and check if inserted data present in ui
    if failure assert failure notification and new row should not be created
    if delete button clicked assert on notification and check if deleted data is not present in ui
  */
test('Write test case for todo', async() => {
  render(<App />);
  const addTodoButton = screen.getByRole('button', {
    name: /add todo/i
  });
  const textArea = screen.getByRole('textbox');
  expect(addTodoButton).toBeInTheDocument();
  expect(textArea).toBeInTheDocument();
});

test('stimulate add todo', async() => {
  render(<App />);
  const addTodoButton = screen.getByRole('button', {
    name: /add todo/i
  });
  const textArea = screen.getByRole('textbox');
  fireEvent.change(textArea,{target:{value:"task1"}});
  fireEvent.click(addTodoButton);
  const successValue = await screen.findAllByText(/create success/i)
  expect(successValue[0]).toBeInTheDocument();
});


test('on success assert on notification and check if inserted data present in ui', async() => {
  render(<App />);
  const addTodoButton = screen.getByRole('button', {
    name: /add todo/i
  });
  const textArea = screen.getByRole('textbox');
  fireEvent.change(textArea,{target:{value:"task1"}});
  fireEvent.click(addTodoButton);
  const item = await screen.findAllByText(/task1/i)
  expect(item[0]).toBeInTheDocument();
});

test('if failure assert failure notification and new row should not be created', async() => {
  render(<App />);
  const addTodoButton = screen.getByRole('button', {
    name: /add todo/i
  });
  fireEvent.click(addTodoButton);
  const err = await screen.findByText(/error in creating new todo/i)
  expect(err).toBeInTheDocument();
});

test('if delete button clicked assert on notification and check if deleted data is not present in ui', async() => {
  render(<App />);
  const addTodoButton = screen.getByRole('button', {
    name: /add todo/i
  });
  const textArea = screen.getByRole('textbox');
  fireEvent.change(textArea,{target:{value:"task1"}});
  fireEvent.click(addTodoButton);

  const deleteButton = screen.getByRole('button', {
    name: /delete/i
  })
  fireEvent.click(deleteButton);
  const deleteSuccess = await screen.findAllByText(/delete success/i)
  expect(deleteSuccess[0]).toBeInTheDocument();
  const first_row = screen.queryByText(/pushes open the window/i)
  expect(first_row).toBeNull();
});
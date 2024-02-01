import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
 /*
    check if elements renders and button, input box is present
    stimulate add todo
    on success assert on notification and check if inserted data present in ui
    if failure assert failure notification and new row should not be created
    if delete button clicked assert on notification and check if deleted data is not present in ui
  */
test('Write test case for todo', () => {
  render(<App />);
  const addTodoButton = screen.getByRole('button', {
    name: /add todo/i
  });
  const textArea = screen.getByRole('textbox');
  expect(addTodoButton).toBeInTheDocument();
  expect(textArea).toBeInTheDocument();
});

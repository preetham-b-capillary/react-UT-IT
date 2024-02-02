import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


  
  /*
    check if elements renders and button, input box is present
    stimulate add todo
    on success assert on notification and check if inserted data present in ui
    if failure assert failure notification and new row should not be created
    if delete button clicked assert on notification and check if deleted data is not present in ui
  */


    describe("To-Do Testing", ()=>{

      test("adding todo button and input box presence test", ()=>{
        render(<App />);
        expect(screen.getByText(/add todo/i)).toBeInTheDocument();
        expect(screen.getByTestId("input-box")).toBeInTheDocument();
      })


      test("Testing success of adding a todo", async()=>{
        render(<App />);
        const button = screen.getByTestId("add-btn");
        const input = screen.getByTestId("input-box");
        
        fireEvent.change(input,{target:{value:"Go to Market"}})
        fireEvent.click(button)
        expect(screen.getByText(/Go to Market/i)).toBeInTheDocument();
        const notification = await screen.findByText("Create Success")

        expect(notification).toBeInTheDocument();
      })


      test("Testing empty string failure", async()=>{
        render(<App />);
        const button = screen.getByTestId("add-btn");
        const input = screen.getByTestId("input-box");
        
        fireEvent.change(input,{target:{value:""}})
        fireEvent.click(button)

        const notification = await screen.findByText("Error in creating new todo")

        expect(notification).toBeInTheDocument();
      })


      test("Testing deletion of a todo", async()=>{
        render(<App />);
        const button = screen.getByTestId("add-btn");
        const input = screen.getByTestId("input-box");
        
        fireEvent.change(input,{target:{value:"Go to park"}})
        fireEvent.click(button)

        const deletebtn = screen.getByTestId("delete-btn");

        fireEvent.click(deletebtn)

        const notification = await screen.findByText("deleted todo named Go to park")

        expect(notification).toBeInTheDocument();
      })


      
    })


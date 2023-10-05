import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  // const [enteredtitle , setenteredtitle] = useState('')
  // const [enteredAmount , setenteredAmount] = useState('')
  // const [enteredDate , setenteredDate] = useState('')
  // const [enteredlocation , setenteredlocation] = useState('')\

  const [userInput, setUI] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
    enteredLocation: "",
  });
  const titlehandler = (event) => {
    setUI({
      ...userInput,
      enteredTitle: event.target.value,
    });
  };
  const amounthandler = (event) => {
    setUI((prevState) => {
      return { ...userInput, enteredAmount: event.target.value };
    });
  };
  const datehandler = (event) => {
    const selectedDate = event.target.value
    const formatted_date = new Date(selectedDate) ;
    
    setUI((prevState) => {          // Setter function for user input 
      return { ...prevState, enteredDate: formatted_date };
    });
  };

  const locationhandler = (event) => {
    setUI((prevState) => {
      return { ...userInput, enteredLocation: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = { ...userInput };
    props.onSave(expenseData);
    console.log( expenseData);
    setUI({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
      enteredLocation: "",
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titlehandler}
            value={userInput.enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInput.enteredAmount}
            onChange={amounthandler}
            min="0.01"
            step="0.01"
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            
            onChange={datehandler}
            value={userInput.enteredDate}
          />
        </div>

        <div className="new-expense__control">
          <label>Location</label>
          <input
            type="text"
            value={userInput.enteredLocation}
            
            onChange={locationhandler}
            
          />
        </div>
      </div>
      <button className="new-expense__control" type="submit">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;

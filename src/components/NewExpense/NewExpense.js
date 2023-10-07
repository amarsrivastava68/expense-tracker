import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const datahandler = (comingdata) => {
    const expensedata = {
      ...comingdata,
      id: Math.random().toString(),
    };
    props.onAdd(expensedata);
    setIsEditing(false)
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense </button>
      )}
     {isEditing && <ExpenseForm onSave={datahandler} onclose={stopEditingHandler}/>}
    </div>
  );
};
export default NewExpense;

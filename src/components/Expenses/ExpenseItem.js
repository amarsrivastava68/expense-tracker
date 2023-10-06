import "./Expenseitem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const [price, setPrice] = useState(props.amount);

  const clickHandler = () => {
    setTitle("This is the updated new title ");
  };
  const deleteHandler = () => {
    setPrice(0);
  };
  const buttonStyle = {
    margin: "5px",
    padding: "8px 16px", // Adjust the padding as needed
    borderRadius: "5px", // Adjust the border radius as needed
    backgroundColor: "yellow", // Change the background color as needed
    color: "black", // Change the text color as needed
    border: "3px", // Remove the default button border
    cursor: "pointer",
  };

  
  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__location">{props.location}</div>

          <div className="expense-item__price">
            Rs {price}{" "}
            <FontAwesomeIcon icon={faTrash} onClick={deleteHandler} />
          </div>
        </div>
        <button style={buttonStyle} onClick={clickHandler}>
          ChangeTitle
        </button>
      </Card>
    </>
  );
}

export default ExpenseItem;

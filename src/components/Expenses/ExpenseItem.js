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
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </>
  );
}

export default ExpenseItem;

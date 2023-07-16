import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./Expenseitem.css";
function ExpenseItem(props) {
  useState(props.title);

  let [title, setTitle] = useState(props.title);
  const clickedHandler = () => {
    setTitle("updated");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.price}$</div>
        <button onClick={clickedHandler}> Update title!</button>
      </div>
    </Card>
  );
}
export default ExpenseItem;

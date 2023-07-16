import React, { useState } from "react";
import ExpenseItem from "./Expenseitem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
function Expenses(props) {
  const [defaultYear, setNewYear] = useState("2020");
  const filterChangeHandler = (year) => {
    setNewYear(year);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={defaultYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseItem
        date={props.items[0].date}
        title={props.items[0].name}
        price={props.items[0].price}
      ></ExpenseItem>
      <ExpenseItem
        date={props.items[1].date}
        title={props.items[1].name}
        price={props.items[1].price}
      ></ExpenseItem>
      <ExpenseItem
        date={props.items[2].date}
        title={props.items[2].name}
        price={props.items[2].price}
      ></ExpenseItem>
      <ExpenseItem
        date={props.items[3].date}
        title={props.items[3].name}
        price={props.items[3].price}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;

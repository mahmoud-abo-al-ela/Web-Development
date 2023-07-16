import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // })
  const titleChange = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({...userenteredTitle: event.target.value});
  };
  const amountChange = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({...userenterdAmount: event.target.value});
  };
  const dateChange = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({ ...userenterdDate: event.target.value });
  };
  const submit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min=".01"
            step=".01"
            value={enteredAmount}
            onChange={amountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2025-01-01"
            value={enteredDate}
            onChange={dateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;

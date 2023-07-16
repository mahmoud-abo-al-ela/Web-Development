import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseData = (enterdExpenseData) => {
    const expenseData = {
      ...enterdExpenseData,
      id: Math.random.toString(),
    };
    props.onAddExpense(expenseData);
  };
  const editingHandler = () => {
    setIsEditing(true);
  };
  const onCancelHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancel={onCancelHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;

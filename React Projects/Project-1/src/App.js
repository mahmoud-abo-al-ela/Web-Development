import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const dummyExpenses = [
    { id: "1e", date: new Date(2023, 3, 10), title: "React", amount: 20 },
    { id: "2e", date: new Date(2022, 4, 11), title: "JavaScript", amount: 25 },
    { id: "3e", date: new Date(2021, 2, 12), title: "HTML5", amount: 10 },
    { id: "4e", date: new Date(2021, 7, 13), title: "CSS3", amount: 10 },
  ];
  const [expenses, setExpense] = useState(dummyExpenses);
  const addExpenseHandler = (expense) => {
    setExpense((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

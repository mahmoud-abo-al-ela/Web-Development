import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    { date: new Date(2023, 3, 10), name: "React", price: 20 },
    { date: new Date(2023, 3, 11), name: "JavaScript", price: 25 },
    { date: new Date(2023, 3, 12), name: "HTML5", price: 10 },
    { date: new Date(2023, 3, 13), name: "CSS3", price: 10 },
  ];
  const addExpenseHandler = (expense) => {
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

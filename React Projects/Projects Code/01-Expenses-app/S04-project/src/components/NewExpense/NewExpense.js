import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const saveExpenseData = (enterdExpenseData) => {
    const expenseData = {
      ...enterdExpenseData,
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
};
export default NewExpense;

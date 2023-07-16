import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./Expenseitem";
function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={props.items[0].date}
        name={props.items[0].name}
        price={props.items[0].price}
      ></ExpenseItem>
      <ExpenseItem
        date={props.items[1].date}
        name={props.items[1].name}
        price={props.items[1].price}
      ></ExpenseItem>
      <ExpenseItem
        date={props.items[2].date}
        name={props.items[2].name}
        price={props.items[2].price}
      ></ExpenseItem>
      <ExpenseItem
        date={props.items[3].date}
        name={props.items[3].name}
        price={props.items[3].price}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;

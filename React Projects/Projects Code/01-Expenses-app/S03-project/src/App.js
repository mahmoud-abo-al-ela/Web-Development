import Expenses from "./components/Expenses/Expenses";
function App() {
  const expenses = [
    { date: new Date(2023, 3, 10), name: "React", price: 20 },
    { date: new Date(2023, 3, 11), name: "JavaScript", price: 25 },
    { date: new Date(2023, 3, 12), name: "HTML5", price: 10 },
    { date: new Date(2023, 3, 13), name: "CSS3", price: 10 },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

import "../css/Expenses.css";
 import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [pickedYear, setPickedYear] = useState("2020");

  const pickYearHandler = (pickedYearData) => {
    setPickedYear(pickedYearData);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === pickedYear
  );

  

  return (
    <Card className="expenses">
      <ExpensesFilter selected={pickedYear} onPickYear={pickYearHandler} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
 
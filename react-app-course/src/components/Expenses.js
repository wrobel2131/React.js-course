import "../css/Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from 'react';

const Expenses = (props) => {
  const [pickedYear, setPickedYear] = useState("2020");


    const pickYearHandler = (pickedYearData) => {
      setPickedYear(pickedYearData);
    }
    

  return (
    <Card className="expenses">
      <ExpensesFilter selected={pickedYear} onPickYear={pickYearHandler} />
      <ExpenseItem
        title={props.items[0].title}
        date={props.items[0].date}
        amount={props.items[0].amount}
      />
      <ExpenseItem
        title={props.items[1].title}
        date={props.items[1].date}
        amount={props.items[1].amount}
      />
      <ExpenseItem
        title={props.items[2].title}
        date={props.items[2].date}
        amount={props.items[2].amount}
      />
    </Card>
  );
};

export default Expenses;

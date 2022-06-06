import ExpenseItem from "./ExpenseItem";
import "../css/ExpensesList.css";
const ExpensesList = (props) => {
  return props.items.lenght === 0 ? (
    <h2 className="expenses-list__fallback">Found no expenses</h2>
  ) : (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );

};

export default ExpensesList;

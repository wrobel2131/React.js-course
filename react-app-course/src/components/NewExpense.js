import "../css/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredData) => {

        const expenseData = {
            ...enteredData,
            id: Math.random().toString()

        }

        // console.log(expendeData);
        props.onAddExpense(expenseData);
    }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

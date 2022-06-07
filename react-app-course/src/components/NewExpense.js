import "../css/NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import {useState} from 'react';

const NewExpense = (props) => {
    const [isAddButtonClicked, setIsAddButtonClicked] = useState(false);

    const saveExpenseDataHandler = (enteredData) => {

        const expenseData = {
            ...enteredData,
            id: Math.random().toString()

        }


        // console.log(expendeData);
        props.onAddExpense(expenseData);
        setIsAddButtonClicked(false);

    }

    const closeFormHandler = () => {
      setIsAddButtonClicked(false);

    }

    const onAddNewExpenseClick = () => {
      setIsAddButtonClicked(true);
    }

  return (
    <div className="new-expense">
      {!isAddButtonClicked &&<button onClick={onAddNewExpenseClick}>Add new expence</button>}
      {isAddButtonClicked && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCloseForm={closeFormHandler} />}
      
    </div>
  );
};

export default NewExpense;

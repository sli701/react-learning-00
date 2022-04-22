import react, { useState } from "react";
import "./ExpenseForm.css"
import { useState } from "react/cjs/react.production.min";

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnterDate] = useState("");


    const titleChangeHandler = (event) =>{
        console.log("Title Changed");
        console.log(event.target.value);
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnterDate(event.target.value);
    }

    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label > Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label > Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label > Date</label>
                    <input type="date" min="2019-01-01" step0="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
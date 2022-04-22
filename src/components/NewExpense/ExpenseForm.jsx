import react, { useState } from "react";
import "./ExpenseForm.css"
// import { useState } from "react/cjs/react.production.min";

const ExpenseForm = () => {
    //Option 1: working with multiple state
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


    // Option 2: because React schedule update. it does not perform the setUserInput funtion instantly there for we might consider option 3
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     entetedAmount: '',
    //     enteredDate: ''
    // })

    // const titleChangeHandler = (event) =>{

    //     setUserInput({
    //         ...userInput,                       // copy all the key value pair from the previous userInput object
    //         enteredTitle: event.target.value    // just overwrite the enteredTitle property
            
    //     })
    // }

    // const amountChangeHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         enteredAmount: event.target.value
    //     })
    // }

    // const dateChangeHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         enteredDate: event.target.value
    //     })
    // }

    //Option 3:
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     entetedAmount: '',
    //     enteredDate: ''
    // })

    /*
     by passing an anonymous function to the SET function.
     React guaraneet that the 'prevState' contains the latest state of the value.
     whenever the state update depends on the previous update, then we need to pass an anonymous funtion.
    */
    // const titleChangeHandler = (event) =>{

    //     setUserInput((prevState)=>{
    //         return({
    //             ...prevState,
    //             enteredTitle: event.target.value
    //         })
    //     })
    // }

    // const amountChangeHandler = (event) => {
    //     setUserInput((prevState)=>{
    //         return({
    //             ...prevState,
    //             entetedAmount: event.target.value
    //         })
    //     })
    // }

    // const dateChangeHandler = (event) => {
    //     setUserInput((prevState)=>{
    //         return({
    //             ...prevState,
    //             enteredDate: event.target.value
    //         })
    //     })
    // }


    const submitHandler = (event) => {
        // not reloading the page, not sending new request to the server
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        console.log(expenseData)
    }

    return(
        <form onSubmit={submitHandler}>
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
import React from "react";
import { useState } from "react/cjs/react.production.min";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => { //C

    // 0
    const onSaveExpenseDataHandler = (enteredExpenseData) => {

        //3
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
        };

       // console.log(expenseData);
       props.onAddExpense(expenseData);
    }


    return(
        <div className="new-expense">
            {/* 1 */}
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
        </div>

    )
}

export default NewExpense
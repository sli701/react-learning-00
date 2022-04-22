import React from "react";
import { useState } from "react/cjs/react.production.min";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";


const NewExpense = () => {


    return(
        <div className="new-expense">
            <ExpenseForm />
        </div>

    )
}

export default NewExpense
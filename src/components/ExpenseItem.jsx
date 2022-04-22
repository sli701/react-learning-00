import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from './Card';

import React,{ useState } from 'react';

const ClickMeHandlder = () => {
    console.log('!!clicked me!!');
}

const ExpenseItem = (props) => {

    

    // hooks, and it must be called inside React Component function
    /**
     * hook, cannot be called outside of component function or nested funtion, must be directly inside the component funtion 
     * useState, creates a special variable, where changes to the variable will trigger the component function to be run again
     * useState, this hook always return an array with two elements [valueName, functionName]
     * useState, 1) have data needed to change, 2) need to reflect on the screen, then we need to useState
     */
    const [title, setTitle] = useState(props.title)

    //let title = props.title

    const ClickHandler2 = () => {
        // 1. the component function in which you initialized useState will trigger the component funtion to run again
        // 2. by calling this function: 
            // * want to assign a new value to the variable, 
            // * trigger the component funtion to be executed again
        // 3. the title value will not change right away, it will schedule it
        // 4. state, is on a per component instance basis
        setTitle("new values to the variable: title") // let title = "new values to the variable: title"
        console.log(title);
    }


    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>

            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={ClickHandler2}> change title </button>
        </Card>)


}

export default ExpenseItem;
// import ExpenseItem from "./components/ExpenseItem";
import Expense from "./components/Expense";
import React, {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense"

const DUMMY_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  const[expenses, setExpenses] = useState(DUMMY_expenses);

  //A
  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
    setExpenses(
      previousExpenses => {
        console.log(previousExpenses);
        console.log([expense, ...previousExpenses]);
        return [expense, ...previousExpenses];
      }
    ); // pulling everything out from the previous expense, updating a state where it is based on an older state
    
  }

  //  this is the alternative to the JSX code below, and also the reason why we need "import React from "react";"
  /** this is under-the-hood, behind-the-scenes stuff */
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get Started - 2022-Apr-17"),
  //   React.createElement(Expense, { items: expenses })
  // )


  return (
    <div>
      {/* B */}
      {/* 60: lifting the state up */}
      <NewExpense onAddExpense={addExpenseHandler} />

      
      <Expense items={expenses} />

    </div>

  );
}

export default App;

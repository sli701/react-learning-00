import ExpenseItem from "./ExpenseItem";
import './Expense.css'
import Card from "./Card";

import ExpensesFilter from "./ExpensesFilter";

import {useState} from "react";

const Expense = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const ExpensesChangeHandle = (enteredYear) => {
    console.log(enteredYear);
    setFilteredYear(enteredYear);
  }

  // Passing data from parent to children using props
    return (
     
       
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onExpensesFilterChange={ExpensesChangeHandle}/>
          { // Rendering list of items
          props.items.map(
            (expense,index)=>{
              return <ExpenseItem 
              key= {expense.id}
              title={expense.title}  
              amount={expense.amount} 
              date={expense.date} />

              
           })
          }
          {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
          <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} ></ExpenseItem>
          <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
          <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem> */}
        </Card>
     

      );

}

export default Expense;
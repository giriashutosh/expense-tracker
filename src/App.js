import React,{useState} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const dummy_expenses = [
  {
    id:'e1',
    title: 'Car Insurance', 
    amount:294.67, 
    date: new Date(2022,7,17)
  },
  {
    id:'e2',
    title: 'Toilet Paper', 
    amount:94.12, 
    date: new Date(2022,4,14)
  },
  {
    id:'e3',
    title: 'New TV', 
    amount:799.49, 
    date: new Date(2022,6,12)
  },
  {
    id:'e4',
    title: 'Linter', 
    amount:500.34, 
    date: new Date(2022,7,12)
  },
]
function App() {
  const [expenses,setExpenses] = useState(dummy_expenses)
  const addExpenseHandler = expense => {
    // console.log('App.js');
    console.log(expense)
    //expense.push(expense);
    setExpenses([expense, ...expenses]) 
    //console.log(expenses)
      // Not a standard way
    // setExpenses((prevExpenses) => {
    //   console.log(prevExpenses)
    //   return [expense, ...prevExpenses]
    // })
  }
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
    
  );
}

export default App;

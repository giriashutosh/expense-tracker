import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const expense = [
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
  const addExpense = expense => {
    console.log('App.js');
    console.log(expense)
  }
  return (
    <div>
      <NewExpense onAddExpense = {addExpense}/>
      <Expenses items={expense}/>
    </div>
    
  );
}

export default App;

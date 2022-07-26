import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const selectFilterDataHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
    // setExpenseFilterData(filterdata);
    // console.log(expenseFilterData);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onSelectFilterData={selectFilterDataHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;

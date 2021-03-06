import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEneredTitle] = useState("");
  const [enteredAmount, setEneredAmount] = useState("");
  const [enteredDate, setEneredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEneredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEneredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEneredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };
    props.ONSaveExpenseData(expenseData);
    setEneredTitle("");
    setEneredAmount("");
    setEneredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

import REACT from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import NewExpense from "../NewExpense/NewExpense";

const addExpenseHandler = (expense) => {
  console.log(expense);
};

function Expenses() {
  const expense = [
    {
      id: "e1",
      title: "Books",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 694.27,
      date: new Date(2021, 8, 16),
    },
    {
      id: "e3",
      title: "Groceries",
      amount: 66.45,
      date: new Date(2021, 6, 7),
    },
    {
      id: "e4",
      title: "Flowers",
      amount: 166.54,
      date: new Date(2021, 4, 12),
    },
  ];

  return (
    <Card className="expenses">
      <NewExpense ONAddExpense={addExpenseHandler}></NewExpense>;
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      ></ExpenseItem>
    </Card>
  );
}
export default Expenses;

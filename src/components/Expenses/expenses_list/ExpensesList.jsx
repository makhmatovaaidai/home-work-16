import React, { Component } from "react";
import { TodoContext } from "../../../store/todo-context";
import ExpensesItem from "../expenses_item/ExpensesItem";
import classes from "./ExpensesList.module.css";

export default class ExpensesList extends Component {
  static contextType = TodoContext;
  render() {
    const item = this.context.currentExpenses()
    return (
      <>
        {item.length === 0 ? (
          <h1 className={classes.NoExpense}>No Expenses Found</h1>
        ) : (
          <>
            {item.map((item) => {
                console.log(item.title);
              return (
                <ExpensesItem
                  expenseTitle={item.title}
                  expensePrice={item.amount}
                  expenseDate={item.date}
                  id={item.id}
                  // changeHandler={changeHandler}
                  key={item.id}
                />
              );
            })}
          </>
        )}
      </>
    );
  }
}

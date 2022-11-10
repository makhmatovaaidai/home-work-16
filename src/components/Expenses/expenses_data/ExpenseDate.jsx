import React, { Component } from 'react';
import classes from './ExpenseDate.module.css';

class ExpenseDate extends Component {
  render() {
    const month = this.props.date.toLocaleString('en-US', { month: 'long' });
    const day = this.props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = this.props.date?.getFullYear();
    return (
      <div className={classes.expense_date}>
        <div className={classes.expense_date__month}>{month}</div>
        <div className={classes.expense_date__year}>{year}</div>
        <div className={classes.expense_date__day}>{day}</div>
      </div>
    );
  }
}

export default ExpenseDate;

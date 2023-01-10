import React from 'react';
import './cssFiles/style.css';
import ExpenseDate from './expenseDate';

function ExpenseItem(props) {
  return (
    <>
      <h1>Lets get started</h1>
      <div className="items">
        <div className="sub-items">
          <ExpenseDate date={props.date} />
          <div className="carInsurance">{props.title}</div>
        </div>
        <button className="btn"> {props.amount}</button>
      </div>
    </>
  );
}

export default ExpenseItem;

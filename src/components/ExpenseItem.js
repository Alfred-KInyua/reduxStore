import React from 'react';
import './cssFiles/style.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  return (
    <>
      <div className="items">
        <div className="sub-items">
          <ExpenseDate date={props.date} />
          <div className="carInsurance">{props.title}</div>
        </div>
        <div className="btn"> {props.amount}</div>
      </div>
    </>
  );
}

export default ExpenseItem;

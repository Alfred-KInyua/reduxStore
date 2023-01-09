import React from 'react';
import './style.css';

function ExpenseItem(props) {
  return (
    <>
      <h1>Lets get started</h1>
      <div className="items">
        <div className="sub-items">
          <div>{props.date.toISOString()}</div>
          <div className="carInsurance">{props.title}</div>
        </div>
        <button className="btn"> {props.amount}</button>
      </div>
    </>
  );
}

export default ExpenseItem;

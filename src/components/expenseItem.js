import React, { useState } from 'react';
import './cssFiles/style.css';
import ExpenseDate from './expenseDate';

function ExpenseItem(props) {
  const [amount, setAmount] = useState(props.amount);

  const ClickHandler = () => {
    setAmount('$500');
  };

  return (
    <>
      <div className="items">
        <div className="sub-items">
          <ExpenseDate date={props.date} />
          <div className="carInsurance">{props.title}</div>
        </div>
        <div className="btn"> {amount}</div>
        <button className="btn" onClick={ClickHandler}>
          {' '}
          Change amount
        </button>
      </div>
    </>
  );
}

export default ExpenseItem;

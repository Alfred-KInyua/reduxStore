import React from 'react';
import './cssFiles/expenseDate.css';

function ExpenseDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();
  return (
    <div className="dateItems">
      <div className="month">{month}</div>
      <div className="day">{day}</div>
      <div className="year">{year}</div>
    </div>
  );
}

export default ExpenseDate;

import React from 'react';
import './NewExpense.css';
function NewExpense() {
  return (
    <form>
      <div>
        <label for="Title">Title :</label>
        <input type="text" placeholder="Your Title.." />
        <label for="Amount">Amount :</label>
        <input
          type="number"
          placeholder="Your Amount.."
          min="0.01"
          step="0.01"
        />
        <label for="date">Date :</label>
        <input
          type="date"
          placeholder="Select your date.."
          min="2019/1/30"
          max="2023/12/31"
        />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default NewExpense;

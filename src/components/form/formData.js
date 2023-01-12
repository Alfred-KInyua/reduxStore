import React from 'react';
import { useState } from 'react';

const FormData = () => {
  const [addTitle, setAddTitle] = useState('');
  const [addDate, setAddDate] = useState('');
  const [addNumber, setAddNumber] = useState('');

  const TitleHandler = (event) => {
    setAddTitle(event.target.value);
  };
  const DateHandler = (event) => {
    setAddDate(event.target.value);
  };
  const NumberHandler = (event) => {
    setAddNumber(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    const myObjects = {
      title: addTitle,
      date: new Date(addDate),
      number: addNumber,
    };
    console.log(myObjects);
  };

  return (
    <form onSubmit={SubmitHandler}>
      {' '}
      <div>
        <input type="text" onChange={TitleHandler} placeholder="Your Title.." />
        <input
          type="number"
          onChange={NumberHandler}
          placeholder="Your Amount.."
          min="0.01"
          step="0.01"
        />
        <input
          type="date"
          onChange={DateHandler}
          placeholder="Select your date.."
          min="2019/1/30"
          max="2023/12/31"
        />
      </div>
      <div>
        <input type="submit" value="Add Expense" />
      </div>
    </form>
  );
};

export default FormData;

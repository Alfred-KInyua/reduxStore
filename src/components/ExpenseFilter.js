import React from 'react';

function ExpenseFilter(props) {
  const DropdownHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <>
      <label>Choose a year:</label>
      <select value={props.selected} onChange={DropdownHandler}>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </>
  );
}

export default ExpenseFilter;

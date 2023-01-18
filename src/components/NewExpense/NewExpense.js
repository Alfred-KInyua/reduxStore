import React from 'react';
import '../cssFiles/NewExpense.css';
import DropDown from '../ExpenseFilter';
import ExpenseForm from './ExpenseForm';
function NewExpense(props) {
  const SaveFormData = (entredFormData) => {
    const FormData = {
      ...entredFormData,
      id: Math.floor(Math.random() * 80) + 1,
    };
    props.onNewExpense(FormData);
  };
  const SaveOptions = (data) => {
    props.onNewExpense(data);
  };
  return (
    <>
      <ExpenseForm onSaveFormData={SaveFormData} />
      <DropDown onSaveOptions={SaveOptions} />
    </>
  );
}

export default NewExpense;

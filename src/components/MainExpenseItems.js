import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './cssFiles/MainExpenseItems.css';
import Card from './Card';
import ExpenseFilter from './ExpenseFilter';

function MainExpenseItems(props) {
  const [filteredYear, setfilteredYear] = useState('2000');
  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="outer">
        <div className="mainStyle">
          <ExpenseFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          {props.items.map((elements) => (
            <ExpenseItem
              key={elements.id}
              title={elements.title}
              amount={elements.amount}
              date={elements.date}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}

export default MainExpenseItems;

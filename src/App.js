import Counter from './feature/counter/Counter';
import ExpenseItem from './components/expenseItem';
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 45,
      date: new Date(2 / 6 / 2022),
    },
    {
      id: 'e2',
      title: 'Handkerchief',
      amount: 54,
      date: new Date(4 / 8 / 2022),
    },
    {
      id: 'e3',
      title: 'Vegetables',
      amount: 320,
      date: new Date(7 / 2 / 2022),
    },
    {
      id: 'e4',
      title: 'Indiana Jones',
      amount: 87,
      date: new Date(10 / 12 / 2022),
    },
  ];

  return (
    <>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </>
  );
}

export default App;

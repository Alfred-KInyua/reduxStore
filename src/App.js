import Counter from './feature/counter/Counter';
import MainDataItems from './components/mainDataItems';
import NewExpense from './components/form/NewExpense';
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
      <NewExpense />

      <MainDataItems items={expenses} />
    </>
  );
}

export default App;

import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense'
const  App = ()=> {
  const expenses = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 38.43,
      date: new Date(2020, 6, 23),
      location:'Shahjahanpur'
    },
    {
      id: "e2",
      title: "New car",
      amount: 33.43,
      date: new Date(2020, 5, 22),
      location : 'Delhi'
    },
    {
      id: "e3",
      title: "Basket",
      amount: 48.43,
      date: new Date(2020, 2, 3),
      location : 'Kolkata'
    },
    {
      id: "e4",
      title: "Bike",
      amount: 35.35,
      date: new Date(2020, 4, 3),
      location : 'B engaluru'
    },
   
  ];

  return (
    <div>
      <NewExpense/>
    <Expenses items = {expenses} />
      </div>
  )
}
export default App;

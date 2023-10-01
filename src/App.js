import ExpenseItem from "./components/ExpenseItem";

function App() {
<<<<<<< HEAD
  const expenses = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 38.43,
      date: new Date(2020, 8, 23),
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
      date: new Date(2020, 2, 3),
      location : 'bengaluru'
    },
   
  ];
=======
  return (
    <div> 
      
      <h2>Let's get started!</h2>
      <ExpenseItem/>    
    </div>
  );
}
>>>>>>> a1c162c02f021f6146abafe9c5fcd35f8c243919

  return (
    
    <div>
      {expenses.map((expense)=>{
  return (<ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        location = {expense.location}
      />)

      })}
      </div>
      
  )}
export default App;

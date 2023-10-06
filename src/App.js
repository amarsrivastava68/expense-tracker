import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const App = () => {
  const e = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 38.43,
      date: new Date(2020, 6, 23),
      location: "Shahjahanpur",
    },
    {
      id: "e2",
      title: "New car",
      amount: 33.43,
      date: new Date(2021, 5, 22),
      location: "Delhi",
    },
    {
      id: "e3",
      title: "Basket",
      amount: 48.43,
      date: new Date(2020, 2, 3),
      location: "Kolkata",
    },
    {
      id: "e4",
      title: "Bike",
      amount: 35.35,
      date: new Date(2022, 4, 3),
      location: "Bengaluru",
    },
  ];

  const [expenses, setExpenses] = useState(e);

  const addHandler = (comingdata) => {
    const expensedata = {
      ...comingdata,
    };
    console.log("data is coming .. ");
    console.log(expensedata);
    setExpenses((prev) => [
      {
        id: expensedata.id,
        title: expensedata.enteredTitle,
        date: expensedata.enteredDate,
        amount : expensedata.enteredAmount ,
        location: expensedata.enteredLocation,
      },
      ...prev,
    ]);
  };

  return (
    <div>
      <NewExpense onAdd={addHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

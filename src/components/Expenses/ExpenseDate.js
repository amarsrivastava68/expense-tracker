import './ExpenseDate.css'
const ExpenseDate = (props) => {
    const date = props.date;
  
    if (!date) {
      return null;
    }
  
    const month = date.toLocaleString("en-US", { month: "long" });
    console.log(month)
    const year = date.getFullYear();
    console.log(year)
    const day = date.toLocaleString("en-US", { day: "2-digit" });
    console.log(day)
  
    return (
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__year">{year}</div>
      </div>
    );
  };
export default  ExpenseDate

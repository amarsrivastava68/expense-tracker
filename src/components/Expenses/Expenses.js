import ExpenseItem from './ExpenseItem'
import  './Expenses.css'
import Card from '../UI/Card'
const Expenses=(props)=>
{

  
  return (<Card className='expenses' >
      

      {props.items.map((expense)=>{
  return (<ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        location = {expense.location}
      />)

      })}
      </Card>
  )

}
export default Expenses
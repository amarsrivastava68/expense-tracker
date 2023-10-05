import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'


const NewExpense = (props) =>
{ 
    const datahandler = (comingdata )=>{
        const expensedata ={
            ...comingdata ,
            id: Math.random().toString()

        }
        props.onAdd(expensedata)
    }
    return <div className='new-expense'>
        <ExpenseForm onSave ={datahandler}/>
    </div>
}
export default NewExpense

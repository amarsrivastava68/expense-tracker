import React from "react";
import './ExpenseFilter.css'


const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
      <label style={{ color: 'white' }}>Filter by year   </label>
        <select value = {props.selected} onChange={dropdownChangeHandler}>
        <option>2022</option>
        <option>2021</option>
        <option>2020</option>
        <option>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter

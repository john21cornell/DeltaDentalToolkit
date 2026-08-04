import React from 'react';
import './ExpenseList.css';

function ExpenseList() {
  const expenses = ['Dental Kit', 'Gloves', 'Masks'];

  return (
    <div className="list">
      <h2>Expense List</h2>
      <ul>
        {expenses.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;

import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

// export default function ExpenseList() {
const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);
    useEffect(() => {
      setFilteredExpenses(expenses);
    }, [expenses]);
    const handleChange = (event) => {
        const searchResults = expenses.filter((filteredExpense) => 
            filteredExpense.name.toLowerCase().includes(event.target.value)
        );
        setFilteredExpenses(searchResults);
    };
    
    return (
        <>
            <input
                type='text'
                className='form-control mb-2 mr-sm-2'
                placeholder='Type to search...'
                onChange={handleChange}
            />
            <ul className='list-group mt-3 mb-3'>
                {
                    filteredExpenses.map((expense) => (
                        <ExpenseItem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost} />
                    ))
                }
            </ul>
        </>
        // <ul className='list-group'>
        //     {
        //         expenses.map((expense) => (
        //             <ExpenseItem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost} />
        //         ))
        //     }
        // </ul>
    );
}

export default ExpenseList;
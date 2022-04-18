import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

export default function ExpenseList() {
    const { expenses } = useContext(AppContext);
// const ExpenseList = () => {
    // const expenses2 = [
    //     { id: 1232341, name: 'Shopping', cost: 50 },
    //     { id: 1232342, name: 'Holiday', cost: 300 },
    //     { id: 1232343, name: 'Transportation', cost: 70 },
    //     { id: 1232344, name: 'Fuel', cost: 40 },
    //     { id: 1232345, name: 'Child Care', cost: 500 }
    // ];
    return (
        <ul className='list-group'>
            {
                expenses.map((expense) => (
                // expenses.map(expense => (
                    <ExpenseItem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost} />
                ))
            }
        </ul>
    );
}

// export default ExpenseList;
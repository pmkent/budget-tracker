import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Balance() {
    const { budget, expenses } = useContext(AppContext);
    // const { expenses, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ?
        'alert-danger' :
        'alert-success';
    // console.log('budget: '+budget+' total-expenses: '+totalExpenses);
    return (
        // <div className='alert alert-success'>
        <div className={`alert ${alertType}`}>
            <span>Remaining: ${budget - totalExpenses}</span>
        </div>
    )
}

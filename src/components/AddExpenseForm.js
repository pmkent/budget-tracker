// import React from 'react'

import { useContext, useState } from "react";
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
// export default class AddExpenseForm extends Component {
    const {dispatch} = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const onSubmit = (event) => {
        event.preventDefault();
        // alert('name: '+name+' cost: '+cost);
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost)
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    }
    // render() {
        return (
            <form onSubmit={onSubmit}>
                <div className='row'>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input
                            required='required'
                            type='text'
                            className='form-control'
                            id='name'
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='cost'>Cost:</label>
                        <input
                            required='required'
                            type='text'
                            className='form-control'
                            id='cost'
                            value={cost}
                            onChange={(event) => setCost(event.target.value)}
                        />
                    </div>
                </div>
                <div className='row'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        )
    // }
}

export default AddExpenseForm;

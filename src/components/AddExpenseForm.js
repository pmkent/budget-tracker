import { useContext, useState } from "react";
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

import { Container } from "react-bootstrap";

const AddExpenseForm = () => {
    const {dispatch} = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const onSubmit = (event) => {
        event.preventDefault();
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost)
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });

        setName('');
        setCost('');
    }
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
            {/* <div className='form-control row'>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </div> */}

            <Container className="mt-3 text-center">
                <button type='submit' className='btn btn-primary'>Add Expense</button>
            </Container>

            
        </form>
    )
}

export default AddExpenseForm;

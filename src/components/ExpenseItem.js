import React, { useContext } from 'react'
import { Badge } from 'react-bootstrap';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

// const ExpenseItem = (props) => {
export default function ExpenseItem(props) {
    const {dispatch} = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        });
    };
    return (
        // <li className='list-group-item d-flex justify-content-between align-items-center'>
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {props.name}
            <div>
                <Badge pill variant='primary'>${props.cost}</Badge>
                {/* <span className='badge badge-primary badge-pill mr-3'>£{props.cost}</span>
                <span className='badge badge-primary badge-pill mr-3'>
                    ${props.cost}
                </span> */}
                <TiDelete onClick={handleDeleteExpense} size='1.5em' />
            </div>
        </li>
    );
}

// export default ExpenseItem;

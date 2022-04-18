import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Expenses = () => {
    const { expenses } = useContext(AppContext);
    const total = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

// export class Expenses extends Component {
    // const {expenses} = useContext(AppContext);
    // render() {
        // const {expenses} = useContext(AppContext);
        return (
            <div className='alert alert-primary'>
                {/* <span>Expenses: ${total}</span> */}
                <span>Spent so far: ${total}</span>
            </div>
        );
    // }
}


export default Expenses;
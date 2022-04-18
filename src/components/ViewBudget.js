import React from 'react';

// export default class ViewBudget extends Component {
const ViewBudget = (props) => {
    return (
        <>
            <span>Budget: ${props.budget}</span>
            <button
                type='button'
                className='btn btn-primary'
                onClick={props.handleEditClick}>
                Edit
            </button>
        </>
    );
//   render() {
    // return (
    //   <div>ViewBudget</div>
    // )
//   }
}

export default ViewBudget;

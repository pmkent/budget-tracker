import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Budget() {
    const { budget, dispatch } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: ${budget}</span>
            {/* <span>Budget: $2,000</span> */}
        </div>
    )
}

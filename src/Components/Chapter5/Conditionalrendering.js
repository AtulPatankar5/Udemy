import React, { useState } from 'react'
import { Products } from './Products';

export default function Conditionalrendering() {
    const [admin, setAdmin] = useState(false);
    const inputChangeHandler = (e) => {
        setAdmin(e.target.checked);
    }
    return (
        <div className='App'>
            <input type='checkbox' onChange={inputChangeHandler} /> is Admin
            <hr/>
            {/* {admin.toString()} */}
            <Products admin={admin}/>
        </div>
    )
}

import React from 'react'
import {Link} from 'react-router-dom'

function navbar(){
    return(
        <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/best'>Best Exercise</Link></li>
            <li><Link to='/exercise'>Exercise</Link></li>
        </ul>
    );
}
export default navbar;
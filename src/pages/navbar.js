import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css';


function navbar(){
    return(
        <div className ="navbar">
            <div><Link to='/home'>Home</Link></div>
            <div><Link to='/workouts'>Dumbell Workouts</Link></div>
            <div className = "dropdown">
                <button className="dropbtn">Exercise 
                </button>
                <div className="dropdown-content">
                    <div><Link to ='/abs'>Abdominals</Link></div>
                    <div><Link to ='/Back'>Back</Link></div>
                    <div><Link to ='/biceps'>Biceps</Link></div>
                    <div><Link to ='/chest'>Chest</Link></div>
                    <div><Link to ='/forearms'>Forearms</Link></div>
                    <div><Link to ='/legs'>Legs</Link></div>
                    <div><Link to ='/shoulders'>Shoulders</Link></div>
                    <div><Link to ='/triceps'>Triceps</Link></div>
                </div>
            </div>
            <div><Link to='/best'>Best Exercise</Link></div>
        </div>
    );
}
export default navbar;
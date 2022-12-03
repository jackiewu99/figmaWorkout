import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css';


function navbar(){
    return(
        <div class ="navbar">
            <div><Link to='/home'>Home</Link></div>
            <div><Link to='/workouts'>Dumbell Workouts</Link></div>
            <div class = "dropdown">
                <button class="dropbtn">Exercise 
                </button>
                <div class="dropdown-content">
                    <div>Abdominals</div>
                    <div>Back</div>
                    <div>Biceps</div>
                    <div><Link to ='/exercise'>Chest</Link></div>
                    <div>Forearms</div>
                    <div>Legs</div>
                    <div>Shoulders</div>
                    <div>Triceps</div>
                </div>
            </div>
            <div><Link to='/best'>Best Exercise</Link></div>
        </div>
    );
}
export default navbar;
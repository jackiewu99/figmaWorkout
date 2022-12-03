import React from "react";
import { 
  FeaturesText2x2Collection,
  AbsTwo,
  BackTwo,
  ButtocksTwo,
  ChestTwo,
  LegsTwo,
  ShouldlersTwo
  } from '../ui-components';
function workouts(){
    return (
        <div>
          <h1>Dumbbell workout for chest</h1>
          <h3>
            This workout routine is helpful if you are looking to enlarge your chest area. <br />
              It targets the upper, lower, inner and outer pectoral muscles.
          </h3>
          <h3>
          The Lying Fly dumbbell exercise will target your inner and outer pectorals.<br />
          The Incline Bench Press will target your upper pectorals while the Decline Bench Press will target your lower pectoral muscles.
          </h3>
          <ChestTwo/>
          <h1>Workout Routine for Shoulders</h1>
          <ShouldlersTwo/>
          <h1>Workout Routine for Arms</h1>
          <FeaturesText2x2Collection/>
          <h1>Workout Routine for Abdominals</h1>
          <AbsTwo/>
          <h1>Workout Routine for the Back</h1>
          <BackTwo/>
          <h1>Workout Routine for Legs</h1>
          <LegsTwo/>
          <h1>Workout Routine for Buttocks</h1>
          <ButtocksTwo/>


        </div>
    )
}  

  export default workouts;
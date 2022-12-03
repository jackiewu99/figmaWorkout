import React from "react";
import {
  FeaturesText2x2Collection,
  AbsTwo,
  BackTwo,
  ButtocksTwo,
  ChestTwo,
  LegsTwo,
  ShouldlersTwo,
} from "../ui-components";
function workouts() {
  return (
    <div>
      <h1>Dumbbell Workout Routines</h1>
      <h2>
        The following dumbbell workout routines can be performed using dumbbell
        exercises and will allow you to target muscles in a specific region of
        your body. They are presented here to highlight how effective working
        out with dumbbell exercises can be.
      </h2>

      <h1>Dumbbell workout for chest</h1>
      <h3>
        This workout routine is helpful if you are looking to enlarge your chest
        area. <br />
        It targets the upper, lower, inner and outer pectoral muscles.
      </h3>
      <h3>
        The Lying Fly dumbbell exercise will target your inner and outer
        pectorals.
        <br />
        The Incline Bench Press will target your upper pectorals while the
        Decline Bench Press will target your lower pectoral muscles.
      </h3>
      <ChestTwo />

      <h1>Workout Routine for Shoulders</h1>
      <h3>
        Use this workout routine if you are looking to broaden your shoulders.
        It targets the front, outer and rear deltoid muscles. <br />
      </h3>
      <h3>
        The Rear Deltoid Raise dumbbell exercise will target your rear deltoid
        muscles while
        <br />
        the Front Raise will target your front deltoid muscles.
      </h3>
      <ShouldlersTwo />

      <h1>Workout Routine for Arms</h1>
      <h3>
        Using this workout routine will help you strengthen the muscles in your
        arms. The routine targets the biceps, triceps and forearm muscles.
        <br />
      </h3>
      <h3>
        The Alternated Biceps Curl dumbbell exercise will target your biceps
        while the Triceps Kickback is good at isolating your triceps.
        <br />
        Palms-Up Wrist Curl will exercise your inner forearms and Palms-Down
        Wrist Curls your outer forearm muscles.
      </h3>
      <FeaturesText2x2Collection />

      <h1>Workout Routine for Abdominals</h1>
      <h3>
        Using this workout routine will help you strengthen the muscles in your
        arms. The routine targets the biceps, triceps and forearm muscles.
        <br />
      </h3>
      <h3>
        The Weighted Crunch and Weighted Leg Raise dumbbell exercises will
        target your upper and lower abdominals while
        <br />
        the Dumbbell Side Bend will strenghten your obliques.
      </h3>
      <AbsTwo />

      <h1>Workout Routine for the Back</h1>
      <h3>
        Use this workout routine to strengthen your back muscles.
        <br />
      </h3>
      <h3>It targets your lower and upper back as well as your lats.</h3>
      <BackTwo />

      <h1>Workout Routine for Legs</h1>

      <h3>
        This routine will be helpful if you want to exercise your leg muscles.
        It will target your upper, lower and inner thigh muscles as well as your
        calves.
        <br />
      </h3>
      <h3>
        The Side Lunge dumbbell exercise will target your inner thighs while the
        Toe Raise targets your calf muscles
      </h3>

      <LegsTwo />
      <h1>Workout Routine for Buttocks</h1>

      <h3>
        Use this workout routine to strengthen your buttocks.
        <br />
      </h3>
      <h3>It mainly targets your glutes.</h3>
      <ButtocksTwo />
    </div>
  );
}

export default workouts;

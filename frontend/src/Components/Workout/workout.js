import React from 'react'
import { 
    WorkoutSquare,
    WorkoutInfo,
    DailyWorkout,
    WorkoutNumber,
    Minutes,
    WorkoutImage } from "./workoutStyled"

const waterGraphImage = require("../../Assets/workout_graph.svg").default;

const Workout = () => {
    
    // API call for users daily water intake
    const dailyWorkout = 60; // Example

    return (
        <WorkoutSquare>
          <WorkoutInfo>
            <DailyWorkout>Workout</DailyWorkout>
            <WorkoutNumber>
              {dailyWorkout} <Minutes>Min</Minutes>
            </WorkoutNumber>
          </WorkoutInfo>
          <WorkoutImage src={waterGraphImage} alt="Workout Image" />
        </WorkoutSquare>
      );
}

export default Workout;
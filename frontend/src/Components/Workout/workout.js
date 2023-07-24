import React, { useEffect, useState } from 'react';
import { FaDumbbell } from 'react-icons/fa';
import { WorkoutSquare, WorkoutInfo, DailyWorkout, WorkoutNumber, Minutes, WorkoutImage, AverageContainer, AverageLabel, AverageValue, DateLabel, ExpandableText } from "./workoutStyled";

const workOutGraph = require("../../Assets/workout_graph.svg").default;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

const Workout = () => {
  const [expanded, setExpanded] = useState(false);
  const [workoutCount, setWorkoutCount] = useState(0);
  // API call for users daily workout count
  const dailyWorkout = 50; // Example

  const handleWorkoutClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    let startValue = 0;
    const animationDuration = 600;
    const step = (dailyWorkout / animationDuration) * 10;

    const timer = setInterval(() => {
      startValue += step;
      if (startValue >= dailyWorkout) {
        clearInterval(timer);
      }
      setWorkoutCount(parseFloat(startValue.toFixed(1)));
    }, 10);

    return () => clearInterval(timer);
  }, [dailyWorkout]);

  const previousDaysData = [
    { date: '2023-07-21', workoutCount: 30 },
    { date: '2023-07-20', workoutCount: 50 },
    { date: '2023-07-19', workoutCount: 80 },
    { date: '2023-07-18', workoutCount: 70 },
    { date: '2023-07-17', workoutCount: 90 },
  ];

  const averageWorkout = previousDaysData.slice(1).reduce((sum, dayData) => sum + dayData.workoutCount, 0) / 6;

  return (
    <WorkoutSquare onClick={handleWorkoutClick} expanded={expanded}>
      <WorkoutInfo>
        <DailyWorkout>Workout</DailyWorkout>
        <WorkoutNumber>
          {workoutCount} <Minutes>Mins</Minutes>
        </WorkoutNumber>
        {expanded && (
          <AverageContainer>
            <AverageLabel>Average of the Last 7 Days</AverageLabel>
            <AverageValue>{averageWorkout.toFixed(2)} mins</AverageValue>
          </AverageContainer>
        )}
        <ExpandableText expanded={expanded}>
          {previousDaysData.map((dayData, index) => (
            <div key={index}>
              <FaDumbbell style={{ color: "#78C4D3", marginRight: "5px" }} />
              <DateLabel>{formatDate(dayData.date)}:</DateLabel> {dayData.workoutCount} mins
            </div>
          ))}
        </ExpandableText>
      </WorkoutInfo>
      <WorkoutImage src={workOutGraph} alt="Workout Image" />
    </WorkoutSquare>
  );
};

export default Workout;

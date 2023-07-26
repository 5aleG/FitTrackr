import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { 
  WorkoutSquare, 
  WorkoutInfo, 
  DailyWorkout, 
  WorkoutNumber, 
  Minutes, 
  CircularProgressbarWrapper, 
  AverageContainer, 
  AverageLabel, 
  AverageValue, 
  DateLabel, 
  ExpandableText 
} from "./workoutStyled";
import { FaDumbbell } from 'react-icons/fa';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

const Workout = () => {
  const [expanded, setExpanded] = useState(false);
  const [workoutCount, setWorkoutCount] = useState(0);
  const dailyWorkout = 50; // Dummy Data
  const dailyWorkoutGoal = 60; // Dummy Data

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

  let progressPercentage = (dailyWorkout / dailyWorkoutGoal) * 100;
  if (dailyWorkout > dailyWorkoutGoal) {
    progressPercentage = 100;
  }

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
      {!expanded && <CircularProgressbarWrapper>
          <CircularProgressbar
            value={progressPercentage}
            text={`${dailyWorkout} / ${dailyWorkoutGoal} Min`}
            styles={{
              path: {
                stroke: `#E67842`,
                strokeWidth: 7,
                strokeLinecap: 'round',
              },
              trail: {
                stroke: '#FEECE3',
                strokeWidth: 7,
              },
              text: {
                fill: 'var(--primary-text-color)',
                fontSize: '10px',
                fontWeight: 'bold',
              },
            }}
          />
        </CircularProgressbarWrapper>}
    </WorkoutSquare>
  );
};

export default Workout;

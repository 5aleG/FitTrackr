import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCalories } from "../../Redux/Slices/calorieSlice";
import fitTrackrAPI from '../../Axios/fitTrackrAPI'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  CalorieCountSquare,
  CalorieCountInfo,
  DailyCalorie,
  BigCalories,
  Kcal,
  CircularProgressbarWrapper,
  AverageContainer,
  AverageLabel,
  AverageValue,
  DateLabel,
  ExpandableText,
} from "./calorieCountStyled";
import { PiBowlFoodDuotone } from "react-icons/pi";
import Lottie from 'lottie-react';
import loaderAnimation from '../../Assets/animation_lkv6o1yb.json';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
};

const CalorieCount = () => {
  const [expanded, setExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const calories = useSelector(state => state.calories.calories);
  const dailyCaloriesGoal = 2500;
  const userId = localStorage.getItem('user_id');

  const handleCalorieCountClick = () => {
    setExpanded(!expanded);
  };

  const [previousDaysData, setPreviousDaysData] = useState([]);

  useEffect(() => {
    const fetchUserCalorieData = async () => {
      try {
        const currentDateResponse = await fitTrackrAPI.get(`/calories/daily-calories/${userId}/`);
        const currentDateData = currentDateResponse.data;

        const previousDaysResponse = await fitTrackrAPI.get(`/calories/all-calories/${userId}/`);
        const previousDaysData = previousDaysResponse.data;

        console.log(currentDateData);
        console.log(previousDaysData);
        setIsLoading(false);

        if (currentDateData) {
          dispatch(updateCalories(currentDateData.calories));
        }

        setPreviousDaysData(previousDaysData.slice(0, 7)); // Set the last 7 entries
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchUserCalorieData();
  }, [dispatch, userId]);
  
  if (isLoading ||!calories || previousDaysData.length === 0) {
    return <Lottie animationData={loaderAnimation} loop={true} style={{ height: 150, width: 150 }} />;
  }

  const averageCalories = previousDaysData.reduce((sum, dayData) => sum + dayData.calories, 0) / previousDaysData.length;

  let progressPercentage = (calories / dailyCaloriesGoal) * 100;
  if (calories > dailyCaloriesGoal) {
    progressPercentage = 100;
  }

  return (
    <CalorieCountSquare onClick={handleCalorieCountClick} expanded={expanded}>
      <CalorieCountInfo>
        <DailyCalorie>Daily Calorie</DailyCalorie>
        <BigCalories>
          {calories} <Kcal>Cal</Kcal>
        </BigCalories>
        {expanded && (
          <AverageContainer>
            <AverageLabel>Average of the Last 7 Entries:</AverageLabel>
            <AverageValue>{Math.round(averageCalories)} Cal</AverageValue>
          </AverageContainer>
        )}
        <ExpandableText expanded={expanded}>
          {previousDaysData.map((dayData, index) => (
            <div key={index}>
              <PiBowlFoodDuotone style={{ color: "#78C4D3", marginRight: "5px" }} />
              <DateLabel>{formatDate(dayData.date)}:</DateLabel> {dayData.calories} Cal
            </div>
          ))}
        </ExpandableText>
      </CalorieCountInfo>
      {!expanded && <CircularProgressbarWrapper>
          <CircularProgressbar
            value={progressPercentage}
            text={`${calories} / ${dailyCaloriesGoal} cal`}
            styles={{
              path: {
                stroke: `#78C4D3`,
                strokeWidth: 7,
                strokeLinecap: 'round',
              },
              trail: {
                stroke: '#EBF5F8',
                strokeWidth: 7,
              },
              text: {
                fill: 'var(--primary-text-color)',
                fontSize: '10px',
                fontWeight: 'bold',
              },
            }}
          />
        </CircularProgressbarWrapper>
      }
    </CalorieCountSquare>
  );
}

export default CalorieCount;

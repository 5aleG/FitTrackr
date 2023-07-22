import React, { useEffect, useState } from "react";
import {
  CalorieCountSquare,
  CalorieCountInfo,
  DailyCalorie,
  BigCalories,
  Kcal,
  CalorieImage,
} from "./calorieCountStyled";

const calGraphImage = require("../../Assets/cal_graph.svg").default;

const CalorieCount = () => {
  const [calories, setCalories] = useState(0);
  // API call for users daily calories
  const dailyCalories = 1856 ; // Dummy data

  useEffect(() => {
    let startValue = 0; 
    const animationDuration = 600; 
    const step = (dailyCalories / animationDuration) * 10; 

    const timer = setInterval(() => {
      startValue += step; 
      if (startValue >= dailyCalories) {
        clearInterval(timer); 
      }
      setCalories(Math.floor(startValue));
    }, 10); 
    return () => clearInterval(timer);
  }, [dailyCalories]); 

  return (
    <CalorieCountSquare>
      <CalorieCountInfo>
        <DailyCalorie>Daily Calorie</DailyCalorie>
        <BigCalories>
          {calories} <Kcal>Cal</Kcal>
        </BigCalories>
      </CalorieCountInfo>
      <CalorieImage src={calGraphImage} alt="Calorie Image" />
    </CalorieCountSquare>
  );
};

export default CalorieCount;


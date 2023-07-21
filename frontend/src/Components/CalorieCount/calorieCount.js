import React from "react";
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
  // API call for users daily calories
  const dailyCalories = 1800; // Example

  return (
    <CalorieCountSquare>
      <CalorieCountInfo>
        <DailyCalorie>Daily Calorie</DailyCalorie>
        <BigCalories>
          {dailyCalories} <Kcal>Cal</Kcal>
        </BigCalories>
      </CalorieCountInfo>
      <CalorieImage src={calGraphImage} alt="Calorie Image" />
    </CalorieCountSquare>
  );
};

export default CalorieCount;


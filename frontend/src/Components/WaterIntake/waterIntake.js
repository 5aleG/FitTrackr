import React from 'react'
import { 
    WaterIntakeSquare,
    WaterIntakeInfo,
    DailyWater,
    WaterNumber,
    Liters,
    WaterIntakeImage } from "./waterIntakeStyled"

const waterGraphImage = require("../../Assets/water_intake_graph.svg").default;

const WaterIntake = () => {
    
    // API call for users daily water intake
    const dailyWaterIntake = 1.6; // Example

    return (
        <WaterIntakeSquare>
          <WaterIntakeInfo>
            <DailyWater>Daily Water Intake</DailyWater>
            <WaterNumber>
              {dailyWaterIntake} <Liters>Liters</Liters>
            </WaterNumber>
          </WaterIntakeInfo>
          <WaterIntakeImage src={waterGraphImage} alt="Calorie Image" />
        </WaterIntakeSquare>
      );
}

export default WaterIntake;
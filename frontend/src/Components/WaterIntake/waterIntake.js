import React, { useEffect, useState } from 'react';
import {
  WaterIntakeSquare,
  WaterIntakeInfo,
  DailyWater,
  WaterNumber,
  Liters,
  WaterIntakeImage,
  AverageContainer,
  AverageLabel,
  AverageValue,
  DateLabel,
  ExpandableText
} from './waterIntakeStyled';
import { FaTint } from 'react-icons/fa';

const waterGraphImage = require('../../Assets/water_intake_graph.svg').default;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

const WaterIntake = () => {
  const [expanded, setExpanded] = useState(false);
  const [waterIntake, setWaterIntake] = useState(0);
  const dailyWaterIntake = 1.6; // Dummy Data

  const handleWaterIntakeClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    let startValue = 0;
    const animationDuration = 600;
    const step = (dailyWaterIntake / animationDuration) * 10;

    const timer = setInterval(() => {
      startValue += step;
      if (startValue >= dailyWaterIntake) {
        clearInterval(timer);
      }
      setWaterIntake(parseFloat(startValue.toFixed(2)));
    }, 10);
    return () => clearInterval(timer);
  }, [dailyWaterIntake]);

  // Dummy data for the water intake of the previous 7 days
  const previousDaysData = [
    { date: '2023-07-21', waterIntake: 1.6 },
    { date: '2023-07-20', waterIntake: 1.2 },
    { date: '2023-07-19', waterIntake: 1.9 },
    { date: '2023-07-18', waterIntake: 1.4 },
    { date: '2023-07-17', waterIntake: 1.7 },
    { date: '2023-07-16', waterIntake: 1.5 },
    { date: '2023-07-15', waterIntake: 1.8 },
  ];

  // Calculate the average of the last 7 days (excluding "Today")
  const averageWaterIntake = previousDaysData.slice(1).reduce((sum, dayData) => sum + dayData.waterIntake, 0) / 6;

  return (
    <WaterIntakeSquare onClick={handleWaterIntakeClick} expanded={expanded}>
      <WaterIntakeInfo>
        <DailyWater>Daily Water Intake</DailyWater>
        <WaterNumber>
          {waterIntake} <Liters>Liters</Liters>
        </WaterNumber>
        {expanded && (
          <AverageContainer>
            <AverageLabel>Average of the Last 7 Days:</AverageLabel>
            <AverageValue>{averageWaterIntake.toFixed(2)} Liters</AverageValue>
          </AverageContainer>
        )} 
        <ExpandableText expanded={expanded}>
          {previousDaysData.map((dayData, index) => (
            <div key={index}>
              <FaTint style={{ color: "#78C4D3", marginRight: "5px" }} />
              <DateLabel>{formatDate(dayData.date)}:</DateLabel> {dayData.waterIntake} Liters
            </div>
          ))}
        </ExpandableText>
      </WaterIntakeInfo>
      {!expanded && <WaterIntakeImage src={waterGraphImage} alt="Water Intake Image" />}
    </WaterIntakeSquare>
  );
};

export default WaterIntake;

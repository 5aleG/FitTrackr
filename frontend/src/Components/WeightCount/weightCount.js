import React, { useEffect, useState, useMemo, useRef } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { 
  CurrentWeightSquare, 
  CurrentWeightInfo, 
  WeightRecord, 
  WeightRecordNumber, 
  KgLabel, 
  CircularProgressbarWrapper, 
  AverageContainer, 
  AverageLabel, 
  AverageValue,
  DateLabel,
  ExpandableText,
} from './weightCountStyled';
import { FaWeight } from 'react-icons/fa';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

const WeightCount = () => {
  const [expanded, setExpanded] = useState(false);
  const [currentWeight, setCurrentWeight] = useState(0); // Set a default value for the current weight (dummy data)
  const startingWeight = 95; // Dummy data for the user's starting weight
  const weightGoal = 80;

  const weeklyWeightEntries = useMemo(() => [
    { date: formatDate(new Date()), weight: currentWeight },
    { date: '2023-07-22', weight: 92 },
    { date: '2023-07-15', weight: 94 },
    { date: '2023-07-08', weight: 96 },
    { date: '2023-07-01', weight: 98 },
  ], [currentWeight]);

  const totalWeightLost = startingWeight - weeklyWeightEntries[weeklyWeightEntries.length - 1].weight;

  const expandableTextRef = useRef(null);

  const handleWeightCountClick = () => {
    setExpanded(!expanded);
  };

  let progressPercentage = (weightGoal / currentWeight) * 100;
  if (progressPercentage > 100) {
    progressPercentage = 100;
  }

  useEffect(() => {
    let startValue = startingWeight;
    const animationDuration = 600;
    const step = ((weeklyWeightEntries[0].weight - startingWeight) / animationDuration) * 10;

    const timer = setInterval(() => {
      startValue += step;
      if (startValue >= weeklyWeightEntries[0].weight) {
        clearInterval(timer);
      }
      setCurrentWeight(parseFloat(startValue.toFixed(2)));
    }, 10);
    return () => clearInterval(timer);
  }, [startingWeight, weeklyWeightEntries]);

  useEffect(() => {
    if (expanded && expandableTextRef.current) {
      expandableTextRef.current.scrollTop = expandableTextRef.current.scrollHeight;
    }
  }, [expanded]);

  return (
    <CurrentWeightSquare onClick={handleWeightCountClick} expanded={expanded}>
      <CurrentWeightInfo>
        <WeightRecord>Weight Record</WeightRecord>
        <WeightRecordNumber>
          {currentWeight} <KgLabel>Kg</KgLabel>
        </WeightRecordNumber>
        {expanded && (
          <AverageContainer>
            <AverageLabel>Total Weight Lost:</AverageLabel>
            <AverageValue>{totalWeightLost.toFixed(2)} Kg</AverageValue>
          </AverageContainer>
        )}
        <ExpandableText expanded={expanded} ref={expandableTextRef}>
          {weeklyWeightEntries.map((entry, index) => (
            <div key={index}>
              <FaWeight style={{ color: '#78C4D3', marginRight: '5px' }} />
              <DateLabel>{formatDate(entry.date)}:</DateLabel> {entry.weight} Kg
            </div>
          ))}
        </ExpandableText>
      </CurrentWeightInfo>
      {!expanded && <CircularProgressbarWrapper>
          <CircularProgressbar
            value={progressPercentage}
            text={`${currentWeight} / ${weightGoal} Kg`}
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
        </CircularProgressbarWrapper>}
    </CurrentWeightSquare>
  );
};

export default WeightCount;

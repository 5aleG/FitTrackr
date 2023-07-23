import React, { useEffect, useState, useMemo, useRef } from 'react';
import { 
  CurrentWeightSquare, 
  CurrentWeightInfo, 
  WeightRecord, 
  WeightRecordNumber, 
  KgLabel, 
  WeightImage, 
  AverageContainer, 
  AverageLabel, 
  AverageValue,
  DateLabel,
  ExpandableText,
} from './weightCountStyled';
import { FaWeight } from 'react-icons/fa';

const weightGraphImage = require('../../Assets/weight_graph.svg').default;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

const WeightCount = () => {
  const [expanded, setExpanded] = useState(false);
  const [currentWeight, setCurrentWeight] = useState(0); // Set a default value for the current weight (dummy data)
  const startingWeight = 90; // Dummy data for the user's starting weight

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
      {!expanded && <WeightImage src={weightGraphImage} alt='Weight Image' />}
    </CurrentWeightSquare>
  );
};

export default WeightCount;

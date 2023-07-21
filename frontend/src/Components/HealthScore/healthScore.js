import React, { useState, useEffect } from "react";
import {
  HealthScoreSquare,
  HealthScoreCircle,
  HealthScoreInfo,
  ExpandableText,
} from "./healthScoreStyled";

const HealthScore = () => {
  const [expanded, setExpanded] = useState(false); // State to track if the component is expanded or not
  const [healthScore, setHealthScore] = useState(0); // State to track the health score value
  const actualHealthScore = 85; // API call for HealthScore - static value just for demo

  // Function to handle the click event on the HealthScoreSquare component
  const handleHealthScoreClick = () => {
    setExpanded(!expanded); // Toggle the expanded state
  };

  // useEffect hook to animate the health score value
  useEffect(() => {
    let startValue = 0; // Initial value for the animation
    const animationDuration = 600; // 600ms = 1 second (Duration of the animation)
    const step = (actualHealthScore / animationDuration) * 10; // Calculate the step value for each animation frame

    // setInterval function to increment the health score value at regular intervals
    const timer = setInterval(() => {
      startValue += step; // Increment the value by the step
      if (startValue >= actualHealthScore) {
        clearInterval(timer); // If the value reaches the actualHealthScore, stop the animation
        startValue = actualHealthScore;
      }
      setHealthScore(Math.floor(startValue)); // Update the healthScore state with the new value
    }, 10); // Set the interval to 10ms for smoother animation

    // Cleanup function to clear the interval when the component unmounts or when actualHealthScore changes
    return () => clearInterval(timer);
  }, [actualHealthScore]); // Depend on actualHealthScore to re-run the animation when it changes

  return (
    <HealthScoreSquare expanded={expanded} onClick={handleHealthScoreClick}>
      {/* HealthScoreCircle component that displays the health score */}
      <HealthScoreCircle healthScore={healthScore}>
        {healthScore}
      </HealthScoreCircle>
      <HealthScoreInfo>
        {/* Header */}
        <div style={{ fontWeight: "bold" }}>Health Score</div>

        {/* Conditional rendering based on the expanded state */}
        {expanded ? (
          // Display this content when expanded is true
          <div>
            Based on your health test your overall score is lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet
            nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero
            malesuada feugiat. Vivamus magna justo, lacinia eget consectetur
            sed, convallis at tellus.
          </div>
        ) : (
          // Display this content when expanded is false
          <ExpandableText>
            <div>
              Based on your health test your overall score is...
              <strong>more</strong>
            </div>
          </ExpandableText>
        )}
      </HealthScoreInfo>
    </HealthScoreSquare>
  );
};

export default HealthScore;

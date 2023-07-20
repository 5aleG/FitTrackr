import React, { useState } from "react";
import {
  HealthScoreSquare,
  HealthScoreCircle,
  HealthScoreInfo,
  ExpandableText,
} from "./healthScoreStyled";

const HealthScore = () => {
    const [expanded, setExpanded] = useState(false);
  
    const handleHealthScoreClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <HealthScoreSquare expanded={expanded} onClick={handleHealthScoreClick}>
        <HealthScoreCircle>
          80 {/* API call for the health score */}
        </HealthScoreCircle>
        <HealthScoreInfo>
          <div style={{ fontWeight: "bold" }}>Health Score</div>
          <ExpandableText expanded={expanded}>
            <div>
              Based on your health test your overall score is...
              <strong>more</strong>
            </div>
          </ExpandableText>
          {expanded && (
            <div>
              {/* Full text will be added here */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non
              nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem
              ut libero malesuada feugiat. Vivamus magna justo, lacinia eget
              consectetur sed, convallis at tellus. Sed porttitor lectus nibh.
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
              dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel,
              ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere
              blandit. Nulla quis lorem ut libero malesuada feugiat.
            </div>
          )}
        </HealthScoreInfo>
      </HealthScoreSquare>
    );
  };
  
  export default HealthScore;


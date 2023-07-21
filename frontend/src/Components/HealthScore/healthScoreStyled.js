import styled, { keyframes, css } from "styled-components";

const expandAnimation = keyframes`
  0% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

export const HealthScoreSquare = styled.div`
  display: flex;
  align-items: ${({ expanded }) => (expanded ? "flex-start" : "center")};
  flex-direction: ${({ expanded }) => (expanded ? "row" : "row")};
  background-color: var(--button-background-color);
  border-radius: 30px;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  color: var(--primary-text-color);
  cursor: pointer;
  transition: height 1s, transform 1s;
  ${({ expanded }) =>
    expanded &&
    css`
      animation: ${expandAnimation} 1s;
    `}
`;

export const HealthScoreCircle = styled.div`
  min-width: 30px;
  border-radius: 50%;
  background-color: #e67842;
  background-color: ${({ healthScore }) => {
    if (healthScore >= 0 && healthScore <= 40) return "#FF6A6A";
    if (healthScore >= 41 && healthScore <= 70) return "#e67842";
    if (healthScore >= 71 && healthScore <= 100) return "#28A77B";
    return "#e67842"; // Default color 
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-size: 28px;
  font-weight: 600;
  color: white;
  margin-bottom: ${({ expanded }) => (expanded ? "20px" : "0")};
`;

export const HealthScoreInfo = styled.div`
  margin-left: 20px;
`;

export const ExpandableText = styled.div`
  max-height: ${({ expanded }) => (expanded ? "none" : "200px")};
  overflow: hidden;
  transition: max-height 0.3s;
`;

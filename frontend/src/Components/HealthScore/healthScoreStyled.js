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
  background-color: #eeeeee;
  border-radius: 30px;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  color: #555555;
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

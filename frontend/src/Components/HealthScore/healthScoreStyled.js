import styled, { css, keyframes } from "styled-components";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const HealthScoreSquare = styled.div`
  display: flex;
  align-items: center;
  background-color: #eeeeee;
  border-radius: 30px;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  color: #555555;
  cursor: pointer;
  transition: height 0.3s, transform 0.5s;

  ${({ expanded }) =>
    expanded &&
    css`
      animation: ${bounce} 1s;
    `}
`;

export const HealthScoreCircle = styled.div`
  border-radius: 50%;
  background-color: #e67842;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-size: 34px;
  font-weight: 600;
  color: white;
`;

export const HealthScoreInfo = styled.div`
  margin-left: 20px;
`;

export const ExpandableText = styled.div`
  max-height: ${({ expanded }) => (expanded ? "none" : "200px")};
  overflow: hidden;
  transition: max-height 0.3s;
`;

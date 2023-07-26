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

export const WaterIntakeSquare = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--background-color);
  border-radius: 30px;
  padding: 20px;
  color: var(--primary-text-color);
  cursor: pointer;
  transition: height 0.3s;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  box-shadow: 0 0 18px var(--box-shadow-color);

  ${({ expanded }) =>
    expanded &&
    css`
      animation: ${expandAnimation} 1s;
    `}
`;

//The problem is here
export const WaterIntakeInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DailyWater = styled.p`
  font-size: 14px;
  font-weight: normal;
  padding-bottom: 5px;
`;

export const WaterNumber = styled.p`
  font-size: 28px;
  font-weight: bold;
`;

export const Liters = styled.span`
  font-size: 12px;
  font-weight: normal;
`;

export const WaterIntakeImage = styled.img`
  width: 110px;
  height: 70px;
  margin-left: auto;
`;

export const AverageContainer = styled.div`
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const AverageLabel = styled.b`
  display: block;
  margin-top: 10px;
`;

export const AverageValue = styled.span`
  display: inline-block;
  margin-top: 10px;
  font-size: 20px;
`;

export const DateLabel = styled.span`
  font-weight: bold;
`;

export const ExpandableText = styled.div`
  max-height: ${({ expanded }) => (expanded ? "200px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s;
  display: flex;
  flex-wrap: wrap;

  & > div {
    margin-top: 10px;
    font-size: 14px;
    line-height: 1;
    margin-right: 15px;
  }
`;

export const CircularProgressbarWrapper = styled.div`
  width: 460px;
  margin-left: auto;
`
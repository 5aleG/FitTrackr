import styled from "styled-components";

export const WaterIntakeSquare = styled.div`
    display: flex;
    align-items: center;
    background-color: #FFF; 
    border-radius: 30px;
    padding: 20px;
    color: #555555;
    cursor: pointer;
    transition: height 0.3s;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    box-shadow: 0 0 18px rgba(227, 234, 241, 0.8);
`;

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

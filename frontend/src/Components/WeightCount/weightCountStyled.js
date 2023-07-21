import styled from "styled-components";

export const CurrentWeightSquare = styled.div`
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

export const CurrentWeightInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const WeightRecord = styled.p`
    font-size: 14px;
    font-weight: normal;
    padding-bottom: 5px;
`;

export const WeightRecordNumber = styled.p`
    font-size: 28px;
    font-weight: bold;
`;

export const KgLabel = styled.span`
    font-size: 12px;
    font-weight: normal;
`;

export const WeightImage = styled.img`
    width: 120px;
    height: 80px;
    margin-left: auto;
`;

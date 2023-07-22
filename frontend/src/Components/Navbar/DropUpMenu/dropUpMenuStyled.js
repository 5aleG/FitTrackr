import styled from 'styled-components';

export const DropUpContainer = styled.div`
    position: absolute;
    bottom: 70px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 95%;
    height: 100px;
    background-color: rgba(87, 88, 153, 0.95); 
    border-radius: 40px;
    padding: 10px;
`;

export const MenuItem = styled.div`
    color: #fff;
    font-size: 16px;
    margin: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`;

export const CircleIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin-bottom: 8px;
`;

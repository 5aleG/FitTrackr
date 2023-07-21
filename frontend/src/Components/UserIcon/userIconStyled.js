import styled from 'styled-components';


export const UserIconContainer = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #e67842;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const UserIconImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
`;
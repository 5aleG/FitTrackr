import styled from 'styled-components';
import { BsPlusCircleFill } from 'react-icons/bs';

export const NavbarContainer = styled.div`
    position: fixed;
    bottom: ${props => (props.isHidden ? '-65px' : '40px')};
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    max-width: 500px;
    height: 65px;
    background-color: #575899;
    border-radius: 40px;
    padding: 0 20px;
    transition: bottom 0.3s;
`;



export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    `;

export const Icon = styled.div`
    color: #FFF;
    margin: 0 20px;
`;

export const PlusIcon = styled(BsPlusCircleFill)`
    color: #FFF;
    font-size: 45px;
    font-weight: bold;
    border-radius: 50%;
    background-color: #31326F;
    `;
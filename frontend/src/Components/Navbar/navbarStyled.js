import styled, { css } from 'styled-components';
import { FaPlus } from 'react-icons/fa'; 

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
    z-index: 9999;
`;



export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    `;

export const Icon = styled.div`
  color: #FFF;
  margin: 0 15px;

  ${props => props.isActive && css`
    color: #fff;
  `}
`;

export const PlusIcon = styled(FaPlus)`
    color: #575899;
    font-weight: bold;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    transition: transform 0.3s, background-color 0.3s;
    position: relative;
    padding: 9px;
    height: 28px;
    width: 28px;

    &::after {
        content: '+';
        color: #fff;
        font-size: 24px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    ${props =>
        props.isMenuOpen &&
        css`
        transform: rotate(45deg);
        color: #FF6A6A;
        background-color: #fff;
        `}
`;
import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const UserDropdownContainer = styled.div`
  position: absolute;
  top: 80px; /* Adjust the position as needed */
  right: 20px;
  width: 150px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.3s; /* Add animation to the dropdown */
`;

export const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  ${({ last }) =>
    last &&
    css`
      border-top: 1px solid #e1e1e1;
    `}
`;

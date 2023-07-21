import styled from "styled-components";

export const ToggleWrapper = styled.div`
  position: flex;
  margin: 20px;
  top: 20px;
  left: 20px;
  cursor: pointer;
  z-index: 999;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#0C0C0C" : "#FFFFFF")};
  border-radius: 40px;
  width: 42px;
  height: 16px;
  display: flex;
  justify-content: ${({ isDarkMode }) => (isDarkMode ? "flex-start" : "flex-end")};
  padding: 10px;
  border: 2px solid #E0E0E0;
  transition: background-color 0.3s ease-in-out;
`;

export const ToggleIcon = styled.div`
  font-size: 18px;
  color: ${({ isDarkMode }) => (isDarkMode ? "#FAFAFA" : "#FFC83B")};
  transition: color 0.3s ease-in-out;
  margin: 0 4px;
`;

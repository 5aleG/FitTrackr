import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import Login from "./Pages/Login/login"

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      {!isMobile && (
        <DesktopOnlyWarning>
          <p>Only available on mobile</p>
        </DesktopOnlyWarning>
      )}
      {isMobile && <Login />}
    </>
  );
};

export default App;

const DesktopOnlyWarning = styled.div`
  display: block;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px); /* Add a backdrop blur effect */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 9999;
`;
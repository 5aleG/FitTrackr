import { Route, Routes } from "react-router-dom";
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import Login from "./Pages/Login/login"
import Home from "./Pages/Home/home";

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 767, minWidth: 400 });
  
  return (
    <Routes>
      {!isMobile && (
        <Route path="/login" element={<DesktopOnlyWarning>Only available on mobile</DesktopOnlyWarning>} />
      )}
      {isMobile && (
        <Route path="/login" element={<Login />} />
      )}
      <Route path="/home" element={<Home />} />
    </Routes>
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
  backdrop-filter: blur(5px);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 9999;
`;
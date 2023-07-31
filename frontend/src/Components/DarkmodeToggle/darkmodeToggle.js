import React, { useEffect, useState } from "react";
import { ToggleWrapper, ToggleIcon } from "./darkmodeToggleStyled";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem('darkmode')
    return storedDarkMode === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkmode', isDarkMode);
    isDarkMode ? setDarkMode() : setLightMode();
  }, [isDarkMode])

  const toggleLight = () => {
    setIsDarkMode(false);
    setLightMode();
  };

  const toggleDark = () => {
    setIsDarkMode(true);
    setDarkMode();
  };

  const setLightMode = () => {
    const root = document.documentElement;
    root.style.setProperty("--background-color", "#FAFAFA");
    root.style.setProperty("--plate-color", "#FFFFFF");
    root.style.setProperty("--primary-text-color", "#525252");
    root.style.setProperty("--secondary-text-color", "#949494");
    root.style.setProperty("--button-background-color", "#EAEAEA");
    root.style.setProperty("--button-text-color", "#525252");
    root.style.setProperty("--highlight-color", "#79CFF2");
    root.style.setProperty("--box-shadow-color", "#E4EAF1");
  };

  const setDarkMode = () => {
    const root = document.documentElement;
    root.style.setProperty("--background-color", "#151515");
    root.style.setProperty("--plate-color", "#121212");
    root.style.setProperty("--primary-text-color", "#FFFFFF");
    root.style.setProperty("--secondary-text-color", "#949494");
    root.style.setProperty("--button-background-color", "#262626");
    root.style.setProperty("--button-text-color", "#525252");
    root.style.setProperty("--highlight-color", "#79CFF2");
    root.style.setProperty("--box-shadow-color", "#232323");
  };

  return (
    <ToggleWrapper onClick={isDarkMode ? toggleLight : toggleDark} isDarkMode={isDarkMode}>
      <ToggleIcon isDarkMode={isDarkMode}>
        {isDarkMode ? <FaMoon /> : <FaSun />}
      </ToggleIcon>
    </ToggleWrapper>
  );
};

export default DarkModeToggle;
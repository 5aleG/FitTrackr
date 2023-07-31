import React from 'react';
import Navbar from '../../Components/Navbar/navbar';
import UserIcon from '../../Components/UserIcon/userIcon';
import DarkModeToggle from '../../Components/DarkmodeToggle/darkmodeToggle';
import { StatisticWrapper } from './statisticsStyled';

const Statistics = ({ darkMode }) => {
    return(
        <StatisticWrapper>
            <DarkModeToggle darkMode={darkMode} /> 
            <UserIcon />
            <Navbar />
        </StatisticWrapper>
    )
};

export default Statistics;
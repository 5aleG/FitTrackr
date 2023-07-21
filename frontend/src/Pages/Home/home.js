import React from 'react';
import Navbar from '../../Components/Navbar/navbar';
import GreetingMessage from '../../Components/GreetingMessage/greetingMessage';
import HealthScore from '../../Components/HealthScore/healthScore';
import CalorieCount from '../../Components/CalorieCount/calorieCount';
import { TodayText } from './homeStyled';
import WeightCount from '../../Components/WeightCount/weightCount';
import UserIcon from '../../Components/UserIcon/userIcon';
import WaterIntake from '../../Components/WaterIntake/waterIntake';
import Workout from '../../Components/Workout/workout';
import DarkModeToggle from '../../Components/DarkmodeToggle/darkmodeToggle'; // Adjust the path accordingly

const Home = ({ darkMode }) => {
    return(
        <>
            <DarkModeToggle darkMode={darkMode} /> 
            <UserIcon />
            <GreetingMessage darkMode={darkMode} /> 
            <Navbar />
            <HealthScore />
            <TodayText>Today</TodayText>
            <CalorieCount />
            <WaterIntake />
            <WeightCount />
            <Workout />
        </>
    )
};

export default Home;

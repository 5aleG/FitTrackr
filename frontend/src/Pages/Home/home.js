import React, { useEffect } from 'react';
import Navbar from '../../Components/Navbar/navbar';
import GreetingMessage from '../../Components/GreetingMessage/greetingMessage';
import HealthScore from '../../Components/HealthScore/healthScore';
import CalorieCount from '../../Components/CalorieCount/calorieCount';
import { TodayText, HomeWrapper } from './homeStyled';
import WeightCount from '../../Components/WeightCount/weightCount';
import UserIcon from '../../Components/UserIcon/userIcon';
import WaterIntake from '../../Components/WaterIntake/waterIntake';
import Workout from '../../Components/Workout/workout';
import DarkModeToggle from '../../Components/DarkmodeToggle/darkmodeToggle';
import { useNavigate } from 'react-router-dom';

const Home = ({ darkMode }) => {
    const navigate = useNavigate()

    useEffect(() => {
      const access_token = localStorage.getItem('access_token');
      if (!access_token) {
        navigate('/');
      }
    }, [navigate]);

    return(
        <HomeWrapper>
            <DarkModeToggle darkMode={darkMode} /> 
            <UserIcon />
            <GreetingMessage /> 
            <Navbar />
            <HealthScore />
            <TodayText>Today</TodayText>
            <CalorieCount />
            <WaterIntake />
            <WeightCount />
            <Workout />
        </HomeWrapper>
    )
};

export default Home;

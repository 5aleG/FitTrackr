import React from 'react';
import Navbar from '../../Components/Navbar/navbar';
import GreetingMessage from '../../Components/GreetingMessage/greetingMessage';
import HealthScore from '../../Components/HealthScore/healthScore';
import CalorieCount from '../../Components/CalorieCount/calorieCount';
import { TodayText } from './homeStyled';


const Home = () => {
    return(
        <>
            <GreetingMessage />
            <Navbar />
            <HealthScore />
            <TodayText>Today</TodayText>
            <CalorieCount />
        </>
    )
};

export default Home;
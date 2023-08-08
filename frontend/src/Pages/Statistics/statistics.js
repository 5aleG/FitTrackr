import React, { useEffect } from 'react';
import Navbar from '../../Components/Navbar/navbar';
import UserIcon from '../../Components/UserIcon/userIcon';
import DarkModeToggle from '../../Components/DarkmodeToggle/darkmodeToggle';
import WeightChart from '../../Components/Charts/weightChart';
import WorkoutChart from '../../Components/Charts/workoutCharts';
import CalorieChart from '../../Components/Charts/calorieChart';
import WaterIntakeChart from '../../Components/Charts/waterIntakeCharts';
import { StatisticWrapper, StatisticsText } from './statisticsStyled';
import { useNavigate } from 'react-router-dom';

const Statistics = ({ darkMode }) => {
    const navigate = useNavigate()

    useEffect(() => {
      const access_token = localStorage.getItem('access_token');
      if (!access_token) {
        navigate('/');
      }
    }, [navigate]);
    return(
        <StatisticWrapper>
            <DarkModeToggle darkMode={darkMode} /> 
            <UserIcon />
            <StatisticsText>Statistics</StatisticsText>
            <CalorieChart />
            <WaterIntakeChart />
            <WeightChart />
            <WorkoutChart />
            <Navbar />
        </StatisticWrapper>
    )
};

export default Statistics;
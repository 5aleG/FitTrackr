import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { GraphContainer, ChartText } from './chartsStyled';
import { Chart as ChartJS, CategoryScale, PointElement, LinearScale, Filler, LineElement } from 'chart.js';
import fitTrackrAPI from '../../Axios/fitTrackrAPI';

ChartJS.register(CategoryScale, PointElement, LinearScale, Filler, LineElement);

const CalorieChart = () => {
  const [caloriesData, setCaloriesData] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem('user_id');
    console.log('Fetching data for user ID:', userId);
  
    fitTrackrAPI.get(`/calories/all-calories/${userId}/`)
      .then(response => {
        console.log('API response:', response);
        setCaloriesData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

    const formatDateWithoutYear = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString(undefined, { month: 'numeric', day: 'numeric' });
    };
  
  const chartData = {
    labels: caloriesData.map(entry => formatDateWithoutYear(entry.date)),
    datasets: [
      {
        label: 'Calories',
        data: caloriesData.map(entry => entry.calories),
        fill: true,
        borderColor: '#78C4D3',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 1.5,
      },
    ],
  };
  

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Calories Chart',
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <>
      <ChartText>Calories</ChartText>
      <GraphContainer>
        <Line data={chartData} options={options} />
      </GraphContainer>
    </>
  );
};

export default CalorieChart;

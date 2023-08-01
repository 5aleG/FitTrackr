import React from 'react';
import { Line } from 'react-chartjs-2';
import { GraphContainer, ChartText } from './chartsStyled';
import { Chart as ChartJS, CategoryScale, PointElement, LinearScale, Filler, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, PointElement, LinearScale, Filler, LineElement);

const WeightChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Weight',
        data: [115, 114, 109, 105, 102, 98, 98],
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
        text: 'Weight Chart',
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
    <ChartText>Weight</ChartText>
    <GraphContainer>
      <Line data={data} options={options} />
    </GraphContainer>
    </>
  );
};

export default WeightChart;

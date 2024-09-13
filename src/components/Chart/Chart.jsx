import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import styles from './Chart.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Contract 1', 'Contract 2', 'Contract 3', 'Contract 4'],
  datasets: [
    {
      data: [45.3, 21.3, 28.7, 4.7],
      backgroundColor: ['#9acd32', '#d3d3d3', '#ee82ee', '#87ceeb'],
      hoverBackgroundColor: ['#7da527', '#a9a9a9', '#cd69cd', '#6495ed'],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const Chart = () => {
  return (
    <div className={styles.chartContainer}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default Chart;

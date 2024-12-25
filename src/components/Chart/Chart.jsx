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
      backgroundColor: ['#34c759', '#ffcc00', '#007aff', '#ff3b30'],
      hoverBackgroundColor: ['#28a745', '#e6b800', '#0056b3', '#cc3232'],
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

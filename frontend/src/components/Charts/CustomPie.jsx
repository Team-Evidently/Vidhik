import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CustomPie(props) {
  const { data } = props;

  const chartData = {
    labels: ['Won', 'Lost', 'Settled'],
    datasets: [
      {
        label: 'Case Status',
        data: data,
        backgroundColor: [
          'rgba(46, 139, 87, 0.7)',  // Dark green for Won cases
          'rgba(220, 20, 60, 0.7)',  // Dark red for Lost cases
          'rgba(255, 165, 0, 0.7)',  // Dark orange for Settled cases
        ],
        borderColor: [
          'rgba(46, 139, 87, 1)',
          'rgba(220, 20, 60, 1)',
          'rgba(255, 165, 0, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        displayColors: false,
        bodyFontColor: 'white',
        callbacks: {
          label: (context) => {
            // Display label text with the number of cases won
            if (context.datasetIndex === 0) {
              const wonCases = context.parsed;
              return `Won: ${wonCases}`;
            }
            return null;
          },
        },
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };

  return <Pie data={chartData} options={chartOptions} width={400} height={400} className='w-full' />;
}

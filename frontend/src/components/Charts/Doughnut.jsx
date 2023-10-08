import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



export function CustomDoughnut(props) {
    const data = {
        labels: ['Criminal', 'Civil', 'Family', 'Real-Estate', 'Corporate', 'Adoption'],
        datasets: [
          {
            label: '# of Votes',
            data: props.data,
            backgroundColor: [
                'rgba(51, 51, 51, 0.7)',   // Dark Gray
                'rgba(0, 102, 204, 0.7)',  // Dark Blue
                'rgba(128, 128, 0, 0.7)',  // Olive
                'rgba(0, 102, 0, 0.7)',    // Dark Green
                'rgba(102, 0, 102, 0.7)',  // Dark Purple
                'rgba(204, 102, 0, 0.7)',  // Dark Orange
              ],
              borderColor: [
                'rgba(51, 51, 51, 1)',
                'rgba(0, 102, 204, 1)',
                'rgba(128, 128, 0, 1)',
                'rgba(0, 102, 0, 1)',
                'rgba(102, 0, 102, 1)',
                'rgba(204, 102, 0, 1)',
              ],
            borderWidth: 1,
          },
        ],
        options: {
            plugins: {
              legend: {
                position: 'top',
              },
              tooltip: {
                backgroundColor: 'rgba(0,0,0,0.8)',
                displayColors: false,
                bodyFontColor: 'white',
              },
            },
            animation: {
              animateRotate: true,
              animateScale: true,
            },
            elements: {
              // Use 'arc' instead of 'ArcElement'
              arc: {
                borderWidth: 0, // Adjust border width
              },
            },
            },
      };
  return <Doughnut data={data} />;
}

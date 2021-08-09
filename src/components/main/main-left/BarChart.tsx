import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
          ],
          datasets: [
            {
              data: [
                0.1, 0.09, 0.2, 0.1, 0.1, 0.2, 0.08, 0.2, 0.2, 0.1, 0.3, 0.2,
                0.2, 0.3, 0.2, 0.1, 0.4, 0.3, 0.2, 0.09, 0.3,
              ],
              backgroundColor: 'rgba(21, 122, 255, .2)',
              hoverBackgroundColor: '#157AFF',
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              display: false,
              grid: {
                display: false,
              },
            },
            y: {
              display: false,
              grid: {
                display: false,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;

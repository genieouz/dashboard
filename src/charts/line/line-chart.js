import './line-chart.css';
import { Doughnut, Line } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
const moment = require('moment')
 
function LineChart({ data }) {
  const [labels, setLabels] = useState([]);
  const [values, setValues] = useState([]);
  useEffect(() => {
    setLabels([]);
    const labelsTmp = [];
    const valuesTmp = [];
    data?.rows?.map((row) => {
      const dateString = row[0].substring(0, 4) + '-'+ row[0].substring(4, 6) + '-' + row[0].substring(6, 8);
      const date = new Date(dateString);
      const label = moment(date).format('DD MMMM');
      labelsTmp.push(label);
      valuesTmp.push(parseInt(row[1]));
    });
    setLabels(labelsTmp);
    setValues(valuesTmp);
  }, [data]);
  const lineChartsOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }
  return (
    <div className="LineChart">
      
      <Line  data={{
    labels: labels,
    datasets: [
      {
        label: 'Nouveaux visiteurs',
        backgroundColor: '#FFEDBD',
        pointBackgroundColor: '#000000',
        data: values,
      },
    ]
}} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default LineChart;

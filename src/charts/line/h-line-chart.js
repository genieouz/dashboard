import { HorizontalBar } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import { randomColor } from '../../google-analytics.service';
const moment = require('moment')
 
function HLineChart({ data, total }) {
  const [diagramData, setDiagramData] = useState(null);
  useEffect(() => {
    const labels = [];
    const bgColors = [];
    const bdColors = [];
    const values = [];
    data?.rows?.map((row) => {
        labels.push(row.dimensions[0]);
        values.push(parseInt(row.metrics[0].values[0]));
        const { r, g, b } = randomColor();
        bgColors.push(`rgba(${r}, ${g}, ${b}, 0.2)`);
        bdColors.push(`rgba(${r}, ${g}, ${b}, 0.1)`)
    });
    const val = {
        labels: labels,
        datasets: [
          {
            label: data?.rows?.length+' pages les plus vues',
            data: values,
            backgroundColor: bgColors,
            borderColor: bdColors,
            borderWidth: 1,
          },
        ],
      }
    setDiagramData(val);
  }, [data]);
  const options = {
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
    <div className="HorizontalBarChart">
    {
    diagramData
    ?
      <HorizontalBar data={diagramData}  options={options} />
    :
    <></>
    }
    </div>
  );
}

export default HLineChart;

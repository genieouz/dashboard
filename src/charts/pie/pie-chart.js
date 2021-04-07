import './pie-chart.css';
import { Pie } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import { randomColor } from '../../google-analytics.service';
const moment = require('moment')
 
function PieChart({ data, total }) {
  const [diagramData, setDiagramData] = useState(null);
  useEffect(() => {
    const labels = [];
    const bgColors = [];
    const bdColors = [];
    const values = [];
    data?.rows?.map((row) => {
        labels.push(row.dimensions[0]);
        values.push((parseInt(row.metrics[0].values[0]) * 100 / parseInt(total)).toFixed(2));
        const { r, g, b } = randomColor();
        bgColors.push(`rgba(${r}, ${g}, ${b}, 0.2)`);
        bdColors.push(`rgba(${r}, ${g}, ${b}, 0.1)`)
    });
    const val = {
        labels: labels,
        datasets: [
          {
            label: 'Acquisition des utilisateurs',
            data: values,
            backgroundColor: bgColors,
            borderColor: bdColors,
            borderWidth: 1,
          },
        ],
      }
    setDiagramData(val);
  }, [data]);

  return (
    <div className="PieChart">
    {
    diagramData
    ?
      <Pie data={diagramData} />
    :
    <></>
    }
    </div>
  );
}

export default PieChart;

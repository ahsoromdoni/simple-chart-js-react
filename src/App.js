import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Doughnut from './component/chart/Doughnut';

let data = {
  labels: ['24 jun', '25 jun', '26 jun', '27 jun', '28 jun', '29 jun', '30 jun'],
  datasets: [{
    label: 'Net Sales',
    barPercentage: 0.5,
    barThickness: 6,
    maxBarThickness: 8,
    minBarLength: 2,
    data: [100, 200, 300, 600, 150, 150, 200, 500],
    backgroundColor: [
      'rgba(255, 99, 132, 0.0)',
      'rgba(54, 162, 235, 0.0)',
      'rgba(255, 206, 86, 0.0)',
      'rgba(75, 192, 192, 0.0)',
      'rgba(153, 102, 255, 0.0)',
      'rgba(255, 159, 64, 0.0)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
  }, {
    label: 'Profit',
    barPercentage: 0.5,
    barThickness: 6,
    maxBarThickness: 8,
    minBarLength: 2,
    data: [100, 400, 300, 400, 400, 150, 200, 500],
    backgroundColor: [
      'rgba(54, 162, 235, 0)',
      'rgba(255, 206, 86, 0)',
      'rgba(255, 99, 132, 0)',
      'rgba(75, 192, 192, 0)',
      'rgba(153, 102, 255, 0)',
      'rgba(255, 159, 64, 0)'
    ],
    borderColor: [
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(255, 99, 132, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
  }]
}

let options = {
  scales: {
    yAxes: [{
      stacked: true
    }]
  }
}


function App() {

  return (
    <div className="App">
      <Doughnut data={data} option={options} />
    </div>
  );
}

export default App;

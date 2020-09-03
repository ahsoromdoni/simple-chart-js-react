import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Doughnut from './component/chart/Doughnut';


//Anggap saja ini data yang sudah di tampung di usestate
let response = {
  "netSales": 15469,
  "totalTransaction": 29,
  "totalExpense": -70000,
  "profitAndLoss": {
    "netSales": 15469,
    "grossSales": 14800,
    "discount": 20,
    "serviceCharge": 0,
    "tax": 120,
    "rounding": 60,
    "voidTotal": 0,
    "costPrice": 5616,
    "totalIncome": 40000,
    "totalExpense": -70000,
    "result": 139224
  },
  "periode": {
    "netSalesPeriodes": [
      {
        "datePeriode": "2020-08-28",
        "netSales": 13609
      },
      {
        "datePeriode": "2020-08-31",
        "netSales": 600
      },
      {
        "datePeriode": "2020-09-01",
        "netSales": 1260
      }
    ],
    "totalExpensePeriodes": [
      {
        "datePeriode": "2020-08-28",
        "totalExpense": -20000
      },
      {
        "datePeriode": "2020-08-31",
        "totalExpense": 0
      },
      {
        "datePeriode": "2020-09-01",
        "totalExpense": -50000
      }
    ],
    "profitAndLossPeriodes": null
  }
}

let data = {
  //Pake function map untuk mendapatkan data yang sesuai keinginan kita
  //Penggunaan map bisa dilihat link dibawah ini
  //https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
  labels: response.periode.netSalesPeriodes.map((netSalesPeriode) => netSalesPeriode.datePeriode), //map
  usePointStyle: true,
  datasets: [{
    label: 'Net Sales',
    barPercentage: 0.5,
    barThickness: 6,
    maxBarThickness: 8,
    minBarLength: 2,
    data: response.periode.netSalesPeriodes.map((netSalesPeriode) => netSalesPeriode.netSales), //map
    backgroundColor: [
      'rgba(255, 99, 132, 0.0)',
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
    ],
  }, {
    label: 'Total Expense',
    barPercentage: 0.5,
    barThickness: 6,
    maxBarThickness: 8,
    minBarLength: 2,
    data: response.periode.totalExpensePeriodes.map((totalExpensePeriode) => totalExpensePeriode.totalExpense),//map
    backgroundColor: [
      'rgba(54, 162, 235, 0)',
    ],
    borderColor: [
      'rgba(54, 162, 235, 1)',
    ],
  }]
}

let options = {
  legend: {
    display: true,
    position: 'bottom',
    labels: {
      fontColor: '#333',
      usePointStyle: true
    }
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

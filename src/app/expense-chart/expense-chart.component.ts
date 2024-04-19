import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-expense-chart',
  templateUrl: './expense-chart.component.html',
  styleUrls: ['./expense-chart.component.scss'],
})
export class ExpenseChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const mixedChart: any = new Chart('ctx', {
      type: 'bar',
      data: {
        datasets: [
          {
            label: 'Spending-Last 7 days',
            data: [10, 30, 40, 30, 40, 50, 40],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
              'rgb(201, 203, 207)',
            ],
          },
        ],
        labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
      },
      options: {
        scales: {
          y: {
            display: false, // Hide the y-axis
          },
        },
      },
    });

    const labelIndexToHide = 2;

    if (mixedChart?.data?.datasets && mixedChart.data.datasets.length > 0) {
      const dataset = mixedChart.data.datasets[0];
      if (
        dataset.backgroundColor &&
        dataset.backgroundColor.length > labelIndexToHide
      ) {
        dataset.backgroundColor[labelIndexToHide] = 'transparent';
      }
      if (
        dataset.borderColor &&
        dataset.borderColor.length > labelIndexToHide
      ) {
        dataset.borderColor[labelIndexToHide] = 'transparent';
      }
    }

    mixedChart?.update();
  }
}

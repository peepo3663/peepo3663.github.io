import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-what-i-do-in-a-day',
    templateUrl: './what-i-do-in-a-day.component.html',
    styleUrls: ['./what-i-do-in-a-day.component.css']
})
export class WhatIDoInADayComponent implements OnInit {

    title = 'My favorite activities.'

    public chartDatasets: Array<any> = [
        {data: [80, 50, 30, 10, 20, 5], label: 'My activity in a day'}
    ];

    public chartLabels: Array<any> = ['Playing with dog', 'Programming', 'Reading tech news', 'Gaming', 'Traveling', 'Taking photo'];

    public chartColors: Array<any> = [
        {
            backgroundColor: ['#D69AB7', '#9AABD3', '#40BBC4', '#3DC08B', '#8FB943', '#DF9F22'],
            hoverBackgroundColor: ['#49e0ea', '#6aedde', '#80ffd5', '#37a7f7', '#67f17e'],
            borderWidth: 2,
        }
    ];

    chartOptions = {
      legend: {
        display: true
      },
      responsive: true,
      plugins: {
        datalabels: {
          formatter: (value, ctx) => {
              console.log(`Plug in works with formatter`)
            let sum = 0;
            let dataArr = ctx.chart.data.datasets[0].data;
            dataArr.map(data => {
              sum += data;
            });
            return (value * 100 / sum).toFixed(2) + "%";
          },
          color: '#36A2EB'
        }
      }}

    constructor() {
    }

    ngOnInit(): void {
    }

}

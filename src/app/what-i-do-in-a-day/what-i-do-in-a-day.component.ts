import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-i-do-in-a-day',
  templateUrl: './what-i-do-in-a-day.component.html',
  styleUrls: ['./what-i-do-in-a-day.component.css']
})
export class WhatIDoInADayComponent implements OnInit {

  public chartDatasets: Array<any> = [
    { data: [80, 50, 10, 20, 5, 25, 10], label: 'My activity in a day' }
  ];

  public chartLabels: Array<any> = ['Playing with dog', 'Coding', 'Gaming', 'Sleeping', 'Eating', 'Traveling', 'Taking photo'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#95EDF3', '#B6F6EF', '#D5FFF1', '#88CBFA', '#B5F8C0', '#9EEB8E', '#85DCBA'],
      hoverBackgroundColor: ['#49e0ea', '#6aedde', '#80ffd5', '#37a7f7', '#67f17e', '#60de46', '#43c995'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}

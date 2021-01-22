import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent implements OnInit {

  chartDatasets: Array<any> = [
    { data: [100, 100, 100, 95, 90, 85, 80, 80, 75, 75, 30, 0], label: 'Programming Languages' },
  ];

  languageDataSets: Array<any> = [
    { data: [90, 70, 60, 80], label: 'English'},
    { data: [100, 100, 80, 100], label: 'Thai'}
  ]

  languageLabels: Array<any> = ['Listening', 'Speaking', 'Writing', 'Reading']
  chartLabels: Array<any> = ['Java', 'Objective-C', 'Swift', 'Kotlin', 'Javascript', 'C#', 'Ruby', 'PHP', 'Python', 'SQL', 'GoLang'];
  webToolsLabels: Array<any> = ['Xcode', 'Android Studio', 'IntelliJ', 'nginx', 'Apache2', 'PHP 5', 'PHP 7', 'Laravel', 'node.js', 'npm', 'Express', 'Yeoman', 'Jade', 'Pug', 'Gulp', 'React', 'Angular', 'Ionic', 'Bootstrap', 'Digital Ocean', 'AWS', 'Heroku', 'EC2', 'ELB', 'mySQL', 'MongoDB', 'Firebase', 'Docker'];
  softSkills: Array<any> = ['Agile', 'Adaptability', 'Teamwork', 'Can-do attitude', 'Motivation', 'People Coaching', 'Fast learner', 'Easygoing', 'Growth mindset'];

  chartLanguageColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 250, 220, .2)',
      borderColor: 'rgba(0, 213, 132, .7)',
      borderWidth: 2,
    }
  ];

  chartColors: Array<any> = [
    {
      backgroundColor: [
        '#' + Math.floor(Math.random()*16777215).toString(16),
        '#' + Math.floor(Math.random()*16777215).toString(16),
        '#' + Math.floor(Math.random()*16777215).toString(16),
        '#' + Math.floor(Math.random()*16777215).toString(16),
        '#' + Math.floor(Math.random()*16777215).toString(16),
        '#' + Math.floor(Math.random()*16777215).toString(16),
        '#' + Math.floor(Math.random()*16777215).toString(16),
        '#' + Math.floor(Math.random()*16777215).toString(16),
        '#' + Math.floor(Math.random()*16777215).toString(16),
        '#' + Math.floor(Math.random()*16777215).toString(16)
      ]
    }
  ]

  public chartOptions: any = {
    responsive: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}

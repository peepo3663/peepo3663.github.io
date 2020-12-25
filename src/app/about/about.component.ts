import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title: string
  subtitle: string
  description: string

  constructor() { }

  ngOnInit(): void {
    this.title = 'Wasupol Tungsakultong'
    this.subtitle = 'I have a passion for technology and a Full-stack developer. (Mobile, Backend, Frontend Developer).'
  }

}

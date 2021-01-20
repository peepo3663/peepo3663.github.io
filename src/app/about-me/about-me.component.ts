import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  @Input() title: string
  @Input() subtitle: string
  @Input() facebookLink: string
  @Input() linkedinLink: string
  @Input() instagramLink: string
  @Input() githubLink: string
  @Input() age: number
  @Input() address: string
  @Input() email: string
  @Input() phone: string

  constructor() { }

  ngOnInit(): void {
  }

}

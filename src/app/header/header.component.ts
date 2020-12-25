import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myName: string
  myDesc: string
  myFacebook: string
  myInstagram: string
  myGithub: string
  myEmail: string

  constructor() { }

  ngOnInit(): void {
  }

}

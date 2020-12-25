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
    this.myName = "Wasupol Tungsakultong"
    this.myDesc = "I love technologies, programming, in addition, I know various of programming languages like JAVA, C#, Python, Ruby, Kotlin, Objective-C, Swift, and JavaScript"
    this.myFacebook = "https://www.facebook.com/PiPo.Wasupol"
    this.myInstagram = "https://www.instagram.com/peepo3663"
    this.myGithub = "https://github.com/peepo3663"
    this.myEmail = "peepo157@gmail.com"
  }

}

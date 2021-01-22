import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  myFacebook = "https://www.facebook.com/PiPo.Wasupol"
  myInstagram = "https://www.instagram.com/peepo3663"
  myGithub = "https://github.com/peepo3663"
  myEmail = "peepo157@gmail.com"

  constructor() { }

  ngOnInit(): void {
  }

}

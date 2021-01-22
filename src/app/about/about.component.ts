import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CustomImageEvent} from "angular-x-image-viewer";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title: string
  subtitle: string
  description: string
  facebookLink: string = 'https://www.facebook.com/PiPo.Wasupol'
  linkedin = 'https://www.linkedin.com/in/wasupol-tungsakultong-5b6b51a8'
  instagram = 'https://www.instagram.com/peepo3663'
  github = 'https://github.com/peepo3663'
  age = 29
  address = '262 Harvard St Apt 11, Cambridge, MA 02139'
  email = 'peepo157@gmail.com'
  phone = '+1 857 919 1438'

  imageClick: string

  constructor() {
  }

  ngOnInit(): void {
    this.title = 'Wasupol Tungsakultong'
    this.subtitle = 'Mobile Developer & Back End Developer & Front End Developer with 6 years of experience.'
  }

  onGalleryImageClick(image: string) {
    this.imageClick = image
  }

  handleExit(event: CustomImageEvent) {
    switch (event.name) {
      case 'exit':
        this.imageClick = null
        break
    }
  }
}

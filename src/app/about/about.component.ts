import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CustomImageEvent} from "angular-x-image-viewer";
import {ApiService} from "../api.service";
import {Info} from "../models/Info";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  info: Info

  imageClick: string
  loading = false
  error: any

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.apiService.getInfo().subscribe(next => {
      this.loading = false
      this.info = next
    }, error => {
      this.loading = false
      this.error = error
    })
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

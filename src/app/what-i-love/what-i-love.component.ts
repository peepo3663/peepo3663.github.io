import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-what-i-love',
  templateUrl: './what-i-love.component.html',
  styleUrls: ['./what-i-love.component.css']
})
export class WhatILoveComponent implements OnInit {

  title = 'My lifestyle'
  @Input() poppyPupaeImages: Array<string>
  @Output() image: EventEmitter<string>

  constructor() {
    this.poppyPupaeImages = new Array<any>()
    this.image = new EventEmitter<string>()
  }

  ngOnInit(): void {
  }

  onImageClick(image: string, index) {
    this.image.emit(image)
  }
}

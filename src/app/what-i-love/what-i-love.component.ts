import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-what-i-love',
  templateUrl: './what-i-love.component.html',
  styleUrls: ['./what-i-love.component.css']
})
export class WhatILoveComponent implements OnInit {

  poppyPupaeImages: Array<any>
  @Output() image: EventEmitter<string>

  constructor() {
    this.poppyPupaeImages = new Array<any>()
    this.image = new EventEmitter<string>()
  }

  ngOnInit(): void {
    this.poppyPupaeImages.push({
      image: "https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2FP1060816.JPG?alt=media&token=24307162-c7ac-43aa-9d44-d4f9c1d9a732",
    }, {
      image: "https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2FP1070015.jpg?alt=media&token=73e67d3a-fbe1-4279-8690-7731e165e898",
    }, {
      image: "https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2F20200918_192456.jpg?alt=media&token=e494fb32-2b9e-45d9-87eb-6290cf3e02d7",
    }, {
      image: "https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2F20200801_173222.jpg?alt=media&token=2db5182c-34c1-4391-9ff6-992567c36046",
    }, {
      image: "https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2F20200826_090417.jpg?alt=media&token=afe2cf50-551d-41ec-b0f7-b542203f1f9e",
    }, {
      image: "https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2F20200619_154219.jpg?alt=media&token=d45b7e27-b7e2-4f7d-9264-631fcfc65df7",
    }, {
      image: "https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2FIMG_20191014_162533.jpg?alt=media&token=d97ffae1-a921-45b1-b9b3-341712deb7d8",
    }, {
      image: "https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2FIMG_20191014_120714.jpg?alt=media&token=f51063ed-facf-4a90-9a69-36983b58a8a1",
    }, {
      image: "https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2F20200618_162029.jpg?alt=media&token=2ee16eef-3f0a-496a-a881-3095c2faa408",
    })
  }

  onImageClick(image: string, index) {
    this.image.emit(image)
  }
}

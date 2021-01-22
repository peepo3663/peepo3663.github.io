import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-what-i-love',
  templateUrl: './what-i-love.component.html',
  styleUrls: ['./what-i-love.component.css']
})
export class WhatILoveComponent implements OnInit {

  title = 'My lifestyle'
  poppyPupaeImages: Array<any>
  @Output() image: EventEmitter<string>

  constructor() {
    this.poppyPupaeImages = new Array<any>()
    this.image = new EventEmitter<string>()
  }

  ngOnInit(): void {
    this.poppyPupaeImages.push({
      image: "https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2F20200826_090417.jpg?alt=media&token=afe2cf50-551d-41ec-b0f7-b542203f1f9e"
    }, {
      image: "https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2FIMG_20191014_120714.jpg?alt=media&token=f51063ed-facf-4a90-9a69-36983b58a8a1"
    }, {
      image: "https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2F20200618_162029.jpg?alt=media&token=2ee16eef-3f0a-496a-a881-3095c2faa408"
    }, {
      image: 'https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2FIMG_0081.JPG?alt=media&token=e92d933b-65d2-4105-ac31-ab0f173bd3f1'
    }, {
      image: 'https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2FIMG_0086.JPG?alt=media&token=f21919c6-5c70-4d7c-9598-27cf6119db7d'
    },{
      image: 'https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2FIMG_0091.JPG?alt=media&token=8d65ae94-592d-40e2-8a28-3b5b99f9edab'
    }, {
      image: 'https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2FIMG_0084.JPG?alt=media&token=44fcce22-10a7-48f4-9454-454634554fd7'
    }, {
      image: "https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2F20200801_173222.jpg?alt=media&token=2db5182c-34c1-4391-9ff6-992567c36046"
    }, {
      image: 'https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2FIMG_20190520_151844.jpg?alt=media&token=3dbe780f-daee-4a4a-a116-8760fd11a542'
    }, {
      image: 'https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2FIMG_20190718_160041.jpg?alt=media&token=cd84f62f-4bc2-4d6b-b6e3-545bf2f99803'
    }, {
      image: 'https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2FIMG_20190716_101425.jpg?alt=media&token=0782ea5f-8da5-44cc-b5e3-228ad5c63ce0'
    }, {
      image: 'https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2FIMG_20190716_114315.jpg?alt=media&token=1be8d4d9-48e3-454d-9e42-f238a5ec87cf'
    }, {
      image: 'https://firebasestorage.googleapis.com/v0/b/wasupol-s-website.appspot.com/o/poppy_gallery%2F2019_0715_21501400.jpg?alt=media&token=77355043-ead2-4619-a67a-fcae0d7230ff'
    })
  }

  onImageClick(image: string, index) {
    this.image.emit(image)
  }
}

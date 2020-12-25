import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accomplishments',
  templateUrl: './accomplishments.component.html',
  styleUrls: ['./accomplishments.component.css']
})
export class AccomplishmentsComponent implements OnInit {

  title = 'A Few Accomplishments'
  subtitle = 'Here are my projects and accomplishments during my working experience.'
  accomplishments: Array<any>
  constructor() { }

  ngOnInit(): void {
    this.accomplishments = new Array<any>()
  }

}

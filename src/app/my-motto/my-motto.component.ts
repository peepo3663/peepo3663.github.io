import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-motto',
  templateUrl: './my-motto.component.html',
  styleUrls: ['./my-motto.component.css']
})
export class MyMottoComponent implements OnInit {

  title = 'My motto'
  @Input() motto: string

  constructor() { }

  ngOnInit(): void {
  }

}

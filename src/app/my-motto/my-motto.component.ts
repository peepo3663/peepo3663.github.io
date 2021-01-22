import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-motto',
  templateUrl: './my-motto.component.html',
  styleUrls: ['./my-motto.component.css']
})
export class MyMottoComponent implements OnInit {

  title = 'My motto'
  motto = 'The only things that keep me motivated are <b class="font-blue">technology</b>, <b class="font-red">my wife</b>, and <b class="font-yellow">my beloved dad.</b>'

  constructor() { }

  ngOnInit(): void {
  }

}

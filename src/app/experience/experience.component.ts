import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {Experience} from "../models/experience";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  workingExperience: Array<Experience>

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getExperiences().subscribe(response => {
      this.workingExperience = response
    })
  }

}

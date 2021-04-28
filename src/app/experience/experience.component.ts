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

  loading = false
  error: any

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loading = true
    this.apiService.getExperiences().subscribe(response => {
      this.loading = false
      this.workingExperience = response
    }, error =>  {
      this.loading = false
      this.error = error
    })
  }

}

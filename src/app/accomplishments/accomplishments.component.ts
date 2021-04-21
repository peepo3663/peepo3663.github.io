import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {Project} from "../models/project";

@Component({
    selector: 'app-accomplishments',
    templateUrl: './accomplishments.component.html',
    styleUrls: ['./accomplishments.component.css']
})
export class AccomplishmentsComponent implements OnInit {

    title = 'A Few Accomplishments'
    subtitle = 'Here are my projects and accomplishments during my working experience.'
    accomplishments: Array<Project>

    constructor(private apiService: ApiService) {
    }

    ngOnInit(): void {
        this.addProject()
    }

    private addProject() {
        this.apiService.getProjects().subscribe(next => {
            this.accomplishments = next
        }, error => {

        })
    }

}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {map} from "rxjs/operators";
import {Info} from "./models/Info";
import {Experience} from "./models/experience";
import {Project} from "./models/project";

const baseUrl = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private infoPath = `${baseUrl}/infos`
  private experiencesPath = `${baseUrl}/experiences`
  private projectsPath = `${baseUrl}/projects`

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get<Info>(this.infoPath).pipe(map(info => {
      return info
    }, error => {
      return error
    }))
  }

  getExperiences() {
    return this.http.get<Array<Experience>>(this.experiencesPath).pipe(map(experience => {
      return experience
    }, error => {
      return error
    }))
  }

  getProjects() {
    return this.http.get<Array<Project>>(this.projectsPath).pipe(map(projects => {
      return projects
    }, error => {
      return error
    }))
  }
}

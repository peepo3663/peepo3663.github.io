import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private api = 'https://mailthis.to/wasupol_pp'

  constructor(private http: HttpClient) { }

  postMessage(body: any): Observable<any> {
    return this.http.post(this.api, body, { responseType: "text" }).pipe(
        map(
            response => {
              if (response) {
                return response
              }
            },
            error => {
              return error
            }
        )
    )
  }
}

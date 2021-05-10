import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private _http: HttpClient) { }

  findBYId(id: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-key": "cc8748fa2cmsh836a565b0d7ead4p1b340cjsn2ce8ce189ee7",
		    "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
      })
    }
    return this._http.get("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/" + id, httpOptions);
  }
}

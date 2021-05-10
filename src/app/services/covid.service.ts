import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor( private _http: HttpClient ) { }

  public getAllStatistics(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-key" : "cc8748fa2cmsh836a565b0d7ead4p1b340cjsn2ce8ce189ee7",
        "x-rapidapi-host" : "covid-193.p.rapidapi.com"
      })
    }
    return this._http.get("https://covid-193.p.rapidapi.com/statistics", httpOptions);
  }

  public getStatistics(country: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-key" : "cc8748fa2cmsh836a565b0d7ead4p1b340cjsn2ce8ce189ee7",
        "x-rapidapi-host" : "covid-193.p.rapidapi.com"
      })
    }
    return this._http.get("https://covid-193.p.rapidapi.com/statistics?country=" + country, httpOptions);
  }

  public getAllCountriesNames(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-key" : "cc8748fa2cmsh836a565b0d7ead4p1b340cjsn2ce8ce189ee7",
        "x-rapidapi-host" : "covid-193.p.rapidapi.com"
      })
    }
    return this._http.get("https://covid-193.p.rapidapi.com/countries", httpOptions);
  }
  
}

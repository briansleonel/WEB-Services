import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Divisa } from '../models/conversor-moneda/divisa';

import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http'
import { Convert } from '../models/conversor-moneda/convert';

@Injectable({
  providedIn: 'root'
})
export class CotizacionDivisasService {

  divisa: Divisa;
  divisas: Array<Divisa>;

  constructor( private _http: HttpClient) {
    this.divisas = this.addDivisas();
    this.sortDivisas();
   }

  public getDivisas(): Array<Divisa> {
    return this.divisas;
  }

  public getConvert(convert: Convert): Observable<any> {
    let parametros = new HttpParams();
    const httpOptions = {
      
      headers: new HttpHeaders({
        "x-rapidapi-key" : "cc8748fa2cmsh836a565b0d7ead4p1b340cjsn2ce8ce189ee7",
        "x-rapidapi-host" : "community-neutrino-currency-conversion.p.rapidapi.com"
      }),
    }
    let body = {
      "to-type": convert['to-type'],
      "from-type": convert['from-type'],
      "from-value": convert['from-value']
    }
    //return this._http.get("https://community-neutrino-currency-conversion.p.rapidapi.com/convert", httpOptions);
    return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert", body, httpOptions)
  }

  sortDivisas(): void {
    let divs = new Array<Divisa>();
    let monedas = this.getMoneyName();
    
    monedas.forEach(element => {
      let d = new Divisa();
      d = this.divisas.filter( a => a.moneda === element)[0];
      divs.push(d);
    })
    this.divisas = divs;
  }

  /*
  sortDivisas(): Array<Divisa> {
    let divs = new Array<Divisa>();
    let monedas = this.getMoneyName();
    
    monedas.forEach(element => {
      let d = new Divisa();
      d = this.divisas.filter( a => a.moneda === element)[0];
      divs.push(d);
    })
    return divs;
  }
  */

  getMoneyName(): Array<string> {
    let monedas = new Array<string>();
    this.divisas.forEach(element => {
      monedas.push(element.moneda)
    })
     
    return monedas.sort();
  }

  addDivisas() {
    return [
      {
        "moneda": "Euro",
        "code": "EUR",
        "symbol": "???"
      },
      {
        "moneda": "D??lar estadounidense",
        "code": "USD",
        "symbol": "$"
      },
      {
        "moneda": "Libra esterlina",
        "code": "GBP",
        "symbol": "??"
      },
      {
        "moneda": "Yen japon??s",
        "code": "JPY",
        "symbol": "??"
      },
      {
        "moneda": "Real brasile??o",
        "code": "BRL",
        "symbol": "R$"
      },
      {
        "moneda": "Zloty polaco",
        "code": "PLN",
        "symbol": "??"
      },
      {
        "moneda": "Escudo caboverdiano",
        "code": "CVE",
        "symbol": "$"
      },
      {
        "moneda": "Peso argentino",
        "code": "ARS",
        "symbol": "$"
      },
      {
        "moneda": "Peso chileno",
        "code": "CLP",
        "symbol": "$"
      },
      {
        "moneda": "Peso colombiano",
        "code": "COP",
        "symbol": "$"
      },
      {
        "moneda": "Peso mexicano",
        "code": "MXN",
        "symbol": "$"
      },
      {
        "moneda": "Corona danesa",
        "code": "DKK",
        "symbol": "kr"
      },
      {
        "moneda": "D??lar canadiense",
        "code": "CAD",
        "symbol": "$"
      },
      {
        "moneda": "Rupia india",
        "code": "INR",
        "symbol": "R"
      },
      {
        "moneda": "Nuevos Soles Peruanos",
        "code": "PEN",
        "symbol": "S/."
      },
      {
        "moneda": "Franco Suizo",
        "code": "CHF",
        "symbol": "CHF"
      },
      {
        "moneda": "Lira Turca",
        "code": "TRY",
        "symbol": "???"
      },
      {
        "moneda": "Rublo ruso",
        "code": "RUB",
        "symbol": "R"
      },
      {
        "moneda": "Forinto h??ngaro",
        "code": "HUF",
        "symbol": "Ft"
      },
      {
        "moneda": "Kuna croata",
        "code": "HRK",
        "symbol": "Kn"
      },
      {
        "moneda": "D??lar australiano",
        "code": "AUD",
        "symbol": "$"
      },
      {
        "moneda": "Corona noruega",
        "code": "NOK",
        "symbol": "Kr"
      },
      {
        "moneda": "D??lar neozeland??s",
        "code": "NZD",
        "symbol": "NZ$"
      },
      {
        "moneda": "D??lar hongkon??s",
        "code": "HKD",
        "symbol": "HK$"
      },
      {
        "moneda": "Corona checa",
        "code": "CZK",
        "symbol": "K??"
      },
      {
        "moneda": "Dirham marroqu??",
        "code": "MAD",
        "symbol": "????????"
      },
      {
        "moneda": "D??lar de Singapur",
        "code": "SGD",
        "symbol": "S$"
      },
      {
        "moneda": "Rand sudafricano",
        "code": "ZAR",
        "symbol": "R"
      },
      {
        "moneda": "Nuevo shekel israel??",
        "code": "ILS",
        "symbol": "???"
      },
      {
        "moneda": "Yuan chino",
        "code": "CNY",
        "symbol": "??"
      },
      {
        "moneda": "Leu rumano",
        "code": "RON",
        "symbol": "leu"
      },
      {
        "moneda": "Lev B??lgaro",
        "code": "BGN",
        "symbol": "????"
      },
      {
        "moneda": "Corona sueca",
        "code": "SEK",
        "symbol": "kr"
      },
      {
        "moneda": "Corona islandesa",
        "code": "ISK",
        "symbol": "kr"
      },
      {
        "moneda": "D??rham de los Emiratos ??rabes Unidos",
        "code": "AED",
        "symbol": "DH"
      },
      {
        "moneda": "Riyal saud??",
        "code": "SAR",
        "symbol": "SR"
      }
    ];
  }

}

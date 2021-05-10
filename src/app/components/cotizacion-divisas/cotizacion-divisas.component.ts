import { Component, OnInit } from '@angular/core';
import { Convert } from 'src/app/models/conversor-moneda/convert';
import { Divisa } from 'src/app/models/conversor-moneda/divisa';
import { CotizacionDivisasService } from 'src/app/services/cotizacion-divisas.service';

@Component({
  selector: 'app-cotizacion-divisas',
  templateUrl: './cotizacion-divisas.component.html',
  styleUrls: ['./cotizacion-divisas.component.css']
})
export class CotizacionDivisasComponent implements OnInit {

  /*
    ARS - Pesos argentinos
    USD - Dolar estadounidense
    BOB - boliviano
    BRL - Real brasileño
    CLP - peso chileno
    COP - peso colombiano
    EUR - euro
  */

  convert: Convert;

  convertResult: Convert;

  divisas: Array<Divisa>;

  cotizacionDivisas: Array<string>;

  constructor(private cotizacionService: CotizacionDivisasService) {
    this.divisas = cotizacionService.getDivisas();
    this.cargarCotizaciones();
    this.convert = new Convert();
    this.convertResult = new Convert();
  }

  convertir(): void {
    this.cotizacionService.getConvert(this.convert).subscribe(
      (result) => {
        this.convertResult = new Convert();
        Object.assign(this.convertResult, result);
        this.convert = new Convert();
      },
      error => { alert("Error en la petición");}
    )
  }

  cargarCotizaciones(): void {
    this.convertArray.forEach(
      (result) => {
        this.cotizacionService.getConvert(result).subscribe(
          (r) => {
            Object.assign(result, r);
          }
        )
      }
    )
  }

  convertArray = [
    {
      valid: false,
      result: '0',
      "to-type": 'USD',
      "from-value": '1',
      "from-type": 'EUR',
      "result-float": 0
    },
    {
      valid: false,
      result: '1',
      "to-type": 'ARS',
      "from-value": '1',
      "from-type": 'EUR',
      "result-float": 0
    },
    {
      valid: false,
      result: '2',
      "to-type": 'EUR',
      "from-value": '1',
      "from-type": 'USD',
      "result-float": 0
    },
    {
      valid: false,
      result: '3',
      "to-type": 'ARS',
      "from-value": '1',
      "from-type": 'USD',
      "result-float": 0
    },
    {
      valid: false,
      result: '4',
      "to-type": 'EUR',
      "from-value": '1',
      "from-type": 'ARS',
      "result-float": 0
    },
    {
      valid: false,
      result: '5',
      "to-type": 'USD',
      "from-value": '1',
      "from-type": 'ARS',
      "result-float": 0
    },
  ]

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/models/covid/pais';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-estadisticas-covid',
  templateUrl: './estadisticas-covid.component.html',
  styleUrls: ['./estadisticas-covid.component.css']
})
export class EstadisticasCovidComponent implements OnInit {

  paises: Array<Pais>;
  pais: Pais;

  country: string;

  namePaises: Array<string>;

  confirmed;

  selected: {confirmed: boolean, recovered: boolean, deaths: boolean}
  selection: {confirmed: boolean, recovered: boolean, deaths: boolean}

  constructor( private covidService: CovidService) { 
    this.cargarEstadisticas();
    //console.log(this.paises)
    this.loadNameCountries();
    this.selected = {confirmed: true, recovered: true, deaths: true}
  }

  cargarEstadisticas(): void {
    this.covidService.getAllStatistics().subscribe(
      (result) => {
        this.paises = new Array<Pais>();  //inicializar el array
        console.log(result)
        result['response'].forEach(element => {
          this.pais = new Pais();
          Object.assign(this.pais, element);
          this.paises.push(this.pais);
        });
        console.log(this.paises);
        //this.loadNameCountries();
      },
      error => { alert("Error en la petición");}
    )
  }

  searchCountry(): void {
    this.initSearch();
    this.country = null;
    this.cargarSelection();
  }

  cargarSelection(): void {
    this.selection = this.selected;
    this.selected = {confirmed: true, recovered: true, deaths: true}
  }

  loadNameCountries(): void {
    this.covidService.getAllCountriesNames().subscribe(
      (result) => {
        this.namePaises = new Array<string>();  //inicializar el array
        console.log(result)
        result['response'].forEach(element => {
          this.namePaises.push(element);
        });
        console.log(this.namePaises)
        this.sortCountries();
      },
      error => { alert("Error en la petición");}
    )
  }

  initSearch(): void {
    this.covidService.getStatistics(this.country).subscribe(
      (result) => {
        this.paises = new Array<Pais>();  //inicializar el array
        console.log(result)
        result['response'].forEach(element => {
          this.pais = new Pais();
          Object.assign(this.pais, element);
          this.paises.push(this.pais);
        });
        console.log(this.paises);
        this.loadNameCountries();
      },
      error => { alert("Error en la petición");}
    )
  }

  sortCountries(): void {
    this.namePaises = this.namePaises.filter(pais => pais !== "All")
    this.namePaises.sort();
  }

  ngOnInit(): void {
  }

}

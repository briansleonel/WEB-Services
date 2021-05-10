import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Anuncio } from 'src/app/models/anuncios/anuncio';
import { Pelicula } from 'src/app/models/portal-peliculas/pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-portal-peliculas',
  templateUrl: './portal-peliculas.component.html',
  styleUrls: ['./portal-peliculas.component.css']
})
export class PortalPeliculasComponent implements OnInit {

  /*
    Tenet: tt6723592
    godzilla: tt3741700
    maze runner 1: tt1790864
    maze runner 2: tt4046784
    maze runner 3: tt4500922
    divergente:tt1840309
    avengers:
  */

  movieCodes: Array<string>;

  peliculas: Array<Pelicula>;
  pelicula: Pelicula;

  anuncios: Array<Anuncio>;

  constructor(private peliculaService: PeliculasService) {
    this.addCodes();
    this.addPeliculas();
    this.addAnuncios();
   }

  addCodes(): void {
    this.movieCodes = [
      "tt1790864",
      "tt4046784",
      "tt4500922",
      "tt6723592",
      "tt3741700",
      "tt1840309"
    ]
  }

  addPeliculas(): void {
    this.peliculas = new Array<Pelicula>();
    this.movieCodes.forEach(element => {
      this.peliculaService.findBYId(element).subscribe(
        (result) => {
          this.pelicula = new Pelicula();
          Object.assign(this.pelicula, result)
          this.peliculas.push(this.pelicula);
        }
      ),
      error => { alert("Error en la peticion"); }
    })
  }

  addAnuncios(): void {
    this.anuncios = [
      {
        title: "Descuento en computadoras",
        img: "descuento-computadoras.jpg"
      },
      {
        title: "Descuento en celulares",
        img: "descuento-celulares.png"
      },
      {
        title: "Descuento en tablets",
        img: "descuento-en-tablets-samsung.jpg"
      },
      {
        title: "Descuento en televisores",
        img: "descuento-televisores.png"
      }
    ]
  }

  ngOnInit(): void {
  }

}

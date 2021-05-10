import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TraductorComponent } from './components/traductor/traductor.component';
import { EstadisticasCovidComponent } from './components/estadisticas-covid/estadisticas-covid.component';
import { CotizacionDivisasComponent } from './components/cotizacion-divisas/cotizacion-divisas.component';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { PortalPeliculasComponent } from './components/portal-peliculas/portal-peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TraductorComponent,
    EstadisticasCovidComponent,
    CotizacionDivisasComponent,
    PortalPeliculasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

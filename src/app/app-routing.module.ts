import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizacionDivisasComponent } from './components/cotizacion-divisas/cotizacion-divisas.component';
import { EstadisticasCovidComponent } from './components/estadisticas-covid/estadisticas-covid.component';
import { HomeComponent } from './components/home/home.component';
import { PortalPeliculasComponent } from './components/portal-peliculas/portal-peliculas.component';
import { TraductorComponent } from './components/traductor/traductor.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'traductor', component: TraductorComponent},
  {path: 'estadisticas-covid', component: EstadisticasCovidComponent},
  {path: 'cotizacion-divisas', component: CotizacionDivisasComponent},
  {path: 'peliculas', component: PortalPeliculasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

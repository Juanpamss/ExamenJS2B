import {Routes} from "@angular/router";
import {NavegadorComponent} from "./navegador/navegador.component";
import {CarritoComponent} from "./carrito/carrito.component";
import {DesarrolladoraComponent} from "./desarrolladora/desarrolladora.component";
import {JuegoComponent} from "./juego/juego.component";

export const RUTAS_APP: Routes = [
  {
    path: 'home',
    component: NavegadorComponent,
  },
  {
    path: 'carrito',
    component: CarritoComponent,
  },

  {
    path: 'desarrolladora/:id/juego/:idJuego',
    component: JuegoComponent
  },
  {
    path: 'desarrolladora/:id',
    component: DesarrolladoraComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

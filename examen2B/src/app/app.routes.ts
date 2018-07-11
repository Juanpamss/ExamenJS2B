import {Routes} from "@angular/router";
import {NavegadorComponent} from "./navegador/navegador.component";
import {CarritoComponent} from "./carrito/carrito.component";
import {DesarrolladoraComponent} from "./desarrolladora/desarrolladora.component";

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
    path: 'desarrolladora/:id',
    component: DesarrolladoraComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

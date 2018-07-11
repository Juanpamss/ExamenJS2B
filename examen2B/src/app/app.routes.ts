import {Routes} from "@angular/router";
import {NavegadorComponent} from "./navegador/navegador.component";
import {CarritoComponent} from "./carrito/carrito.component";

export const RUTAS_APP: Routes = [
  {
    path: 'carrito',
    component: CarritoComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

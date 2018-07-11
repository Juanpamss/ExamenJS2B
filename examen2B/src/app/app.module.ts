import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavegadorComponent } from './navegador/navegador.component';
import {RUTAS_APP} from "./app.routes";
import {RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(

      RUTAS_APP, {useHash: true}

    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

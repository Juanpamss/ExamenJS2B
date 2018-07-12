import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavegadorComponent } from './navegador/navegador.component';
import {RUTAS_APP} from "./app.routes";
import {RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import {HttpClientModule} from "@angular/common/http";
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from "@angular/material";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { DesarrolladoraGeneralComponent } from './desarrolladora-general/desarrolladora-general.component';
import { JuegoDetalleComponent } from './juego-detalle/juego-detalle.component';
import { DesarrolladoraComponent } from './desarrolladora/desarrolladora.component';
import { DesarrolladoraDetalleComponent } from './desarrolladora-detalle/desarrolladora-detalle.component';
import { JuegoComponent } from './juego/juego.component';
import { JuegoDetalleExtendidoComponent } from './juego-detalle-extendido/juego-detalle-extendido.component';
import { NavegadorPrincipalComponent } from './navegador-principal/navegador-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    CarritoComponent,
    DesarrolladoraGeneralComponent,
    JuegoDetalleComponent,
    DesarrolladoraComponent,
    DesarrolladoraDetalleComponent,
    JuegoComponent,
    JuegoDetalleExtendidoComponent,
    NavegadorPrincipalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(

      RUTAS_APP, {useHash: true}

    ),
    HttpClientModule,
    MatBadgeModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

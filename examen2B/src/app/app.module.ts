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

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    CarritoComponent,
    DesarrolladoraGeneralComponent
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

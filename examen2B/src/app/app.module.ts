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
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from "@angular/forms";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material";
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipes.pipe';
import { ModalFacturaComponent } from './modal-factura/modal-factura.component';


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
    NavegadorPrincipalComponent,
    SearchPipe,
    ModalFacturaComponent
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
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

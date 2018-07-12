import { Component, OnInit } from '@angular/core';
import {ServicioDesarrolladorasService} from "../servicio-desarrolladoras.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  datosFactura = []

  listaCompra = []

  items: number

  constructor(private data: ServicioDesarrolladorasService, private httpClient: HttpClient) { }

  ngOnInit() {

    this.data.mensajeActual3.subscribe(mensaje => this.listaCompra = mensaje)

    this.data.mensajeActual4.subscribe(mensaje => this.datosFactura = mensaje)

    this.items = this.listaCompra.length

    console.log(this.datosFactura)

  }


}

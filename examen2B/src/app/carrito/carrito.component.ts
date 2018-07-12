import { Component, OnInit } from '@angular/core';
import {ServicioDesarrolladorasService} from "../servicio-desarrolladoras.service";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  listaCompra = []

  items: number

  constructor(private data: ServicioDesarrolladorasService) { }

  ngOnInit() {

    this.data.mensajeActual3.subscribe(mensaje => this.listaCompra = mensaje)

    this.items = this.listaCompra.length

  }


}

import { Component, OnInit } from '@angular/core';
import {ServicioDesarrolladorasService} from "../servicio-desarrolladoras.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  datosFactura : {nombre: string, apellido: string, direccion: string}

  listaCompra = []

  items: number

  total: number

  constructor(private data: ServicioDesarrolladorasService, private httpClient: HttpClient) { }

  ngOnInit() {

    this.data.mensajeActual3.subscribe(mensaje => this.listaCompra = mensaje)

    this.data.mensajeActual4.subscribe(mensaje => this.datosFactura = mensaje)

    this.items = this.listaCompra.length

    this.calcularTotal()

    //console.log(this.datosFactura)

  }

  eliminarItem(id){

    this.total -= parseFloat(this.listaCompra[id].precio)

    this.listaCompra.splice(id,1)

    this.mandarDatos();

  }

  mandarDatos(){

    this.data.cambiarMensaje3(this.listaCompra)

  }

  private calcularTotal() {
    this.total = this.listaCompra.reduce((acumulador, actual) => {
      acumulador += parseFloat(actual.precio);
      return acumulador;
    }, 0);
  }



}

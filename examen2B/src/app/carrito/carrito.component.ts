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

    this.ocultar()

  }

  eliminarItem(idArreglo, idJuego){

    this.total -= parseFloat(this.listaCompra[idArreglo].precio)

    this.listaCompra.splice(idArreglo,1)

    this.cambiarEstado(idJuego)

    this.ocultar();

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

  cambiarEstado(id){
    this.httpClient.put(`http://localhost:1337/juego/${id}`, {

      estado : true

    }).subscribe(
      res => {
        //console.log(res);
      }
    );
  }

  completarOrden(){

    for(let i=0; i<this.listaCompra.length; i++){

      this.cambiarEstado(this.listaCompra[i].id)

    }

    this.total = 0

    this.listaCompra = []

    this.mandarDatos();

  }

  ocultar(){

    if(this.listaCompra.length == 0){

      var mostrarListJuegos = <HTMLFormElement>document.getElementById('juegosComprar');
      mostrarListJuegos.style.display = "none";

    }

  }


}

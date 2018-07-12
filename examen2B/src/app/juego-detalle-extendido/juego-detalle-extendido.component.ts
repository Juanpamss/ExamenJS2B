import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {ServicioDesarrolladorasService} from "../servicio-desarrolladoras.service";

@Component({
  selector: 'app-juego-detalle-extendido',
  templateUrl: './juego-detalle-extendido.component.html',
  styleUrls: ['./juego-detalle-extendido.component.css']
})
export class JuegoDetalleExtendidoComponent implements OnInit {

  juegoDetalle: any

  arregloCarrito = []

  constructor(private httpClient: HttpClient, private _activatedRoute: ActivatedRoute, private data: ServicioDesarrolladorasService) {

    this._activatedRoute.params.subscribe(params =>{

      this.obtenerDatos(params['idJuego']);

    });

  }

  ngOnInit() {
  }

  obtenerDatos(id){
    this.httpClient.get(`http://localhost:1337/juego?id=${id}`)
      .subscribe(
        (data:any[]) => {

          this.juegoDetalle = data

          console.log(this.juegoDetalle)
        }

      )

  }

  mandarDatos(){

    this.arregloCarrito.push(this.juegoDetalle)

    this.data.cambiarMensaje3(this.arregloCarrito)
  }

}

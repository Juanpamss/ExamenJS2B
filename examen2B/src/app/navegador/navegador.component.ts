import { Component, OnInit } from '@angular/core';
import {RUTAS_APP} from "../app.routes";
import {HttpClient} from "@angular/common/http";
import {ServicioDesarrolladorasService} from "../servicio-desarrolladoras.service";

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css']
})
export class NavegadorComponent implements OnInit {

  buscar: string = ""

  respuestaServer = []

  constructor(private httpClient: HttpClient, private data: ServicioDesarrolladorasService){
  }

  ngOnInit() {

    this.data.mensajeActual.subscribe(mensaje => this.respuestaServer = mensaje)

  }

  mandarDatos(){

    this.data.cambiarMensaje(this.respuestaServer)
  }

  onNameKeyUp(event:any){

    this.buscar = event.target.value;

  }

  getProfile(){

    this.httpClient.get(`http://localhost:1337/desarrolladora?nombre=${this.buscar}`)
      .subscribe(
        (data:any[]) => {

          this.respuestaServer = data
          console.log(this.respuestaServer)
        }

      )

    this.mandarDatos()

  }

}

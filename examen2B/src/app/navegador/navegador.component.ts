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

  respuestaServerDesa = []

  respuestaServerJueg = []

  constructor(private httpClient: HttpClient,private httpClient2: HttpClient, private data: ServicioDesarrolladorasService){
  }

  ngOnInit() {

    this.data.mensajeActual.subscribe(mensaje => this.respuestaServerDesa = mensaje)

    this.data.mensajeActual2.subscribe(mensaje => this.respuestaServerJueg = mensaje)

  }

  onNameKeyUp(event:any){

    this.buscar = event.target.value;

  }

  getProfile(){

    this.httpClient.get(`http://localhost:1337/desarrolladora?nombre=${this.buscar}`)
      .subscribe(
        (data:any[]) => {

          this.respuestaServerDesa = data
          //console.log(this.respuestaServerDesa)
        }

      )

    this.httpClient2.get(`http://localhost:1337/juego?nombreJuego=${this.buscar}`)
      .subscribe(
        (data:any[]) => {

          this.respuestaServerJueg = data
          //console.log(this.respuestaServerJueg)
        }

      )

    this.mandarDatos()

  }
  mandarDatos(){

    this.data.cambiarMensaje(this.respuestaServerDesa)
    this.data.cambiarMensaje2(this.respuestaServerJueg)
  }


}

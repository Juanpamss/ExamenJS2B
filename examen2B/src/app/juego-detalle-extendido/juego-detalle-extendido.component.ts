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

  juegoDetalle = {
    nombreJuego: '',
    plataforma: '',
    fechaLanzamiento: '',
    precio: '',
    estado: '',
    imagenJuego: '',
    id: ''
  }

  estadoIni: any

  arregloCarrito = []

  constructor(private httpClient: HttpClient, private _activatedRoute: ActivatedRoute, private data: ServicioDesarrolladorasService) {

    this._activatedRoute.params.subscribe(params =>{

      this.obtenerDatos(params['idJuego']);

    });

  }

  ngOnInit() {

    this.data.mensajeActual3.subscribe(mensaje => this.arregloCarrito = mensaje)

    this.verEstado()

  }

  obtenerDatos(id){
    this.httpClient.get(`http://localhost:1337/juego?id=${id}`)
      .subscribe(
        (data:any[]) => {

          this.juegoDetalle = data[0]

          //Pasar funcion con parametro para probar

          this.estadoIni = this.juegoDetalle.estado

          console.log('ini',this.estadoIni)
        }

      )

  }

  agregarDatos(id) {

    this.cambiarEstado(id)

    this.verEstado()

    this.ocultarElementos()

    this.mandarDatos()

  }

  mandarDatos() {

    this.data.cambiarMensaje3(this.arregloCarrito)
  }

  cambiarEstado(id){
    this.httpClient.put(`http://localhost:1337/juego/${id}`, {

      estado : false

    }).subscribe(
      res => {
        //console.log(res);
      }
    );
  }

  ocultarElementos() {

    /*var mostrarLabelDesarrolladora = <HTMLFormElement>document.getElementById('tituloDesa');
    mostrarLabelDesarrolladora.style.display = "none";

    var mostrarLabelJuego = <HTMLFormElement>document.getElementById('tituloJuego');
    mostrarLabelJuego.style.display = "none";

    var mostrarJuegos = <HTMLFormElement>document.getElementById('disponible');
    mostrarJuegos.style.display = "none";

    var mostrarListJuegos = <HTMLFormElement>document.getElementById('listaJuegos');
    mostrarListJuegos.style.display = "none";*/

  }

  verEstado(){

    console.log('estado ', this.estadoIni)

    /*if(this.juegoDetalle.estado){

      var mostrarListJuegos = <HTMLFormElement>document.getElementById('botonAgregarCarrito');
      mostrarListJuegos.style.display = "block";
      var mostrarListJuegos = <HTMLFormElement>document.getElementById('noDisponible');
      mostrarListJuegos.style.display = "none";

    }else{

      var mostrarListJuegos = <HTMLFormElement>document.getElementById('botonAgregarCarrito');
      mostrarListJuegos.style.display = "none";
      var mostrarListJuegos = <HTMLFormElement>document.getElementById('noDisponible');
      mostrarListJuegos.style.display = "block";

    }*/

  }



}

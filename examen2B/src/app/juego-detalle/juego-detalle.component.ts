import {Component, Input, OnInit} from '@angular/core';
import {ServicioDesarrolladorasService} from "../servicio-desarrolladoras.service";

@Component({
  selector: 'app-juego-detalle',
  templateUrl: './juego-detalle.component.html',
  styleUrls: ['./juego-detalle.component.css']
})
export class JuegoDetalleComponent implements OnInit {

  @Input() resultadosJueg: any;


  constructor(private data: ServicioDesarrolladorasService) { }

  ngOnInit() {

    this.data.mensajeActual2.subscribe(mensaje => this.resultadosJueg = mensaje)

  }

  identificadorFK(id: any){
    if(isNaN(id)){
      return id.id

    }else{
      return id
    }
  }

  limpiarLista(){

    /*var mostrarListJuegos = <HTMLFormElement>document.getElementById('listaJuegos');
    mostrarListJuegos.style.display = "none";*/
  }




}

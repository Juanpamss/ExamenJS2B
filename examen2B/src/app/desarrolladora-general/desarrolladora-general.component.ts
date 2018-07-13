import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ServicioDesarrolladorasService} from "../servicio-desarrolladoras.service";

@Component({
  selector: 'app-desarrolladora-general',
  templateUrl: './desarrolladora-general.component.html',
  styleUrls: ['./desarrolladora-general.component.css'],
})
export class DesarrolladoraGeneralComponent implements OnInit{

  @Input() resultadosDesa: any;

  constructor(private data: ServicioDesarrolladorasService) { }

  ngOnInit() {

    this.data.mensajeActual.subscribe(mensaje => this.resultadosDesa = mensaje)

  }

  datosJuego(){

      this.data.cambiarMensaje2(this.resultadosDesa[0].juegos)

  }

}

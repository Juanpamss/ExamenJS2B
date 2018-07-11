import { Component, OnInit } from '@angular/core';
import {ServicioDesarrolladorasService} from "../servicio-desarrolladoras.service";

@Component({
  selector: 'app-desarrolladora-general',
  templateUrl: './desarrolladora-general.component.html',
  styleUrls: ['./desarrolladora-general.component.css']
})
export class DesarrolladoraGeneralComponent implements OnInit {

  resultados = []

  constructor(private data: ServicioDesarrolladorasService) { }

  ngOnInit() {

    this.data.mensajeActual.subscribe(mensaje => this.resultados = mensaje)
  }

}

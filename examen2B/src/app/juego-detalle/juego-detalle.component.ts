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

}

import { Component, OnInit } from '@angular/core';
import {ServicioDesarrolladorasService} from "../servicio-desarrolladoras.service";

@Component({
  selector: 'app-navegador-principal',
  templateUrl: './navegador-principal.component.html',
  styleUrls: ['./navegador-principal.component.css']
})
export class NavegadorPrincipalComponent implements OnInit {

  items: any

  constructor(private data: ServicioDesarrolladorasService) {

    this.data.mensajeActual3.subscribe(mensaje => this.items = mensaje)
  }

  ngOnInit() {
  }

}

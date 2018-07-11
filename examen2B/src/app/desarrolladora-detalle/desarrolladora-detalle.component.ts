import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-desarrolladora-detalle',
  templateUrl: './desarrolladora-detalle.component.html',
  styleUrls: ['./desarrolladora-detalle.component.css']
})
export class DesarrolladoraDetalleComponent implements OnInit {

  desarrolladoraDetalle: any

  constructor(private _activatedRoute: ActivatedRoute, private httpClient: HttpClient ) {

    this._activatedRoute.params.subscribe(params =>{

      this.obtenerDatos(params['id']);

    });

  }

  ngOnInit() {
  }

  obtenerDatos(id){
    this.httpClient.get(`http://localhost:1337/desarrolladora?id=${id}`)
      .subscribe(
        (data:any[]) => {

          this.desarrolladoraDetalle = data
          console.log(this.desarrolladoraDetalle)
        }

      )

  }

}

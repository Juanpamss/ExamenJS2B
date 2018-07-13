import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ServicioDesarrolladorasService} from "../servicio-desarrolladoras.service";

@Component({
  selector: 'app-modal-factura',
  templateUrl: './modal-factura.component.html',
  styleUrls: ['./modal-factura.component.css']
})
export class ModalFacturaComponent implements OnInit {

  formCabecera: FormGroup;

  datosFactura

  constructor(private data: ServicioDesarrolladorasService) {

    this.createForm();
    }

  ngOnInit() {

    this.data.mensajeActual4.subscribe(mensaje => this.datosFactura = mensaje)

  }

  private createForm() {
    this.formCabecera = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required)
    });
  }

  agregarDatos(formData) {

    this.datosFactura =
      {
        'nombre': formData.value.nombre,
        'apellido': formData.value.apellido,
        'direccion': formData.value.direccion
      }

    //console.log(this.datosFactura)

    this.resetForm()

    this.mandarDatos()

  }

  mandarDatos(){
    this.data.cambiarMensaje4(this.datosFactura)
  }

  resetForm() {

    var resetForm = <HTMLFormElement>document.getElementById('formCabecera');
    resetForm.reset();
  }

}

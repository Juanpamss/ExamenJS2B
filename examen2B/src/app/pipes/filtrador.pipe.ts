import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrador'
})
export class FiltradorPipe implements PipeTransform {

  transform(valor: any, termino: any): any {

    //Verificar si la busqueda es no definida
    if(termino === undefined){

      return valor;

    }else{

      return valor.filter(function(valor){

        return valor.name.toLowerCase().includes(termino.toLowerCase());

      })

    }

  }

}

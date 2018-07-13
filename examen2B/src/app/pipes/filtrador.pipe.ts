import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrador'
})
export class FiltradorPipe implements PipeTransform {

  transform(valor: any, term: any): any {

    //Verificar si la busqueda es no definida
    if(term === undefined){

      return valor;

    }else{

      return valor.filter(function(val){

        return val.name.toLowerCase().includes(term.toLowerCase());

      })

    }

  }

}

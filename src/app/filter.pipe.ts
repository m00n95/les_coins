import { Pipe, PipeTransform } from '@angular/core';
import { Icoins } from './Icoins';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:Icoins[], search:string) :Icoins[] 
  {
    return value.filter(term => term.name.toLowerCase().includes(search.toLowerCase()));
  }

}

import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {
  transform(products: Product[],)

}
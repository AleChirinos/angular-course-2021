import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let newDate = new Date(value)
    //this.value.slice(10,-9)
    return '07/09/2020';
  }

}
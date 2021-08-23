import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'toDate'
})
export class ToDatePipe implements PipeTransform {

  transform(value: string): Date {
    let newDate = new Date(value.slice(0,-10));
    return newDate;
  }

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component {

  name="alejandra"
  lastname="chirinos"

  constructor() { }

  test0(event){
    console.log('event click: ', event);
    console.log('DATA: ', this.name+ ' ' +this.lastname);
  }

}
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component {
  //Task 1: Crear 2 inputs uno llamado name y otro llamado lastnamede tipo string
  //Task 2: Mostrar estos datos de entrada al dar click en un boton concatenado con general data

  @Input() name: string;
  @Input() lastname: string;
  @Output() onSendData = new EventEmitter(null);

  myvar1 = 4;
  myvar2 = 5;

  constructor() {}

  onShowData() {
    this.onSendData.emit('General data: ' + this.name + ' ' + this.lastname);
  }

  test0(event){
    console.log('event click: ', event);
    console.log('SUMA: ', this.myvar1+this.myvar2);
  }

  test1(event){
    console.log('event blur: ', event);
  }

  test3(event){
    console.log('event double click: ', event);
  }
}

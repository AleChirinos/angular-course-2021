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

  constructor() {}

  onShowData() {
    this.onSendData.emit('General data: ' + this.name + ' ' + this.lastname);
  }
}

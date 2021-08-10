import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'alejandrachirinos',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component {
  @Input ('status') statusTest: string = 'working';

  @Output () onSendData = new EventEmitter(null)

  constructor() { }

  onClickTest(event:any){
    console.log('EVENT CLICK: ', event)

    this.onSendData.emit({
      name: 'alejandra',
      status: 'busy'
    });
  }

}
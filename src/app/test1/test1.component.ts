import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'alejandrachirinos',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component {
  @Input () status: string = 'working';
  
  constructor() { }

}
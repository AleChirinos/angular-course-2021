import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit, OnChanges, DoCheck, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {

  @Input() name2;

  name="alejandra";
  lastname="chirinos";

  constructor() {
    console.log('CONSTRUCTOR');
  }

  ngOnChanges(changes: any){
    console.log('ON CHANGES', changes);
  }

  ngOnInit(){
    console.log('ON INIT');
  }

  ngDoCheck(){
    console.log('DO CHECK');
  }

  ngOnDestroy(){
    console.log('ON DESTROY');
  }

  ngAfterContentInit(){
    console.log('AFTER CONTENT INIT');
  }

  ngAfterContentChecked(){
    console.log('AFTER CONTENT CHECK');
  }

  ngAfterViewInit(){
    console.log('AFTER VIEW INIT');
  }

  ngAfterViewChecked(){
    console.log('AFTER VIEW CHECK');
  }

  test0(event){
    console.log('DATA: ', this.name+ ' ' +this.lastname);
  }

}
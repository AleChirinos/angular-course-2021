import { Directive, EventEmitter, Input, Output, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngIfAlejandra]'
})
export class Directive2Directive {

  @Input() ngIfAlejandra:boolean = true;

  @Output() test = new EventEmitter<any>(null);

  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef) { 

  }

  ngOnChanges(changes:any){
    console.log('changes: ', changes.ngIfAlejandra.currentValue)
    this.setViewContainer(changes.ngIfAlejandra.currentValue);
  }

  setViewContainer(show:boolean){
    if(show){
      this.test.emit('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainerRef.clear();
    } 
  }

}
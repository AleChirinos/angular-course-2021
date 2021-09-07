import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaccinated-people',
  template:`
    <div style="float: left; margin: 10px; padding: 10px;" [style.background] = "vaccined ? 'green' : 'red'">
      <p>Name: {{name | uppercase}}</p>
      <p>Age: {{age}}</p>
      <p>Date: {{date | date: 'dd/MM/yyyy'}}</p>
      <p *ngIf=!vaccined > Disease: {{disease}}<p>
      <p *ngIf=!vaccined > Vaccine Type: {{vaccineType}}<p>
      <p>Vaccined: {{vaccined}}</p>
      <p *ngIf=!vaccined > Doses: {{doses}}<p>
      <ng-content></ng-content>
    </div>
  `
})
export class VaccinatedPeopleComponent implements OnInit {

  @Input() id;
  @Input() name;
  @Input() age;
  @Input() date;
  @Input() disease;
  @Input() vaccineType;
  @Input() vaccined;
  @Input() doses;

  constructor() { }

  ngOnInit() {
  }

}
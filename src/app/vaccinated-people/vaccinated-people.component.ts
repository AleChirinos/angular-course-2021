import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-vaccinated-people',
  template: `
  <div [style.background]=" vacunado ? 'green' : 'red'"
       style="float: left; margin: 10px; padding: 10px;">
	  <p>Name: {{name | uppercase}}</p>
    <p>Age: {{age}}</p>
    <p>Date: {{(date | toDate)|date: 'dd/MM/yyyy'}}</p>
    <p *ngIf="vacunado else myVarElse2">Vaccinated: YES </p>
    <p *ngIf="disease else myVarElse1">Disease: YES</p>
    <p>vaccineType: {{type}}</p>
    <p>Doses: {{doses}}</p>

    <br>
	  <button *ngIf="!vacunado" 
            (click)="onVacunar()"
            [disabled]="age <= 18"
            [disabled]="disease">
      Vacunar
    </button>
  </div>

  <ng-template #myVarElse1>Disease: NO<br></ng-template>
  <ng-template #myVarElse2>Vaccinated: NO<br></ng-template>
  `
})
export class VaccinatedPeopleComponent {

  @Input() name: string;
  @Input() age: number;
  @Input() date: string;
  @Input() vacunado: boolean;
  @Input() type: string;
  @Input() disease:boolean;
  @Input() doses:number;
  @Output() vacunar = new EventEmitter();

  constructor() {}

  onVacunar() {
    this.vacunar.emit();
  }

}
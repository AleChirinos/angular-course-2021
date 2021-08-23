import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-vaccinated-people',
  template: `
  <div [style.background]=" vacunado ? 'green' : 'red'"
       style="float: left; margin: 10px; padding: 10px;">
	  <p>Name: {{name | uppercase}}</p>
    <p>Age: {{age}}</p>
    <p>Date:{{date}} </p>
    <p *ngIf="vacunado else myVarElse2">Vaccinated: YES </p>
    <p>Tipo: {{color}}</p>
	  <p>Edad: {{edad}}</p>
	 
    <p *ngIf="disease else myVarElse1">Enfermedad: YES</p>
    <p>Dosis: {{doses}}</p>
    <br>
	  <button *ngIf="!vacunado" 
            (click)="onVacunar()"
            [disabled]="edad <= 18"
            [disabled]="disease">
      Vacunar
    </button>
  </div>

  <ng-template #myVarElse1>Enfermedad: NO<br></ng-template>
  <ng-template #myVarElse12>Vaccinated: NO<br></ng-template>
  `
})
export class VaccinatedPeopleComponent {

  @Input() name: string;
  @Input() age: number;
  @Input() date: string;
  @Input() color: string;
  @Input() disease:boolean;
  @Input() vacunado: boolean;
  @Input() doses:number;
  @Output() vacunar = new EventEmitter();

  constructor() {}

  onVacunar() {
    this.vacunar.emit();
  }

}
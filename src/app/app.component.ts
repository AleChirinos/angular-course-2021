import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allPets = [

    {name: "juan", age: 16, date: "2019-09-07T15:50+00Z", disease: true, type: "A", vacunado:0, doses: 0},   
    {name: "maria", age: 23, date: "2019-09-07T15:50+00Z", disease: false, type: "B", vacunado:1, doses: 2},   
    {name: "carla", age: 45, date: "2019-09-07T15:50+00Z", disease: true, type: "C", vacunado:0, doses: 0},   
    {name: "marco", age: 50, date: "2019-09-07T15:50+00Z", disease: false, type: "A", vacunado:1, doses: 1},   
    {name: "marta", age: 12, date: "2019-09-07T15:50+00Z", disease: false, type: "A", vacunado:0, doses: 0},   
    {name: "jorge", age: 36, date: "2019-09-07T15:50+00Z", disease: false, type: "C", vacunado:1, doses: 3},   
    {name: "maritza", age: 18, date: "2019-09-07T15:50+00Z", disease: false, type: "C", vacunado:0, doses: 0},   
    {name: "leonardo", age: 35, date: "2019-09-07T15:50+00Z", disease: true, type: "B", vacunado:0, doses: 0},   
    {name: "ramiro", age: 24, date: "2019-09-07T15:50+00Z", disease: false, type: "B", vacunado:1, doses: 2},   
    {name: "juana", age: 13, date: "2019-09-07T15:50+00Z", disease: false, type: "A", vacunado:0, doses: 0} 
  ];

  pets = {
    vacunados: this.allPets.filter(p => p.vacunado),
    novacunados: this.allPets.filter(p => !p.vacunado)
  };

  verifyAllVacunados() {
    const novacunados = this.pets.novacunados.filter(p => p.disease);
    return novacunados.length === 0;
  }

  vacunar(pet) {
    const index = this.pets.novacunados.findIndex(p => p === pet);
    pet.doses = pet.doses +1;
    if(pet.type === "A"){
      if(pet.doses  === 1){
        this.pets.novacunados.splice(index, 1);
        this.pets.vacunados.push({...pet, vacunado: true});
      }
    } else if(pet.type === "B"){
      if(pet.doses  === 2){
        this.pets.novacunados.splice(index, 1);
        this.pets.vacunados.push({...pet, vacunado: true});
      }
    } else if(pet.type === "C"){
      if(pet.doses  === 3){
        this.pets.novacunados.splice(index, 1);
        this.pets.vacunados.push({...pet, vacunado: true});
      }
    }
  }
}

import { Component } from '@angular/core';
import { VaccinedService } from './services/vaccined.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  vaccinated = [];
  unvaccinated=[];

  totalVaccinated = 0;
  totalUnvaccinated = 0;

  constructor(private vaccinedService : VaccinedService){
    this.vaccinedService.getAllVacc().subscribe(data => this.getDataVaccinatedPeople(data))
    this.vaccinedService.getAllUnvacc().subscribe(data => this.getDataUnvaccinatedPeople(data))
 }

 getDataVaccinatedPeople(data){
  this.vaccinated=Object.entries(data);
  console.log(this.vaccinated);
  this.checkTotalVaccinated()
 }

 getDataUnvaccinatedPeople(data){
  this.unvaccinated=Object.entries(data);
  console.log(this.unvaccinated);
  this.checkTotalUnvaccinated()
 }

 checkTotalVaccinated(){
   this.totalVaccinated=this.vaccinated.length
 }
 
 checkTotalUnvaccinated(){
  this.totalUnvaccinated=this.unvaccinated.length
}

 Vaccinate(id,name,age,date,disease,vaccined,doses, vaccineType){

  var actualDoses = doses+1
  this.vaccinedService.updateVac(id,actualDoses).subscribe(res => console.log(res))

  if(vaccineType === "A" && actualDoses ===1){
    this.vaccinedService.delete(id).subscribe(res => console.log(res))
    this.vaccinedService.create({
      "name": name, 
      "age": age, 
      "date": date, 
      "disease": disease, 
      "vaccineType": vaccineType, 
      "vaccined":1, 
      "doses": doses
    }).subscribe(res => console.log(res))
  }else if(vaccineType === "B"&& actualDoses ===2){
    this.vaccinedService.delete(id).subscribe(res => console.log(res))
    this.vaccinedService.create({
      "name": name, 
      "age": age, 
      "date": date, 
      "disease": disease, 
      "vaccineType": vaccineType, 
      "vaccined":1, 
      "doses": doses
    }).subscribe(res => console.log(res))
  }else if(vaccineType === "C"&& actualDoses ===3){
    this.vaccinedService.delete(id).subscribe(res => console.log(res))
    this.vaccinedService.create({
      "name": name, 
      "age": age, 
      "date": date, 
      "disease": disease, 
      "vaccineType": vaccineType, 
      "vaccined":1, 
      "doses": doses
    }).subscribe(res => console.log(res))
  }

  this.vaccinedService.getAllVacc().subscribe(data => this.getDataVaccinatedPeople(data))
  this.vaccinedService.getAllUnvacc().subscribe(data => this.getDataUnvaccinatedPeople(data))

  window.location.reload();
 }
}

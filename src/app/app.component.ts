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

  numVac = 0;
  numUnvac = 0;

  constructor(private fetcher : VaccinedService){
    this.fetcher.getAllVacc().subscribe(data => this.getDataVaccinatedPeople(data))
    this.fetcher.getAllUnvacc().subscribe(data => this.getDataUnvaccinatedPeople(data))
 }

 getDataVaccinatedPeople(data){
  this.vaccinated=Object.entries(data);
  console.log(this.vaccinated)
 }

 getDataUnvaccinatedPeople(data){
  this.unvaccinated=Object.entries(data);
  console.log(this.unvaccinated)
 }

 Vaccinate(id,name,age,date,disease,vaccined,doses, vaccineType){

  var actualDoses = doses+1
  this.fetcher.updateVac(id,actualDoses).subscribe(res => console.log(res))

  if(vaccineType === "A" && actualDoses ===1){
    this.fetcher.delete(id).subscribe(res => console.log(res))
    this.fetcher.create({
      "name": name, 
      "age": age, 
      "date": date, 
      "disease": disease, 
      "vaccineType": vaccineType, 
      "vaccined":1, 
      "doses": doses
    }).subscribe(res => console.log(res))
  }else if(vaccineType === "B"&& actualDoses ===2){
    this.fetcher.delete(id).subscribe(res => console.log(res))
    this.fetcher.create({
      "name": name, 
      "age": age, 
      "date": date, 
      "disease": disease, 
      "vaccineType": vaccineType, 
      "vaccined":1, 
      "doses": doses
    }).subscribe(res => console.log(res))
  }else if(vaccineType === "C"&& actualDoses ===3){
    this.fetcher.delete(id).subscribe(res => console.log(res))
    this.fetcher.create({
      "name": name, 
      "age": age, 
      "date": date, 
      "disease": disease, 
      "vaccineType": vaccineType, 
      "vaccined":1, 
      "doses": doses
    }).subscribe(res => console.log(res))
  }

  this.fetcher.getAllVacc().subscribe(data => this.getDataVaccinatedPeople(data))
  this.fetcher.getAllUnvacc().subscribe(data => this.getDataUnvaccinatedPeople(data))

  window.location.reload();
 }
}

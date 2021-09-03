import { Component, OnInit } from '@angular/core';
import {Test1Service} from "./services/test1.service";
import {SingletonService} from "./services/singleton.service";
import {PublicationService} from "./services/publication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private testService: Test1Service,
              private singletonService : SingletonService,
              private publicationService : PublicationService) {
    console.log(this.testService.getItem())

    this.singletonService.setMessage('HI FROM LOGIN');
  }

  ngOnInit() {
    this.publicationService.getAll()
      .subscribe(res => {
        console.log('RESPONSE: ', res);
      });
  }

  setMessage(){
    this.singletonService.setMessage('HI FROM LOGIN');
  }

  update() {


    this.publicationService.update('p001',{
      "date": "17/82/2021",
      "description": "update from frontend",
      "idUser": 2,
      "imageUrl": "http://fitebase/img.jpg",
      "userPhotoUrl": "http://fitebase/user1.jpg"
    } ).subscribe(
      res => console.log(res))
  }

  create(){

    this.publicationService.create({
      "date": "17/82/2021",
      "description": "soy nuevo",
      "idUser": 2,
      "imageUrl": "http://fitebase/img.jpg",
      "userPhotoUrl": "http://fitebase/user1.jpg"
    } ).subscribe(
      res => console.log(res))

  }

  delete(){
    this.publicationService.delete('p002').subscribe(
      res => console.log(res))
  }

}

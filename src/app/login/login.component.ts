import { Component, OnInit } from '@angular/core';
import {Test1Service} from "./services/test1.service";
import {SingletonService} from "./services/singleton.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private testService: Test1Service,
              private singletonService : SingletonService) {
    console.log(this.testService.getItem())

    this.singletonService.setMessage('HI FROM LOGIN');
  }

  ngOnInit() {
  }

  setMessage(){
    this.singletonService.setMessage('HI FROM LOGIN');
  }

}

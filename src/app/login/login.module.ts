import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import {NgbButtonsModule, NgbModule, NgbToastModule} from "@ng-bootstrap/ng-bootstrap";

const routes : Routes = [
  {
    path : '', component: LoginComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgbToastModule,
    NgbButtonsModule,
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
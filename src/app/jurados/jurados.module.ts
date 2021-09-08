import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Jurados1Component } from './jurados1/jurados1.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path: '', redirectTo: 'jurado1', pathMatch: 'full'
  },
  {
    path: 'jurado1', component: Jurados1Component
  }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    Jurados1Component
  ]
})
export class JuradosModule { }
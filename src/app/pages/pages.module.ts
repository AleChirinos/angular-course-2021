import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes : Routes = [
  {
    path : '', redirectTo : 'home', pathMatch: 'full'
  },
  {
    path : 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path : 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PagesComponent
  ]
})
export class PagesModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeRouteComponent } from './home-route.component';
import { HomeRoute1Component } from './home-route1/home-route1.component';
import { HomeRoute2Component } from './home-route2/home-route2.component';

const routes : Routes = [
  {
    path: '', redirectTo: 'homeM1', pathMatch: 'full'
  },
  {
    path: 'homeM', component: HomeRouteComponent,
      children: [
        {
          path: 'homeM1', component: HomeRoute1Component
        },
        {
          path: 'homeM2', component: HomeRoute2Component
        }
      ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeRouteComponent,
    HomeRoute1Component,
    HomeRoute2Component
  ]
})
export class HomeModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoute1Component } from './admin-route1/admin-route1.component';
import { AdminRoute2Component } from './admin-route2/admin-route2.component';
import { AdminRouteComponent } from './admin-route.component';

const routes : Routes = [
  {
    path: '', redirectTo: 'adminM1', pathMatch: 'full'
  },
  {
    path: 'adminM', component: AdminRouteComponent,
      children: [
        {
          path: 'adminM1', component: AdminRoute1Component
        },
        {
          path: 'adminM2', component: AdminRoute2Component
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
    AdminRoute1Component,
    AdminRoute2Component, 
    AdminRouteComponent
  ]
})
export class AdminModule { }
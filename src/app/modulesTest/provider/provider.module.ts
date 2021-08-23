import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Provider1Component } from 'src/app/modulesTest/provider/provider1/provider1.component';
import { Provider2Component } from 'src/app/modulesTest/provider/provider2/provider2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Provider1Component,
    Provider2Component
  ]
})
export class ProviderModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product1Component } from 'src/app/modulesTest/product/product1/product1.component';
import { Product2Component } from 'src/app/modulesTest/product/product2/product2.component';
import { SharedModule } from 'src/app/modulesTest/shared/shared.module';

@NgModule({
  imports: [
    CommonModule, 
    SharedModule
  ],
  declarations: [
    Product1Component,
    Product2Component
  ]
})
export class ProductModule { }
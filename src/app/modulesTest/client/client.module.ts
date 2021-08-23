import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Client1Component } from 'src/app/modulesTest/client/client1/client1.component';
import { Client2Component } from 'src/app/modulesTest/client/client2/client2.component';
import { SharedModule } from 'src/app/modulesTest/shared/shared.module';
import { ProviderModule } from 'src/app/modulesTest/provider/provider.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProviderModule
  ],
  declarations: [
    Client1Component,
    Client2Component
  ]
})
export class ClientModule { }
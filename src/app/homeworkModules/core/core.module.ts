import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../../homeworkModules/layout/layout.module';

import { HeaderComponent } from '../../homeworkModules/layout/header/header.component';
import { SidebarComponent } from '../../homeworkModules/layout/sidebar/sidebar.component';
import { Core1Component } from '../../homeworkModules/core/core1/core1.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
  ],
  declarations: [
    Core1Component,
    SidebarComponent,
    HeaderComponent
  ],
  exports: [
    Core1Component,
    SidebarComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
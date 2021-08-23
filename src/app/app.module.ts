import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDatePipe } from './to-date.pipe';
import { VaccinatedPeopleComponent } from './vaccinated-people/vaccinated-people.component';

@NgModule({
  declarations: [
    AppComponent,
    VaccinatedPeopleComponent,
    ToDatePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

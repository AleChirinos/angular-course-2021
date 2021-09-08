import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LugarComponent } from './lugar/lugar.component';

const routes: Routes = [
  {
    path:'', redirectTo: 'votacion', pathMatch: 'full'
  },
  {
    path: 'lugar', component: LugarComponent
  },
  {
    path: 'votacion', loadChildren: () => import('./votacion/votacion.module').then(m => m.VotacionModule)
  },
  {
    path: 'jurados', loadChildren: () => import('./jurados/jurados.module').then(m => m.JuradosModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LugarComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

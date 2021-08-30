import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes : Routes= [
  {
    path : '', redirectTo : 'login', pathMatch: 'full'
  },
  {
    path : 'login', loadChildren : () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path : 'pages', loadChildren : () => import('./pages/pages.module').then(m => m.PagesModule)
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

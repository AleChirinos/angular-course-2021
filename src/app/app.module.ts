import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminRouteComponent } from './admin-route/admin-route.component';
import { AdminRoute1Component } from './admin-route/admin-route1/admin-route1.component';
import { AdminRoute2Component } from './admin-route/admin-route2/admin-route2.component';

import { AppComponent } from './app.component';
import { Directive1Directive } from './directive1.directive';
import { Directive2Directive } from './directive2.directive';
import { HomeRouteComponent } from './home-route/home-route.component';
import { HomeRoute1Component } from './home-route/home-route1/home-route1.component';
import { HomeRoute2Component } from './home-route/home-route2/home-route2.component';
import { CoreModule } from './homeworkModules/core/core.module';
import { AdminModule } from './pages/admin/admin.module';
import { BuyModule } from './pages/buy/buy.module';
import { HomeModule } from './pages/home/home.module';
import { SharedModule } from './shared/shared.module';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { View1Component } from './view1/view1.component';
import { View1sub1Component } from './view1/view1sub1/view1sub1.component';
import { View1sub2Component } from './view1/view1sub2/view1sub2.component';
import { View2Component } from './view2/view2.component';

const routes : Routes= [
  {
    path: '', redirectTo: 'view1', pathMatch: 'full'
  },
  {
    path: 'view1', component: View1Component, children: [ 
      {
        path: '', redirectTo: 'view1sub1', pathMatch: 'full'
      },
      {
        path: 'view1sub1', component: View1sub1Component
      },
      {
        path: 'view1sub2', component: View1sub2Component
      }
    ]
  },
  {
    path: 'view2/:id/sub/:id2', component: View2Component
  },
  {
    path: 'view3', loadChildren: () => import('./view3/view3.module').then(m => m.View3Module)
  },
  {
    path: 'home', component: HomeRouteComponent, children: [ 
      {
        path: '', redirectTo: 'home1', pathMatch: 'full'
      },
      {
        path: 'home1', component: HomeRoute1Component
      },
      {
        path: 'home2', component: HomeRoute2Component
      }
    ]
  },
  {
    path: 'admin', component: AdminRouteComponent, children: [ 
      {
        path: '', redirectTo: 'admin1', pathMatch: 'full'
      },
      {
        path: 'admin1', component: AdminRoute1Component
      },
      {
        path: 'admin2', component: AdminRoute2Component
      }
    ]
  },
  {
    path: 'adminM', loadChildren: () => import('./admin-route/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'homeM', loadChildren: () => import('./home-route/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    Directive1Directive,
    Directive2Directive,
    View1Component,
    View2Component,
    View1sub1Component,
    View1sub2Component,
    HomeRouteComponent,
    HomeRoute1Component,
    HomeRoute2Component,
    AdminRouteComponent,
    AdminRoute1Component,
    AdminRoute2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    AdminModule,
    BuyModule,
    CoreModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

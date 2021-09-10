import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import { StoryComponent } from './components/story/story.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PostComponent } from './components/post/post.component';
import { MessageSenderComponent } from './components/message-sender/message-sender.component';
import { HeaderComponent } from './components/header/header.component';
import {PublicationService} from "../shared/services/publication.service";

const routes : Routes = [
  {
    path: '', component: HomeComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ],
  declarations: [
    HomeComponent,
    StoryComponent,
    SidebarComponent,
    PostComponent,
    MessageSenderComponent,
    HeaderComponent
  ],
  providers: [
  PublicationService
]
})
export class HomeModule { }

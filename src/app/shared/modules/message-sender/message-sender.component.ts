import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PostMessageComponent} from "./components/post-message/post-message.component";

@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html'
})
export class MessageSenderComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  onMessage(){
    this.matDialog.open(PostMessageComponent)
  }

}

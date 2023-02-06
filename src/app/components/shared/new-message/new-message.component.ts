import { MessagesService } from './../services/messages.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit{
  
  public listado : any;

  constructor(private messageService: MessagesService) {}

  ngOnInit(): void {
    
  }

  addMessage(message:any){
    this.messageService.postMessage(message);
  }

}

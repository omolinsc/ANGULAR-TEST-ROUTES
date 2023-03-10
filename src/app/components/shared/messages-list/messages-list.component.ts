import { MessagesService } from './../services/messages.service';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit{

  listado!: string[]

  constructor(private messageService: MessagesService) {}

  ngOnInit(): void {
    this.listado = [...this.messageService.getMessages()]
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messageList : string[];

  constructor() {
    this.messageList = ["Hola Pepito", "Qué tal estás?"];
   }

  getMessages() {
    return this.messageList
  }

  postMessage(message:string){
    this.messageList = [...this.messageList,message];
    console.log(this.messageList)
  }
}

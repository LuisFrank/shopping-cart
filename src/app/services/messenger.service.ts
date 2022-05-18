import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();
  subjectCart = new Subject();

  constructor() { }

  sendMessage(product:any){

    this.subject.next(product);
  }

  getMessage(){
    return this.subject.asObservable();
  }

  sendMessageDownCart(element:any){
    this.subjectCart.next();
  }

  getMessageDownCart(){
    return this.subjectCart.asObservable();
  }
}

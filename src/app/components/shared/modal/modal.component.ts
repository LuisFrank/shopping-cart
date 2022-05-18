import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Modal } from  'bootstrap';
import { Product } from 'src/app/models/product';
import { faCheckCircle as fasCheckCircle} from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle as farCheckCircle} from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  fasCheckCircle = fasCheckCircle;
  farCheckCircle = farCheckCircle
  product:any;
  @ViewChild("exampleModal") myModal!: ElementRef;
  

  constructor(private msg:MessengerService) { }

  ngOnInit(): void {
    this.handleSubscription();
  }

  handleSubscription(){
    this.msg.getMessage().subscribe((product:any) => { 
      console.log("open modal",product);    
      this.product = product

      var modal = Modal.getOrCreateInstance(this.myModal.nativeElement);
      console.log("modal",modal);
      modal?.show();
    });
  }

}

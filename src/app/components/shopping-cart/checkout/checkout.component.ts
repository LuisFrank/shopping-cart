import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Collapse } from 'bootstrap';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  @ViewChild("create_an_account") collapseAccount!: ElementRef;
  @ViewChild("ship_different_address") collapseShip!: ElementRef;
  

  constructor() { }

  ngOnInit(): void {
  }


  collapseCreateAccount(){
    var bsCollapse = Collapse.getOrCreateInstance(this.collapseAccount.nativeElement);
    bsCollapse.toggle();    
    // create_an_account
  }

  collapseShipAddress(){
    var bsCollapse = Collapse.getOrCreateInstance(this.collapseShip.nativeElement);
    bsCollapse.toggle();    
    // ship_different_address
  }

}

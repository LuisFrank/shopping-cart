import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Collapse } from 'bootstrap';
import { CartItem } from 'src/app/models/cart-item';
import { CartlocalstorageService } from 'src/app/services/cartlocalstorage.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  
  @ViewChild("collapseCreditCardContent") collapseCreditCardContent!: ElementRef;
  @ViewChild("collapseInternetBankingContent") collapseInternetBankingContent!: ElementRef;

  productsLS: CartItem[] = [];
  subtotal: number = 0;
  igvtotal: number = 0;
  total: number = 0;

  constructor(private cartLocalStorageService: CartlocalstorageService) { }

  ngOnInit(): void {
    this.loadCardItemsLocalStorage();
    this.calculateCartTotal();
  }

  loadCardItemsLocalStorage(){
    this.productsLS = this.cartLocalStorageService.getCartData();
    console.log("loadCardItemsLocalStorage",this.productsLS);
   }

  collapseCreditCard(){
    var bsCollapse = Collapse.getOrCreateInstance(this.collapseCreditCardContent.nativeElement);
    bsCollapse.toggle();    
    // create_an_account
  }

  collapseInternetBanking(){
    var bsCollapse = Collapse.getOrCreateInstance(this.collapseInternetBankingContent.nativeElement);
    bsCollapse.toggle();    
    // create_an_account
  }

  calculateCartTotal(){
    // Base = Total / (1 + 0.18)  o Base = Total / 1.18
    // IGV =  Total – Base
    this.subtotal = 0;
    this.total = 0;
    this.igvtotal = 0;
    this.productsLS.forEach((element:CartItem) => {
      element.subtotal = (element.quantity * element.price );
      element.igv =  element.subtotal - (element.subtotal/1.18);   //IGV incluido
      
      this.subtotal += element.subtotal;
      this.igvtotal += element.igv;
      this.total = this.subtotal;
    });

    this.igvtotal = Math.round(this.igvtotal *100) /100;

  }



}

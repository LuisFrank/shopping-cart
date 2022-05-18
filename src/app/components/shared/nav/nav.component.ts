import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { faHeart, faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { Collapse } from 'bootstrap';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isMenuCollapsed = true;
  myCollapsible:any;
  faHeart = faHeart;
  faSearch = faSearch;
  faShoppingBag = faShoppingBag;
  countCart = 0

  @ViewChild("navbarsExample10") collapse!: ElementRef;
  

  
  constructor(private msg:MessengerService, private cartService:CartService) { }

  ngOnInit(): void {
    this.counterCart();
    this.loadCartItems();
    this.counterDownCart();
  }

  displayMenu(event:any) {
   this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  counterCart(){
    this.msg.getMessage().subscribe((product:any) => { 
      console.log("subir count");
      this.countCart++;
    });
  }

  counterDownCart(){
    this.msg.getMessageDownCart().subscribe(() =>{
      this.countCart--;
    });
  }

  loadCartItems(){
    this.cartService.getCartItems().subscribe((items: CartItem[]) =>{
        items.forEach( a=> this.countCart+= a.quantity);
    })
  }  


  clickColapse(){ 
    var bsCollapse = Collapse.getOrCreateInstance(this.collapse.nativeElement);
    bsCollapse.toggle();    
  }




}

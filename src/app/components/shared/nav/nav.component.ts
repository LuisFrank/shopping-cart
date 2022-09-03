import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { faHeart, faSearch, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { Collapse } from 'bootstrap';
import { CartlocalstorageService } from 'src/app/services/cartlocalstorage.service';

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
  faUser = faUser;
  countCart = 0

  @ViewChild("navbarsExample10") collapse!: ElementRef;
  

  
  constructor(private msg:MessengerService, 
              private cartService:CartService,
              private cartLocalStorageService: CartlocalstorageService) { }

  ngOnInit(): void {
    this.counterCart();
    this.upDownCart();
    this.loadCartLocalStorage();
  }

  displayMenu(event:any) {
   this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  upDownCart(){
    this.msg.getMessageDownCart().subscribe((cartItem:any) => { 
      this.loadCartLocalStorage();
    });
  }

  counterCart(){
    this.msg.getMessage().subscribe((product:any) => { 
      this.loadCartLocalStorage();
    });
  }  

  loadCartItems(){
    this.cartService.getCartItems().subscribe((items: CartItem[]) =>{
        items.forEach( a=> this.countCart+= a.quantity);
    })
  }  

  loadCartLocalStorage(){
    this.countCart = 0;
    (this.cartLocalStorageService.getCartData() as CartItem[]).forEach( a => this.countCart+= a.quantity);
  }

  clickColapse(){ 
    var bsCollapse = Collapse.getOrCreateInstance(this.collapse.nativeElement);
    bsCollapse.toggle();    
  }




}

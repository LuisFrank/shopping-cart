import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartlocalstorageService } from 'src/app/services/cartlocalstorage.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {

  products: CartItem[] = [];
  productsLS: CartItem[] = [];
  subtotal: number = 0;
  total: number = 0;
  constructor(private cartService:CartService,
              private msg:MessengerService,
              private cartLocalStorageService:CartlocalstorageService) 
              {

               }

  ngOnInit(): void {
    // this.loadCartItems();
    this.loadCardItemsLocalStorage();
    this.calculateCartTotal();
  }

  loadCartItems(){
    this.cartService.getCartItems().subscribe((items: CartItem[]) =>{
      this.products = items;
      this.calculateCartTotal();
    })
  }
  
  loadCardItemsLocalStorage(){
   this.productsLS = this.cartLocalStorageService.getCartData();
   console.log("loadCardItemsLocalStorage",this.productsLS);
  }

  calculateCartTotal(){
    this.subtotal = 0;
    this.total = 0;
    if(this.productsLS?.length > 0){
      this.productsLS.forEach((element:any) => {
        element.subtotal = (element.quantity * element.price );
        this.subtotal +=  element.subtotal;
        this.total = this.subtotal;
      });
    }
  }

  removeItemFromCart(cartItem:any){
    console.log("remove click");
    // console.log("remvoe");
    this.cartService.removeProductToCart(cartItem).subscribe(() =>{
      console.log("remove carttt");     
      this.msg.sendMessageDownCart(cartItem);   
      this.loadCartItems();   
    })   
    return false;   
  }

  removeItemFromLocalStorate(cartItem:any){
    this.cartLocalStorageService.removeItem(cartItem);
    this.loadCardItemsLocalStorage();
    this.calculateCartTotal();
  }


  upQuantity(cartItem:any){
    console.log("upQuantity",cartItem);
    this.cartLocalStorageService.UpQuantity(cartItem);
    this.loadCardItemsLocalStorage();
    this.calculateCartTotal();
    this.msg.sendMessageDownCart(cartItem);  
  }

  downQuantity(cartItem:any){
    console.log("upQuantity",cartItem);
    if(cartItem.quantity > 0){
      this.cartLocalStorageService.DownQuantity(cartItem);
      this.loadCardItemsLocalStorage();
      this.calculateCartTotal();
      this.msg.sendMessageDownCart(cartItem); 
    }   
  }




}

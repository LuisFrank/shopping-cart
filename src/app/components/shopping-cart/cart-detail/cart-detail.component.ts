import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {

  products: CartItem[] = [];
  constructor(private cartService:CartService,private msg:MessengerService) { }

  ngOnInit(): void {
    this.loadCartItems()
  }

  loadCartItems(){
    this.cartService.getCartItems().subscribe((items: CartItem[]) =>{
      this.products = items;
      this.calculateCartTotal();
    })
  } 

  calculateCartTotal(){
    // this.cartTotal = 0;
    // this.cartItems.forEach((element:any) => {
    //   this.cartTotal+= (element.quantity * element.price );
    // });
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


  upQuantity(cartItem:any){
    

  }

  downQuantity(cartItem:any){

  }



}

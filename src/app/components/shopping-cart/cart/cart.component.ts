import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems:any = [
  ];

  cartTotal = 0;

  constructor(private msg:MessengerService,
              private cartService:CartService) { }

  ngOnInit(): void {   
    this.handleSubscription()
    this.loadCartItems()  
  }

  handleSubscription(){
    this.msg.getMessage().subscribe((product:any) => {     
      this.loadCartItems()
    });
  }

  loadCartItems(){
    this.cartService.getCartItems().subscribe((items: CartItem[]) =>{
      this.cartItems = items;
      this.calculateCartTotal();
    })
  } 

  calculateCartTotal(){
    this.cartTotal = 0;
    this.cartItems.forEach((element:any) => {
      this.cartTotal+= (element.quantity * element.price );
    });
  }

}

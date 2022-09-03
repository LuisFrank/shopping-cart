import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartlocalstorageService {

  placeholder:CartItem[] = [];
  cartItems = new BehaviorSubject([]);

  constructor() {
    const ls = this.getCartData();
    if(ls){
      this.cartItems.next(ls);
    }
   }

   addItem(product:Product){    

     const ls:CartItem[] = this.getCartData();
     var cartItem = new CartItem(0,product,0,0)
     var exist;
     if(ls){
      exist = ls.find((item:CartItem)=>{ 
        return item.productId === cartItem.productId;})
     }

     if(exist){
        exist.quantity++;
        this.setCartData(ls)      
     }else{
       if(ls){
        cartItem.quantity = 1;
        cartItem.order =  ls.length + 1;
        const newData = [...ls,cartItem];
        this.setCartData(newData);
       }else{
        cartItem.quantity = 1;
        cartItem.order = 1;
        this.placeholder.push(cartItem);
        this.setCartData(this.placeholder);       
       }
     }     
   }

   setCartData(data:any){
    localStorage.setItem('cart',JSON.stringify(data));
    this.cartItems.next(this.getCartData());
   }

   getCartData(){
     return JSON.parse(localStorage.getItem('cart')!);
   }

   UpQuantity(cartItem:CartItem){
    console.log("service - UpQuantity");
      const ls:CartItem[] = this.getCartData();
     
      var exist;
      if(ls){
        exist = ls.find((item:CartItem)=>{ 
          return item.productId === cartItem.productId;})
      }
      console.log("service - UpQuantity",exist);
      if(exist){
        exist.quantity++;
        this.setCartData(ls)      
     }  
   }

   DownQuantity(cartItem:CartItem){
    console.log("service - DownQuantity");
    const ls:CartItem[] = this.getCartData();

    var exist;
    if(ls){
      exist = ls.find((item:CartItem)=>{ 
        return item.productId === cartItem.productId;})
    }

    if(exist){
      exist.quantity--;
      this.setCartData(ls)      
    }

   }

   removeItem(cartItem:CartItem){
      console.log("removeItem",cartItem);
      const ls:CartItem[] = this.getCartData();
      if(ls){
        var new_list = ls.filter(prop => prop.productId !== cartItem.productId);  
        console.log("lista removida",new_list);
        this.setCartData(new_list);      
      }
   }
   


}

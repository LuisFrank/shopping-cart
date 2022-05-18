import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { cartURl, deleteCartUrl, updateCartURl,  } from '../config/api';
import { Product } from '../models/product';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {
    //TODO: Mapping the obtained result to our CartItem props(pipe() and map())
    return this.http.get<CartItem[]>(cartURl).pipe(
      map((result: any[]) => {
        
        let cartItems: CartItem[] = [];
          for(let item of result){
            let productExists = false;

              for (let i in cartItems) {
                if(cartItems[i].productId === item.product.id){
                  cartItems[i].quantity++;
                  productExists = true;
                  break;
                }    
              } 
          
              if(!productExists){
                cartItems.push( new CartItem(item.id,item.product));
                 
              }
          }
          return cartItems;
      })
    );
  }

  addProductToCart(product: Product): Observable<any>{
    return this.http.post(cartURl,{product});
  }

  removeProductToCart(cartItem: any): Observable<any>{
    return this.http.delete(deleteCartUrl + '/'+ cartItem.id)
  }

  upQuantity(cartItem: any): Observable<any>{   
    var replaceURl = updateCartURl.replace(':id',cartItem.id);
    console.log('replaceURl',replaceURl);
    return this.http.patch(replaceURl,{
      "quantity": cartItem.quantity
      });
  }

  downQuantity(cartItem:any): Observable<any>{
    var replaceURl = updateCartURl.replace(':id',cartItem.id);
    console.log('replaceURl',replaceURl);
    return this.http.patch(replaceURl,{
      "quantity": cartItem.quantity
      });
  }

  // getCartItemsDetail(): Observable<Product[]>{
  //   return this.http.get<Product[]>(cartURl);
  // }
}

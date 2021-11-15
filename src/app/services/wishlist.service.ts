import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { wishlistURL } from '../config/api';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { 

  }

  getWishList(){
    return this.http.get<number[]>(wishlistURL).pipe(
      map((result: any[]) => {
        let productIds:number[] = [];
        
        result.forEach(item => productIds.push(item.id))
        return productIds;
      })
    )
  }

  addToWishList(productId:any){
    return this.http.post(wishlistURL,{id: productId})

  }

  removeFromWishList(productId:any){
    return this.http.delete(wishlistURL+ '/' + productId)
  }
}

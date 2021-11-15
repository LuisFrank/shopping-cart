import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { faHeart as faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-regular-svg-icons';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  fasHeart = fasHeart;
  faHeart = faHeart;
  @Input()
  productItem!: Product;
  @Input()
  addedProductToList:boolean = false;
  constructor(private msg: MessengerService, 
              private cartService: CartService,
              private wishListService: WishlistService) { 

  }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addProductToCart(this.productItem).subscribe(() =>{
      this.msg.sendMessage(this.productItem);
    })
  
  }

  addTowishList(){
    this.wishListService.addToWishList(this.productItem.id).subscribe(() => {
      this.addedProductToList = true;
    })
  }

  removeFromWishList(){
    this.wishListService.removeFromWishList(this.productItem.id).subscribe(() =>{
      this.addedProductToList = false;
    
    })

  }

}

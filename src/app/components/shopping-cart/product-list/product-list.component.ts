import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  dropdownReference: boolean = false;
  productList: Product[] = [];
  wishList: number[] = [];
  constructor(private productService: ProductService,
              private wishListService: WishlistService) { }

  ngOnInit(): void {
   this.loadProducts();
   this.loadWishList();
  
  }

  loadProducts(){
    console.log("product", this.productService.geProducts());
    this.productService.geProducts().subscribe(products => {
        this.productList = products
    }
    );

  }

  loadWishList(){
    this.wishListService.getWishList().subscribe(productIds => {
      console.log("productIds", productIds);
      this.wishList = productIds
    })
  }

}

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

  sortProducts(criterion: string): void {
  switch (criterion) {
    case 'relevance':
      // podrías resetear a un orden por defecto si aplica
      this.productList = [...this.productList];
      this.dropdownReference = false;
      break;
    case 'nameAsc':
      this.productList.sort((a, b) => a.name.localeCompare(b.name));
         this.dropdownReference = false;
      break;
    case 'nameDesc':
      this.productList.sort((a, b) => b.name.localeCompare(a.name));
         this.dropdownReference = false;
      break;
    case 'priceAsc':
      this.productList.sort((a, b) => a.price - b.price);
         this.dropdownReference = false;
      break;
    case 'priceDesc':
      this.productList.sort((a, b) => b.price - a.price);
         this.dropdownReference = false;
      break;
  }
}

}

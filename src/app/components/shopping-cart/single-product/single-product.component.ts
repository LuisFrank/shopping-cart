import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { ProductService } from 'src/app/services/product.service';
import { Modal } from  'bootstrap';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  @ViewChild("exampleModal")  myModal!: ElementRef;

  product_id:any;
  product:Product = new Product();
  

  constructor(private activeRoute: ActivatedRoute,
    private msg: MessengerService, 
    private cartService: CartService,
    private productService:ProductService) {
    this.product_id = this.activeRoute.snapshot.params.id;
  
   }

  ngOnInit(): void {
    console.log("product_id",this.product_id);
    console.log("modal",this.myModal);
    this.getSingleProduct();
    // this.myModal = document.getElementById('#exampleModal');
    
  }

  getSingleProduct(){
    this.productService.getSingleProduct(this.product_id).subscribe(product => {
        this.product = product
        console.log("product",this.product);
      }
    );
  }

  addToCart(){
    // var modalToggle = document.getElementById('toggleMyModal')

    this.cartService.addProductToCart(this.product).subscribe(() =>{
      console.log("add carttt");
      this.msg.sendMessage(this.product);      
    })

    return false;
  }

}

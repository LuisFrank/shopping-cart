import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { ProductService } from 'src/app/services/product.service';
import { Modal } from  'bootstrap';
import { CartlocalstorageService } from 'src/app/services/cartlocalstorage.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  @ViewChild("exampleModal")  myModal!: ElementRef;
  @ViewChild('productImage') productImageRef!: ElementRef;

  product_id:any;
  product:Product = new Product();
  singleProductQuantity:number = 1;  

  constructor(private activeRoute: ActivatedRoute,
    private msg: MessengerService, 
    private cartService: CartService,
    private productService:ProductService,
    private cartLocalStorageService: CartlocalstorageService) {
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

         // Scroll al elemento de la imagen, con un pequeño timeout para asegurar render
        setTimeout(() => {
          if (this.productImageRef) {
            this.productImageRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    );
  }

  addToCart(){
    // var modalToggle = document.getElementById('toggleMyModal')

    // this.cartService.addProductToCart(this.product).subscribe(() =>{
    //   console.log("add carttt");
    //   this.msg.sendMessage(this.product);      
    // })
    // console.log("local storage antesss",this.cartLocalStorageService.getCartData());
  
    this.cartLocalStorageService.addItem(this.product,this.singleProductQuantity);
    this.msg.sendMessage(this.product);    
    console.log("local storage",this.cartLocalStorageService.getCartData());
    return false;
  }

  upQuantity(cartItem:any){
    console.log("upQuantity",cartItem);
    this.singleProductQuantity = this.singleProductQuantity + 1;
    // this.cartLocalStorageService.UpQuantity(cartItem);

    // this.loadCardItemsLocalStorage();
    // this.calculateCartTotal();
    
    // this.msg.sendMessageDownCart(cartItem);  
  }

  downQuantity(cartItem:any){
    console.log("upQuantity",cartItem);

    if(this.singleProductQuantity > 1){
          this.singleProductQuantity = this.singleProductQuantity - 1;
    }

    // if(cartItem.quantity > 0){
    //   this.cartLocalStorageService.DownQuantity(cartItem);

    //   // this.loadCardItemsLocalStorage();
    //   // this.calculateCartTotal();
      
    //   this.msg.sendMessageDownCart(cartItem); 
    // }   
  }

}

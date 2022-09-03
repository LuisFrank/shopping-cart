import { Product  } from "./product";

export class CartItem {
    id: number;
    productId: number;
    productName: string;
    quantity: number;
    price: number;
    subtotal: number = 0;
    igv: number = 0;
    imageURL: string;
    order: number;

    constructor(id:number, product: Product, quantity:number, order:number){
        this.id = id;
        this.productId = product.id;
        this.productName = product.name;
        this.quantity = quantity;
        this.price = product.price;
        this.imageURL = product.imageUrl;
        this.order = order;
    }
}

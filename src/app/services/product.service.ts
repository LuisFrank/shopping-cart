import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { productsURl, singleProductURl } from 'src/app/config/api';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  constructor(private http:HttpClient) { }

  geProducts(): Observable<Product[]>{
    //TODO: populate products from an API and return Observable
    return this.http.get<Product[]>(productsURl);

  }

  getSingleProduct(id_product:any): Observable<Product>{
    //TODO: populate products from an API and return Observable
    var replaceURl = singleProductURl.replace(':id',id_product);
    console.log('replaceURl',replaceURl);
    return this.http.get<Product>(replaceURl);
  }
}

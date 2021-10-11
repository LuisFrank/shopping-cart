import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { productsURl } from 'src/app/config/api';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  constructor(private http:HttpClient) { }

  geProducts(): Observable<Product[]>{
    //TODO: populate products from an API and return Observable
    return this.http.get<Product[]>(productsURl);

  }
}

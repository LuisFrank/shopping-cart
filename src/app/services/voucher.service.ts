import { Injectable } from '@angular/core';
import { Voucher } from '../models/voucher';

@Injectable({
  providedIn: 'root'
})
export class VoucherService {

  constructor() { }

  getVouchers():Voucher[]{   
            
          let departaments: Voucher[] = [];
                 
          departaments.push( new Voucher(1,"Boleta"));
          departaments.push( new Voucher(2,"Factura"));
                 
          return departaments;
  }
     
  
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Collapse } from 'bootstrap';
import { CartItem } from 'src/app/models/cart-item';
import { Departament } from 'src/app/models/departament';
import { District } from 'src/app/models/district';
import { IdentificationDocument } from 'src/app/models/identification-document';
import { Province } from 'src/app/models/province';
import { Voucher } from 'src/app/models/voucher';
import { CartlocalstorageService } from 'src/app/services/cartlocalstorage.service';
import { IdentificationDocumentService } from 'src/app/services/identification-document.service';
import { UbigeoService } from 'src/app/services/ubigeo.service';
import { VoucherService } from 'src/app/services/voucher.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  @ViewChild("create_an_account") collapseAccount!: ElementRef;
  @ViewChild("ship_different_address") collapseShip!: ElementRef;
  @ViewChild('mySelectDepartament') selectDepartment!: ElementRef;

  productsLS: CartItem[] = [];
  listaDepartamentos : Departament[] = [];
  listaProvincias : Province[] = [];
  listaDistritos : District[] = [];
  listaVoucher: Voucher[] = [];
  listaDocumentoIdentidad: IdentificationDocument[] = [];

  subtotal: number = 0;
  igvtotal: number = 0;
  total: number = 0;


  constructor(private ubigeoService: UbigeoService,
              private cartLocalStorageService: CartlocalstorageService,
              private voucherService: VoucherService,
              private identificationDocumentService: IdentificationDocumentService) 
  { 

  }

  ngOnInit(): void {
    this.getDepartaments();
    this.getIdentificationDocuments();
    this.getVouchers();
    this.loadCardItemsLocalStorage();    
    this.calculateCartTotal();
  }

  loadCardItemsLocalStorage(){
    this.productsLS = this.cartLocalStorageService.getCartData();
    console.log("loadCardItemsLocalStorage",this.productsLS);
   }

   getVouchers(){
    this.listaVoucher = this.voucherService.getVouchers();
   }

   getIdentificationDocuments(){
    this.listaDocumentoIdentidad = this.identificationDocumentService.getIdentificationDocuments();
   }


  collapseCreateAccount(){
    var bsCollapse = Collapse.getOrCreateInstance(this.collapseAccount.nativeElement);
    bsCollapse.toggle();    
    // create_an_account
  }

  collapseShipAddress(){
    var bsCollapse = Collapse.getOrCreateInstance(this.collapseShip.nativeElement);
    bsCollapse.toggle();    
    // ship_different_address
  }

  getDepartaments(){
    this.ubigeoService.getDepartaments().toPromise().then((data) => {     
            this.listaDepartamentos = data
        });
  }

  getProvinces(id_department:string){
    console.log("event",id_department);
    if(id_department != null && id_department != undefined || id_department != ""){
        this.ubigeoService.getProvinces(id_department).toPromise().then((data) => {     
          this.listaProvincias = data
          });
      }
    }

  getDistricts(id_province:string){
    console.log("event id_district",id_province);
    var id_department =  this.selectDepartment.nativeElement.value;
    console.log("getDistricts id_district",id_province);
    console.log("getDistricts id_department",id_department);

    if(id_province != null && id_province != undefined && id_province != "" &&
    id_department != null && id_department != undefined || id_department != ""){
        // var new_id_province = id_province.toString().slice(-2);
        this.ubigeoService.getDistritcs(id_department,id_province).toPromise().then((data) => {     
          this.listaDistritos = data
          });
      }
    }

    calculateCartTotal(){
      // Base = Total / (1 + 0.18)  o Base = Total / 1.18
      // IGV =  Total – Base

      this.subtotal = 0;
      this.total = 0;
      this.igvtotal = 0;
      this.productsLS.forEach((element:CartItem) => {
        element.subtotal = (element.quantity * element.price );
        element.igv =  element.subtotal - (element.subtotal/1.18);   //IGV incluido
        
        this.subtotal += element.subtotal;
        this.igvtotal += element.igv;
        this.total = this.subtotal;
      });

      this.igvtotal = Math.round(this.igvtotal *100) /100;

    }
  
   

}

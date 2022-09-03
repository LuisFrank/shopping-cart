import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Departament } from '../models/departament';
import { District } from '../models/district';
import { Province } from '../models/province';

@Injectable({
  providedIn: 'root'
})
export class UbigeoService {

  private urlDepartamentJson= "assets/ubigeo/departamentos.json"
  private urlProvincesJson= "assets/ubigeo/provincias.json"
  private urlDistrictsJson= "assets/ubigeo/distritos.json"

  constructor(private http:HttpClient) { }


  getDepartaments(){ 
      return this.http.get<Departament[]>(this.urlDepartamentJson).pipe(      
        map((result: any[]) => { 
          console.log("result departaments",result);       
            let departaments: Departament[] = [];
            for(let departamentJson of result){              
                departaments.push( new Departament(departamentJson.id,departamentJson.name));
            }          
            return departaments;
        })
      )    
  }

  getProvinces(department_id: string){    
     
      return this.http.get<Province[]>(this.urlProvincesJson).pipe(      
        map((result: any[]) => { 
          console.log("result pronvinces",result);       
            let provinces: Province[] = [];
            for(let provinceJson of result){   
                if(provinceJson.department_id == department_id){
                  provinces.push( new Province(provinceJson.id,provinceJson.name, provinceJson.department_id));
                }        
            }          
            return provinces;
        })
      )    
  }

  getDistritcs(department_id: string, province_id: string){    
   
    return this.http.get<District[]>(this.urlDistrictsJson).pipe(      
      map((result: any[]) => { 
          let distritcs: District[] = [];
          for(let districtJson of result){     
              if(districtJson.province_id == province_id && 
                districtJson.department_id == department_id){
                  distritcs.push( new District(districtJson.id,
                                              districtJson.name, 
                                              districtJson.department_id,
                                              districtJson.province_id));
              }        
          }          
          return distritcs;
      })
    )
  }
}

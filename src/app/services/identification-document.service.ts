import { Injectable } from '@angular/core';
import { IdentificationDocument } from '../models/identification-document';

@Injectable({
  providedIn: 'root'
})
export class IdentificationDocumentService {

  constructor() { }

  getIdentificationDocuments():IdentificationDocument[]{   
            
    let identificationDocumentList: IdentificationDocument[] = [];
           
    identificationDocumentList.push( new IdentificationDocument(1,"DNI"));
    identificationDocumentList.push( new IdentificationDocument(2,"Carnet de Extranjeria"));
           
    return identificationDocumentList;
}
}

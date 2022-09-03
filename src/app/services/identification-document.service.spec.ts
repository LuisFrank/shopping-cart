import { TestBed } from '@angular/core/testing';

import { IdentificationDocumentService } from './identification-document.service';

describe('IdentificationDocumentService', () => {
  let service: IdentificationDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdentificationDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

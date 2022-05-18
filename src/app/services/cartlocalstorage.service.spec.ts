import { TestBed } from '@angular/core/testing';

import { CartlocalstorageService } from './cartlocalstorage.service';

describe('CartlocalstorageService', () => {
  let service: CartlocalstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartlocalstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

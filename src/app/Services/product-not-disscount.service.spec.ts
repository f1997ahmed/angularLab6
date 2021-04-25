import { TestBed } from '@angular/core/testing';

import { ProductNotDisscountService } from './product-not-disscount.service';

describe('ProductNotDisscountService', () => {
  let service: ProductNotDisscountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductNotDisscountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

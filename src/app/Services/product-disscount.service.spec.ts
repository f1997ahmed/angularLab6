import { TestBed } from '@angular/core/testing';

import { ProductDisscountService } from './product-disscount.service';

describe('ProductDisscountService', () => {
  let service: ProductDisscountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDisscountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

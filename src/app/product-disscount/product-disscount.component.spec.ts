import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDisscountComponent } from './product-disscount.component';

describe('ProductDisscountComponent', () => {
  let component: ProductDisscountComponent;
  let fixture: ComponentFixture<ProductDisscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDisscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDisscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

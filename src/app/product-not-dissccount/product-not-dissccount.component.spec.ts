import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNotDissccountComponent } from './product-not-dissccount.component';

describe('ProductNotDissccountComponent', () => {
  let component: ProductNotDissccountComponent;
  let fixture: ComponentFixture<ProductNotDissccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductNotDissccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductNotDissccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

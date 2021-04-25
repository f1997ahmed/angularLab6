import { Component, OnInit } from '@angular/core';
import { ProductNotDisscountService } from '../Services/product-not-disscount.service';
import { IProducts } from '../Shared Classes and types/IProduct';

@Component({
  selector: 'app-product-not-dissccount',
  templateUrl: './product-not-dissccount.component.html',
  styleUrls: ['./product-not-dissccount.component.scss']
})
export class ProductNotDissccountComponent implements OnInit {
  ProductList:IProducts[]=[];
  constructor(private productNotDiscountService:ProductNotDisscountService) { }
  errorMsg="";

  ngOnInit(): void {
    //this.ProductList=this.productlistService.GetAllProducts();
    this.productNotDiscountService.GetAllProductNotDisscount().subscribe(
      productData=>
      {
        this.ProductList=productData;
      },
       errorResponse=>
      {
       this.errorMsg=errorResponse;
      } 
    )
  }
}
/////





import { Component, OnInit } from '@angular/core';
import { ProductDisscountService } from '../Services/product-disscount.service';
import { IProducts } from '../Shared Classes and types/IProduct';

@Component({
  selector: 'app-product-disscount',
  templateUrl: './product-disscount.component.html',
  styleUrls: ['./product-disscount.component.scss']
})
export class ProductDisscountComponent implements OnInit {
  ProductList:IProducts[]=[];
  constructor(private productDiscountService:ProductDisscountService) { }
  errorMsg="";

  ngOnInit(): void {
    //this.ProductList=this.productlistService.GetAllProducts();
    this.productDiscountService.GetAllProductDisscount().subscribe(
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

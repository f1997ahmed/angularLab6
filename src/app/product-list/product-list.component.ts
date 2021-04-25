import { Component, OnInit } from '@angular/core';
import { ProductlistService } from '../Services/productlist.service';

import { IProducts } from '../Shared Classes and types/IProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  ProductList:IProducts[]=[];
  constructor(private productlistService:ProductlistService) { }
  errorMsg="";

  ngOnInit(): void {
    //this.ProductList=this.productlistService.GetAllProducts();
    this.productlistService.GetAllProducts().subscribe(
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

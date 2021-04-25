import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import {IProducts} from './Shared Classes and types/IProduct';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'day1';
  @ViewChild(ProductsComponent) childprod: ProductsComponent;

  productId:IProducts;
  productIdVal: number;
  HiddenValue=false;
  /*
 CallRenderValue(){
this.childprod.RenderValue();
console.log("gggg");
//this.childprod.ngOnInit();
 }*/
}

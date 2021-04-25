import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsController } from '../APIs/ProductsController';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { IProducts } from '../Shared Classes and types/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  constructor(private http:HttpClient) { }
 fakurl='/assets/data/product.json';
  url= ProductsController. GetAllProducts;



  GetAllProducts():Observable<IProducts[]>
  {
   return this.http.get<IProducts[]>(this.url).pipe(catchError((err)=>{
     return throwError(err.message || "Internal Server Error Please contact site adminstarator")
   })
   )
  }
}

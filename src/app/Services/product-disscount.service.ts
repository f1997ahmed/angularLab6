import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DisscountController } from '../APIs/DisscountController';
import { IProducts } from '../Shared Classes and types/IProduct';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductDisscountService {

  constructor(private http:HttpClient) { }
  fakurl='/assets/data/ProductDisscount.json';
  url= DisscountController. GetAllProducts;

  GetAllProductDisscount():Observable<IProducts[]>
  {
   return this.http.get<IProducts[]>(this.url).pipe(catchError((err)=>{
     return throwError(err.message || "Internal Server Error Please contact site adminstarator")
   })
   )
  }
}

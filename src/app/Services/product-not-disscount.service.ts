import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { NoDisscountController } from '../APIs/NoDisscountController';
import { IProducts } from '../Shared Classes and types/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductNotDisscountService {

  constructor(private http:HttpClient) { }

  fakurl='/assets/data/ProductNoDisscount.json';
  url= NoDisscountController. GetAllProducts;

  GetAllProductNotDisscount():Observable<IProducts[]>
  {
   return this.http.get<IProducts[]>(this.url).pipe(catchError((err)=>{
     return throwError(err.message || "Internal Server Error Please contact site adminstarator")
   })
   )
  }
}
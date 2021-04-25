import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserController } from './APIs/UserController';
import { IUser } from './Shared Classes and types/IProduct';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  fakurl='/assets/data/Users.json';
  url= UserController. GetAllProducts;

  GetAllusers():Observable<IUser[]>
  {
   return this.http.get<IUser[]>(this.url).pipe(catchError((err)=>{
     return throwError(err.message || "Internal Server Error Please contact site adminstarator")
   })
   )
  }
}

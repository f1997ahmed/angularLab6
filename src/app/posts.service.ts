import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { PostController } from './APIs/PostController';
import { IPost } from './Shared Classes and types/IProduct';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }
  fakurl='/assets/data/Post.json';
  url= PostController. GetAllProducts;

  GetAllposts():Observable<IPost[]>
  {
   return this.http.get<IPost[]>(this.url).pipe(catchError((err)=>{
     return throwError(err.message || "Internal Server Error Please contact site adminstarator")
   })
   )
  }
}

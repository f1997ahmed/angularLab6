import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { IPost } from '../Shared Classes and types/IProduct';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  PostList:IPost[]=[];

  constructor(private postListService:PostsService) { }
  errorMsg='';

  ngOnInit(): void {
    this.postListService.GetAllposts().subscribe(
      data=>
      {
        this.PostList=data;
      },
      error=>
      {
       this.errorMsg=error;
      } 
    )
  
    console.log(this.PostList)

  }

}

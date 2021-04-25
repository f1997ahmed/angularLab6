import { Component, OnInit } from '@angular/core';
import { IUser } from '../Shared Classes and types/IProduct';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  UserList:IUser[]=[];

  constructor(private userListService:UsersService) { }
  errorMsg='';

  ngOnInit(): void {

    this.userListService.GetAllusers().subscribe(
      data=>
      {
        this.UserList=data;
      },
      error=>
      {
       this.errorMsg=error;
      } 
    )
  
    console.log(this.UserList)
  }

}

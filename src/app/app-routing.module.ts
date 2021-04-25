import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { PostsComponent } from './posts/posts.component';
import { ProductDisscountComponent } from './product-disscount/product-disscount.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductNotDissccountComponent } from './product-not-dissccount/product-not-dissccount.component';
import { RegisterComponent } from './register/register.component';

import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent,
  children:[
    {path:'Disscount',component:ProductDisscountComponent},
    {path:'NotDisscount',component:ProductNotDissccountComponent}
  ]},
  {path:'products',component:ProductListComponent
},
  {path:'posts',component:PostsComponent},
  {path:'register' , component:RegisterComponent},
  {path:'login' , component:LoginComponent},
  {path:'users',component:UsersComponent},
  {path:'**',component:PageNotFoundComponentComponent},
  /*{path:'product-disscount', component:ProductDisscountComponent},
  {path:'product-disscount/:id',component:ProductDisscountComponent},
  {path:'product-no-disscount', component:ProductNotDissccountComponent},
  {path:'product-no-disscount/:id',component:ProductNotDissccountComponent},*/
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

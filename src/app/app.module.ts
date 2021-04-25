import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import {HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDisscountComponent } from './product-disscount/product-disscount.component';
import { ProductNotDissccountComponent } from './product-not-dissccount/product-not-dissccount.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    PageNotFoundComponentComponent,
    ProductListComponent,
    ProductDisscountComponent,
    ProductNotDissccountComponent,
    LoginComponent,
    RegisterComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

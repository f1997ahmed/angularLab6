import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { ProductServiceService } from '../Services/product-service.service';
import { DiscountOffers ,IProducts,ICategory} from '../Shared Classes and types/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  Discount:DiscountOffers.Discount3=DiscountOffers.Discount3;
  //NoDiscount:DiscountOffers.Discount1=DiscountOffers.Discount1;
  NoDiscount:boolean=false;
 // NoDiscount:boolean=false;
 StoreName :string="dell";
 ClientName: String=" ";
 IsPurshased=true;
 StoreLogo:string="https://i.pinimg.com/236x/71/b3/e4/71b3e4159892bb319292ab3b76900930.jpg";
  ProductList:IProducts[]=[
  { ID: 1, Name: " Dell" , Quantity: 6 , Price:9990 , Img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzMMs2bbmUV31g50oYLpV3MbcsXXDECKm_hA&usqp=CAU"},
  { ID: 2, Name: "Lonovo" , Quantity: 8 , Price:8880 , Img:"2.jpg"},
  { ID: 3, Name: "HP" , Quantity: 5 , Price:10090 , Img:"3.jpg"},
  { ID: 4, Name: "Sony" , Quantity: 9 , Price:4290 , Img:"4.jpg"},
  { ID: 5, Name: "Redmi" , Quantity: 7 , Price:5480 , Img:"5.jpg"},
  { ID: 6, Name: "Samsung" , Quantity: 10 , Price:6590 , Img:"6.jpg"}
 ];
 CategoryList: ICategory[]=[


  { ID: 1, Name: "Laptob" },
  { ID: 2, Name: "Mopile" },
  { ID: 3, Name: "Heater" },
  { ID: 4, Name: "Tv" },
  { ID: 5, Name: "Fans" },
  { ID: 6, Name: "Fridges" }

 ];

 Products:IProducts[]=[];
  
 //constructor(private productService:ProductServiceService) { }
 constructor(private activatedRoute:ActivatedRoute,private router:Router){}
 
  ngOnInit(): void {
   // this.Products=this.productService.GetAllProducts();
  }
*

toggle(){
if(this.IsPurshased==true)
  this.IsPurshased=false;  
else if(this.IsPurshased==false)
  this.IsPurshased=true;

}

productId: any;
productIdVal:any;
HiddenValue=true;
  /*
 RenderValue(){
   console.log("hhhh");
  this.productId=this.productService.getProductByID(this.productIdVal);
   this.HiddenValue=false;

 }*/

 gotToDisscount()
 {
   this.router.navigate(['Disscount'],{relativeTo:this.activatedRoute})
 }

 gotToNotDisscount()
 {
   this.router.navigate(['NotDisscount'],{relativeTo:this.activatedRoute})

 }

 
}

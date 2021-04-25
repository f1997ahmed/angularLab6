

 export interface IProducts
{
    ID:number;
    Name:string;
    Quantity:number;
    Price :number;
    Img :string


}

export interface ICategory
{
    ID:number;
    Name:string;
 
}
export interface IPost{
    ID:number
    Title:string,  
    Body:string,
}
export interface IUser{
   
    Name:string,  
    UserName:string,
    Email:string
}
export enum DiscountOffers 
    {
     Discount1= "No Discount",
     Discount2= "10%",
     Discount3= "15"



    }
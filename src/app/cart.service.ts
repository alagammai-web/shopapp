import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  unique_array: any;
  grandTotal: any;
  cartitems: any = [];
  productlist = new BehaviorSubject([]);

  constructor() { }

  getCartProducts(){
   



 return this.productlist.asObservable();
  }

  // setCartProducts(prod: any){
  //   this.cartitems.push(...prod);
  //   this.productlist.next(prod);
  // }

  addtoCart(prod: any){
this.cartitems.push(prod);
this.unique_array = Array.from(new Set(this.cartitems))
this.productlist.next(this.unique_array);




// localStorage.setItem("arr", JSON.stringify());
// var retrievedData: any = localStorage.getItem("arr");
// var movies2 = JSON.parse(retrievedData);
// console.log(movies2);





this.getTotalPrice();
  }


  

  getTotalPrice(){
    this.grandTotal =0;
    this.cartitems.map((a: any)=>{
      this.grandTotal += a.total;
    })
  }


  removeCartItem(prod: any){
    // this.cartitems.map((a: any, index: any)=>{
    //   if(prod.id === a.id){
    //     this.cartitems.splice(index,1);
    //   }
    // })

    this.cartitems.splice(1,1);
alert("sdsdsd");
    // bhh
  }

 



}

import {
  Injectable
} from '@angular/core';
import {
  BehaviorSubject
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  unique_array: any;
  grandTotal: any;
  storedproducts: any;
  cartitems: any = [];
  productlist = new BehaviorSubject([]);
  queryResult: any;
  constructor() {}




  addtoCart(prod: any) {
     this.cartitems.push(prod);
     localStorage.setItem("arr", JSON.stringify(this.cartitems));
  //   this.unique_array = Array.from(new Set(this.cartitems))
  //   localStorage.setItem("arr", JSON.stringify(this.unique_array));
    this.productlist.next(this.cartitems);
    
  //  console.log('sdsd', this.cartitems.length);
  //  console.log('pushed products totally', this.unique_array);
  

  //   this.getTotalPrice();
  }


  getCartProducts() {
    return this.productlist.asObservable();
  }





  getTotalPrice() {
    this.grandTotal = 0;
    this.cartitems.map((a: any) => {
      this.grandTotal += a.total;
    })
  }


  removeCartItem(prod: any) {
    // this.cartitems.map((a: any, index: any)=>{
    // if(prod.id === a.id){
    // this.cartitems.splice(index,1);
    // }
    // })

    // this.cartitems.splice(1, 1);
    // alert("sdsdsd");
    // bhh

    // localStorage.removeItem(prod);
    // this.cartitems.map((a: any, index: any)=>{
    //   if(prod.id)
    //   this.cartitems.splice(index,1);
    // });
    // this.productlist.next(this.cartitems);
  }





}

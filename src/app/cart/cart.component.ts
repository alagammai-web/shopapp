import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  rdata: any =[];
  listitems: any =[];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.cartService.getCartProducts().subscribe((res: any)=>{
     
      this.listitems = res;


      // localStorage.setItem("arr", JSON.stringify(this.listitems));
      // var retrievedData: any = localStorage.getItem("arr");
      // var movies2 = JSON.parse(retrievedData);
      // console.log(movies2);

    //   localStorage.setItem("arr", JSON.stringify(this.listitems));
    //   var retrievedData: any = localStorage.getItem("arr");
    // this.rdata = JSON.parse(retrievedData);
   
      


    })

   
   
  }

  removeitem(item: any){
this.cartService.removeCartItem(item);
  }




}

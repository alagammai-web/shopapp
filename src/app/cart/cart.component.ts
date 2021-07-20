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
  values:  any = [];
  value2: any;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    // let products = [];
    // window.location.reload();
    this.values = localStorage.getItem('arr');
    this.value2 = JSON.parse(this.values);
    // this.value2.push(this.cartService.cartitems);
    // localStorage.setItem('arr', JSON.stringify(this.value2));
    // this.values = localStorage.getItem('arr');
    // this.value2 = JSON.parse(this.values);
    
    console.log('mm', this.value2)

  }

  removeitem(item: any){
// this.cartService.removeCartItem("arr");
  }
  



}

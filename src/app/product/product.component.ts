import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  productslist: any;
  constructor(private apiService: ApiService, private cartService: CartService) { }

  ngOnInit(): void {

    this.apiService.getProducts().subscribe((res)=>{
      this.productslist = res;

      this.productslist.forEach((a: any) => {
        Object.assign(a, {quantity: 1, total: a.price});
      });
          })

          

  }


  addtocart(items: any){
            this.cartService.addtoCart(items)
            // window.location.reload();
  }






  

}

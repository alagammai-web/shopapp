import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartvalue: number = 0;
  values:  any = [];
  value2: any;
  vv: any;
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {

  

    this.values = localStorage.getItem("arr");
    this.value2 = JSON.parse(this.values);
    this.cartvalue = this.value2.length;
    console.log('mm', this.value2);

    // this.cartService.getCartProducts().subscribe((res: any)=>{
    //   this.cartvalue =res.length;
    // })

  }

  cartpagerefresh(){
    this.router.navigate(['/cart'])
  .then(() => {
    window.location.reload();
  });
  }

}

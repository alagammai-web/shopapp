import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartvalue: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.cartService.getCartProducts().subscribe((res: any)=>{
      this.cartvalue =res.length;
    })

  }

}

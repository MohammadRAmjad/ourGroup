import { Component, OnInit} from '@angular/core';
// import { Product } from '../shared/product.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  visible:boolean = true;
  items = this.cartService.getItems();
  cartTotal = this.cartService.getCartTotal();

  constructor(private cartService: CartService) {};

  ngOnInit(): void {
    
  };

  
  removeFromCart(e:Event){
    console.log(e.target);
  }

  clearCart() {
    this.items = this.cartService.clearCart();
    this.cartTotal = 0;
    // console.log(this.items);
  }
}
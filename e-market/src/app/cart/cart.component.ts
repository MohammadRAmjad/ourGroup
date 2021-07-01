import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartTotal:number = 0;
   cartProducts: Product[] = [];
  constructor(private cartService: CartService) { 
    
  }

  ngOnInit(): void {
    this.cartProducts =this.cartService.getCartProducts();
    console.log(this.cartService.getCartProducts());
  }

  addToCart(prod:Product){
    this.cartProducts.push(prod);
    this.cartTotal = this.cartTotal + prod.price;
  }

}

import { Component, OnInit } from '@angular/core';
// import { Product } from '../shared/product.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  cartTotal = this.cartService.getCartTotal();

  constructor(private cartService: CartService) {};

  ngOnInit(): void {};
}
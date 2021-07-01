import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  product!: Product;
  liked: boolean = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onAdd() {
    console.log("Add " + this.product.title + " to cart!");
    // add to cart
    this.cartService.addToCart(this.product);
    this.cartService.addToCartTotal(this.product.price);
    this.product.quantity=1;
  }

  toggleLike() {
    this.liked = !this.liked;
    console.log(this.liked);
  }
}
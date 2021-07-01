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
  liked:boolean = false;
  
  // private cartService: CartService;
  constructor(private cartService: CartService) { 
    
  }

  ngOnInit(): void {
  }

  onAdd(){
    console.log("Add "+ this.product.title +" to cart!");
    // add to cart
    this.cartService.addProductToCart(this.product);
  }

  toggleLike(){
    this.liked = !this.liked;
  }
}

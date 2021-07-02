import { Component, OnChanges, OnInit} from '@angular/core';
// import { Product } from '../shared/product.model';
import { CartService } from './cart.service';
import { CartItem } from '../shared/cartItem.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnChanges {
  visible:boolean = true;
  items = this.cartService.getItems();
  cartTotal = this.cartService.totalCost;

  constructor(private cartService: CartService) {};

  ngOnInit(): void {
    
  };

  ngOnChanges():void {
    console.log("hi");
  };

  $onChanges(){
    console.log('hi')
  }
  

  getCartTotal(){
   
  }
  
  removeFromCart(e:Event){
    console.log(e.target);
  }

  clearCart() {
    this.items = this.cartService.clearCart();
    this.cartTotal = 0;
    // console.log(this.items);
  }

  addQuantity(e:CartItem){
    e.quantity+=1
    console.log(e.quantity);
  }

  subtractQuantity(e:CartItem){
    e.quantity -=1
    console.log(e.quantity);
  }
}
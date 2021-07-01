import { Component, OnChanges, OnInit} from '@angular/core';
// import { Product } from '../shared/product.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnChanges {
  visible:boolean = true;
  items = this.cartService.getItems();
  cartTotal = this.cartService.getCartTotal();

  constructor(private cartService: CartService) {};

  ngOnInit(): void {
    this.cartTotal = this.cartService.getCartTotal();
    // this.cartService.getItems().subscribe((data:[])=>{
    //   console.log(data);
    //   this.items.forEach(i=>{
    //     this.cartTotal=this.cartTotal + i.price;
    //     console.log("hopefully this is the total: " + this.cartTotal);
    //   })
    // })
  };

  ngOnChanges():void {
    console.log("hi");
  };

  $onChanges(){
    console.log('hi')
  }
  

  getCartTotal(){
    // this.cartTotal = this.cartService.getCartTotal();
    // return this.cartService.getCartTotal();
  }
  
  removeFromCart(e:Event){
    console.log(e.target);
  }

  clearCart() {
    this.items = this.cartService.clearCart();
    this.cartTotal = 0;
    // console.log(this.items);
  }

  addQuantity(e:Event){
    console.log(e);
  }

  subtractQuantity(e:Event){
    console.log(e);
  }
}
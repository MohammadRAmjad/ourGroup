import { Component, OnChanges, OnInit} from '@angular/core';
import { Product } from '../shared/product.model';
import { CartService } from './cart.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  //styleUrls: ['./cart.component.css']
})
export class CartComponent  {
  //visible:boolean = true;
  //items = this.cartService.getItems();
 // cartTotal = this.cartService.totalCost;

  items = []
  totalCost = 0

  constructor(private cartService: CartService) {};

  ngOnInit(){
    // this.cartService.getItems().subscribe((data:[])=>{
    //     this.items = data
    //     let total = 0
    //     this.items.forEach(i=> {
    //         total+=i.price
    //     })
    //     this.totalCost = total
    // })
}

  

  // getCartTotal(){
   
  // }
  
  removeFromCart(id:number): void {
    this.cartService.removeItem(id);
  }
  // removeFromCart(e:Event){
  //   console.log(e.target);
  // }

  clearCart() {
    this.items = this.cartService.clearCart();
    this.totalCost = 0;
    // console.log(this.items);
  }

  // addQuantity(e:CartItem){
  //   e.quantity+=1
  //   console.log(e.quantity);
  // }

  // subtractQuantity(e:CartItem){
  //   e.quantity -=1
  //   console.log(e.quantity);
  // }
}
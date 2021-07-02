import { Component, OnChanges, OnInit} from '@angular/core';
import { Product } from '../shared/product.model';
import { CartItem } from "../shared/cartItem.model";
import { CartService } from './cart.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  //styleUrls: ['./cart.component.css']
})
export class CartComponent  {

  items: CartItem[]= []
  totalCost = 0

  constructor(private cartService: CartService) {};

  ngOnInit(){
    this.cartService.getItems().subscribe((data:[])=>{
        this.items = data
        let total = 0
        this.items.forEach(i=> {
            total+=i.item.price
            console.log("Item name: " + i.item.title)
            console.log("Item quantity: " + i.quantity)

        })
        this.totalCost = total
        console.log(this.items.length)
       
    })
}
  ngOnChanges():void {
    console.log("hi");
  };

  $onChanges(){
    console.log('hi')
  }
  

  // getCartTotal(){
   
  // }
  
  removeFromCart(e:Event){
    console.log(e.target);
  }

  clearCart() {
    this.items = [];
    this.totalCost = 0;
    // console.log(this.items);
  }

  addQuantity(e){
    e.quantity+=1
    console.log(e.quantity);
  }

  subtractQuantity(e){
    e.quantity -=1
    console.log(e.quantity);
  }
}
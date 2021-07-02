import { forEachTrailingCommentRange, isTaggedTemplateExpression, isTemplateExpression } from "typescript";
import { Subject } from "rxjs";
import { CartItem } from "../shared/cartItem.model";
import { Product } from "../shared/product.model";
import { identifierModuleUrl } from "@angular/compiler";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CartService {
    items2: Product[] = [];
    selectedItems : Product[] = [];
    cartTotal: number;
  //  cartItems: CartItem[] = [];
    items = new Subject()
    temp = []

    
    addToCart(product: Product) {
     
        this.temp.push(product)
        this.items.next(this.temp)
        
        // if (product === this.getItems().find(ob => ob.id === product.id)){
        //     product.quantity = product.quantity + 1;
        //     console.log(product.quantity);
           
        // } else {
        //     this.items.push(product);
        //     console.log(product.price);
        // }

        // console.log("In the add method")
      
        // let i = new CartItem(product, 1);
        // console.log(this.cartItems.includes(i))
        // if(this.cartItems.includes(i)){
        //    this.cartItems.push(i)
        // }else{
        //   let result = this.cartItems.find(({item}) => 
        //    item === i.item
        //    )

        //     this.increaseQuantity(result)
        //  }
           
    }

    removeItem(id:number) {
        let item = this.getItems().find(ob => ob.id === id);
        let itemIndex = this.getItems().indexOf(item);
        this.getItems().splice(itemIndex,1);
    }

    addToCartTotal(price:number){
        this.cartTotal = this.cartTotal + price;
        // console.log(this.cartTotal);
    }

    // setCartTotal() {
    //     for(let item of this.cartItems ){
    //        let singleItemCost =  item.item.price * item.quantity
    //         this.totalCost += singleItemCost
    //     }
    // }

    getItems() {
        return this.items2;
    }

    // getItem(id:number){
    //     return this.items.filter(function(id){
    //         console.log(id);
    //     });
   
    // clearCart() {
    //     console.log(this.getItems());
    //     this.cartItems = [];
    //     return this.cartItems;
    // }

    // increaseQuantity(item:CartItem){
    //     item.quantity+=1
    // }

    // deccreaseQuantity(item:CartItem){
    //     item.quantity-=1
    // }

}
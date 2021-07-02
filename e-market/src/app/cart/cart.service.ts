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
    cartItems: CartItem[] = [];
    items = new Subject()
    temp = []

    
    addToCart(product: Product) {
     
      //  this.temp.push(product)
      //  this.items.next(this.temp)
        let newItem = new CartItem(product, 1);
        let itemExist = false
        let index
        if(this.cartItems.length > 0){
            for(let i = 0; i < this.cartItems.length; i++){
                if(this.cartItems[i].item.id === newItem.item.id){
                    this.cartItems[i].quantity += 1
                    itemExist = true
                }  
            }
        }

        
        this.cartItems.push(newItem)
        
      
        // let i = new CartItem(product, 1);
        // console.log(this.cartItems.includes(i))
        // if(this.cartItems.includes(i)){
        //    this.cartItems.push(i)
        // }else{
        //   let result = this.cartItems.find(({item}) => 
        //    item === i.item
        //    )
        //         result.quantity+=1
        //  }
         this.items.next(this.cartItems)   
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
   
    clearCart() {
        console.log(this.getItems());
        this.cartItems = [];
        return this.cartItems;
    }

    // increaseQuantity(item:CartItem){
    //     item.quantity = item.quantity + 1;
    // }

    // decreaseQuantity(item:CartItem){
    //     item.quantity-=1
    // }

}
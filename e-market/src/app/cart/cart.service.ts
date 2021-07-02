import { forEachTrailingCommentRange, isTaggedTemplateExpression, isTemplateExpression } from "typescript";
import { Subject } from "rxjs";
import { CartItem } from "../shared/cartItem.model";
import { Product } from "../shared/product.model";
import { identifierModuleUrl } from "@angular/compiler";

export class CartService {
    cartItems: CartItem[] = [];
    totalCost: number = 0
   

    addToCart(product: Product) {
        let i = new CartItem(product, 1);
        this.cartItems.push(i)
        this.setCartTotal()

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
    

    setCartTotal() {
        for(let item of this.cartItems ){
           let singleItemCost =  item.item.price * item.quantity
            this.totalCost += singleItemCost
        }
    }

    getItems() {
        return this.cartItems;
    }

   
    clearCart() {
        console.log(this.getItems());
        this.cartItems = [];
        return this.cartItems;
    }

    increaseQuantity(item:CartItem){
        item.quantity+=1
    }

    deccreaseQuantity(item:CartItem){
        item.quantity-=1
    }

}
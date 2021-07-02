import { isTaggedTemplateExpression, isTemplateExpression } from "typescript";
import { Subject } from "rxjs";
import { CartItem } from "../shared/cartItem.model";
import { Product } from "../shared/product.model";

export class CartService {
    cartItems: CartItem[] = [];
   

    addToCart(product: Product) {
        let i = new CartItem(product, 1);
        this.cartItems.push(i);
        console.log(product.price);
        
    }
    

    getCartTotal() {
        let totalCost = 0
        for(let item of this.cartItems ){
           let singleItemCost =  item.item.price * item.quantity
           totalCost += singleItemCost
        }
        return totalCost
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
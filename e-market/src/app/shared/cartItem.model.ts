import { Product } from "./product.model";

export class CartItem{
   public item: Product
   public quantity: number
  price: number;

   constructor(item: Product, quantity: number){
        this.item = item;
        this.quantity = quantity;
   }
}
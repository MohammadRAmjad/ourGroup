import { Product } from "../shared/product.model";

export class CartService {
    items: Product[] = [];
    selectedItems : Product[] = [];
    cartTotal: number;

    addToCart(product: Product) {
        if (product === this.getItems().find(ob => ob.id === product.id)){
            product.quantity = product.quantity + 1;
            console.log(product.quantity);
           
        } else {
            this.items.push(product);
            console.log(product.price);
        }
        
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

    getCartTotal() {
        return this.cartTotal;
    }

    getItems() {
        return this.items;
    }

    // getItem(id:number){
    //     return this.items.filter(function(id){
    //         console.log(id);
    //     });
    // }

    clearCart() {
        console.log(this.getItems());
        this.items = [];
        return this.items;
    }
    // private products: Product[] = [];
    // getCartProducts() {
    //     return this.products.slice();
    // }

    // addProductToCart(prod: Product) {
    //     this.products.push(prod);
    //     console.log("You are adding" + Product);
    //     console.log(this.products);
    // };

    // removeProductFromCart() {};
}
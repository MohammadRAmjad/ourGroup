import { Product } from "../shared/product.model";

export class CartService {
    items: Product[] = [];
    cartTotal: number = 0;

    addToCart(product: Product) {
        this.items.push(product);
        console.log(product.price);
        this.cartTotal = this.cartTotal + product.price;
        console.log(this.cartTotal);
    }

    getCartTotal() {
        return this.cartTotal;
    }

    getItems() {
        return this.items;
    }

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
import { Product } from "../shared/product.model";


export class CartService {
    private products: Product[] = [];
    getCartProducts() {
        return this.products.slice();
    }

    addProductToCart(prod: Product) {
        this.products.push(prod);
        console.log("You are adding" + Product);
        console.log(this.products);
    };

    removeProductFromCart() {

    };
}
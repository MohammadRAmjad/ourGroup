import { Product } from "../shared/product.model";

export class ProductService {

private products: Product[] = [
    new Product(1,'TV', 750.55, 'Electronics'),
    new Product(2,'TV', 755.55, 'Electronics')
  ];
  getProducts(){
      return this.products.slice();
  }
}
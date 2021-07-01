import { Product } from "../shared/product.model";

export class ProductService {

private products: Product[] = [
    new Product(1,'TV', 750.55, 'Electronics'),
    new Product(2,'PS5', 499.00, 'Electronics'),
    new Product(3,'Java', 30.00, 'Books'),
    new Product(4,'Jacket', 100.00, 'Clothing'),
    new Product(5,'Table', 60.00, 'Furniture')
  ];
  getProducts(v:string){
      if(v === 'All')
        return this.products.slice();
      else{
        let selectedProducts: Product[] = [];
        for (var item of this.products){
            if(item.category === v)
                selectedProducts.push(item)
                console.log(item.title)
        }
        console.log(selectedProducts.length)
        return selectedProducts
      }
      
        
  }
}
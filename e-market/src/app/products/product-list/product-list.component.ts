import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Product} from '../../shared/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  
  @Output() productWasSelected = new EventEmitter<Product>()
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products =this.productService.getProducts()
  }

  onProductSelect(product: Product){
    this.productWasSelected.emit(product)
  }
  

}

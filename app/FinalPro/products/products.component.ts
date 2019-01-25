import { Component, OnInit } from '@angular/core';
import{Product} from '../model1/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 // product: Product;
  productList: Product[];
 
  constructor() { 
    //this.product = new Product();
      this.productList = [];
      let product = new Product();
     // product.name='p1';
     // product.description='p1 des';
     
     
            this.productList.push(product);
  }
  onProductCreated(newProduct:Product)
  {
    this.productList.push(newProduct);
    console.log('onProductCreated() invoked.  New product added ' );
  }
  
  ngOnInit() {
  }

}

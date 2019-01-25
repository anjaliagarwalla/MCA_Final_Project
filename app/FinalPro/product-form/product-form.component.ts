import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from "../model1/product";
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product:Product;
  showAlert:boolean;
  disableBtn:boolean;
  @Output() productCreated:EventEmitter<Product>;

  constructor() {
    this.product=new Product();
    this.showAlert=false;
    this.disableBtn=false;
    this.productCreated=new EventEmitter<Product>();
      
  }

  ngOnInit() {
  }
  onAddProduct() {
    this.disableBtn=true;
    let newProduct = new Product();
    newProduct.name = this.product.name;
    newProduct.description = this.product.description;
  
   // this.productList.push(newProduct);
   this.productCreated.emit(newProduct);
    this.product = new Product();

    console.log('Chapter createdsuccessfully!');
    //console.log(this.productList);
    this.showAlert = true;

    setTimeout(() => {
        this.showAlert = false;
    }, 3000);
}
}

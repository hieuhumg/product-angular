import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product.class';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public product: Product =
    {
      id: 0,
      name: "",
      price: 0,
      status: false
    };

  constructor(
    public productService: ProductService
  ) { }

  ngOnInit() {
  }

  addProduct() {
    if (this.product.name != null && this.product.price != 0) {
      this.product['id'] = this.productService.getMaxProductId() + 1;
      if (this.productService.addProduct(this.product)) {
        alert("Your data has been added");
      }
    }
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product.class';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  public product: Product[] = [];
  public name: string;
  public price: number;
  public queryParamsSubscription: Subscription;

  constructor(
    public productService: ProductService,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    // lắng nghe thay đổi trên input ở trường name và price, rồi truyền 2 giá trị name,price vào getAllProduct
    this.queryParamsSubscription = this.activatedRoute.queryParams.subscribe(data => {
      let name = data.name;
      let price = data.price;
      let status = data.status;
      this.name = name;
      this.price = price;
      this.product = this.productService.getAllProduct(name, price);
    });
  }

  ngOnDestroy() {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }

  deleteProduct(id){
    this.product = this.productService.deleteProduct(id).slice(-1);
  }

}

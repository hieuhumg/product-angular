import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from './../../models/product.class';
import { ProductService } from './../../services/product.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  public product: Product;

  constructor(
    public productService: ProductService,
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.handleParams();
  }
  //let id = this.activatedRoute.snapshot.params['id'];
  handleParams() {
    // this.subcription = this.activatedRouteService.params.subscribe((params: Params) =>{
    //   let id = params.id;
    //   console.log(params.id)
    // })
    let result = this.product;
    let id = this.activatedRoute.snapshot.params['id'];
    this.product = this.productService.getAllProductById(id);
    console.log(id)
  }
  onUpdate(){
    this.productService.onUpdate(this.product);
  }

}

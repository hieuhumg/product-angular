import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../../models/product.class';
import { ProductService } from './../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public product: Product = null;

  constructor(
    public activatedRoute : ActivatedRoute,
    public productService : ProductService,
    public routerService: Router

  ) { }

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.params['id']);
    let id = this.activatedRoute.snapshot.params['id'];
    this.product = this.productService.getAllProductById(id);
  }

  onBackToList(){
    this.routerService.navigate(['list'], {
      relativeTo: this.activatedRoute.parent
    });
  }

  onEdit() {
    this.routerService.navigate(['edit', this.product.id], {
      relativeTo: this.activatedRoute.parent
    });
  }
  
  onDelete() {

  }

}

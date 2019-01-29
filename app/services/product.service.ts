import { Injectable } from '@angular/core';
import { Product } from './../models/product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public product: Product[] = [
    {
      id: 1,
      name: 'BKAV',
      price: 9000,
      status: true
    },
    {
      id: 2,
      name: 'Iphone 6s',
      price: 1000,
      status: true
    },
    {
      id: 3,
      name: 'Samsung s7',
      price: 2000,
      status: false
    }
  ]

  constructor() { }

  getAllProduct(name?: string, price?: number) {
    let result: Product[] = this.product;
    if (name) {
      result = this.product.filter(x => {
        return x.name.toLowerCase().indexOf(name.toLowerCase()) != -1;
      });
    }
    if (price) {
      result = this.product.filter(x => {
        return x.price == price;
      });
    }
    return result;
  }

  getAllProductById(id: number) {
    let result = null;
    for (var i = 0; i < this.product.length; i++) {
      if (this.product[i].id == id) {
        result = this.product[i];
        break;
      }
    }
    return result;
  }

  onUpdate(product: Product){
    let id = product.id;
    this.product[id - 1].name = product.name;
    this.product[id - 1].price = product.price;
    this.product[id - 1].status = product.status;
    console.log(this.product[id -1]);
  }

  addProduct(product: Product) {
    var c = confirm("This will be add to database???");
    if (c) {
      this.product.push(product);
      return true;
    }
    else {
      return false;
    }
  }

  getMaxProductId() {
    let result = this.product.sort((a, b) => {
      if (a.id > b.id) return 1;
      else if (a.id < b.id) return -1;
      else return 0;
    })
    var l = this.product.length;
    return result[l - 1].id;
  }

  deleteProduct(id) {
    this.product = this.product.filter(x => {
      return x.id != id;
    })
    return this.product;
  }

}

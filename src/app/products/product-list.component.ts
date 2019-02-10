import {Component, OnChanges} from '@angular/core';
import {ProductModel} from './product.model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  pageName = 'List of Product Page';
  products: ProductModel[];
  filteredProducts: ProductModel[];
  private _input: string;

  get input(): string {
    return this._input;
  }

  set input(value: string) {
    this._input = value;
    this.filterData();
  }

  filterData() {
    console.log('Called filterData');
    this.filteredProducts =
      this.products.filter(
      (p: ProductModel) => p.name.indexOf(this._input) !== -1);
  }

  constructor() {
    this.products = [
      {
        code: 'AB 0001',
        name: 'Product 01',
        price: 100,
        rating: 5,
      },
      {
        code: 'AB 0002',
        name: 'Product 02',
        price: 200,
        rating: 4,
      },
      {
        code: 'AB 0003',
        name: 'Product 03',
        price: 300,
        rating: 2,
      },
    ];
    this.filteredProducts = this.products;
  }


  onRatingClicked(message: string) {
    console.log(message);
    this.pageName = 'List of Product Page: ' + message;
  }
}

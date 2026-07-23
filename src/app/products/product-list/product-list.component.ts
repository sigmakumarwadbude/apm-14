import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'sw-product-list',
  templateUrl: './product-list.component.html',
  styles: [`
    thead {
      color: #337AB7
    }
    `]
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';

  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  private _listFilter = '';

  get listFilter() {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  products: Product[] = [];

  filteredProducts: Product[] = [];

  performFilter(filterBy: string): any[] {
    filterBy = filterBy.toLocaleLowerCase().trim();
    return this.products.filter((product) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

  constructor(private prodcutSrv: ProductsService) {}

  ngOnInit(): void {
    this.products = this.prodcutSrv.getProducts();
    this.filteredProducts = this.products;
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string) {
    this.pageTitle = 'Product List ' + message;
  }
}

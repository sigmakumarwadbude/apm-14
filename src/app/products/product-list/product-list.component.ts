import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-product-list',
  templateUrl: './product-list.component.html',
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

  products = [
    {
      productId: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2021',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl: 'assets/images/leaf_rake.png',
    },
  ];

  filteredProducts: any[] = [];

  performFilter(filterBy: string): any[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

  constructor() {}

  ngOnInit(): void {
    this.filteredProducts = this.products;
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }
}

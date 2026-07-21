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
  listFilter = '';

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

  constructor() {}

  ngOnInit(): void {}

  toggleImage() {
    this.showImage = !this.showImage;
  }
}

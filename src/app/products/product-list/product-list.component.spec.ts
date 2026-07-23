import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpaces } from 'src/app/shared/convert-to-spaces.pipe';
import { StarComponent } from 'src/app/shared/star/star.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductsService } from '../products.service';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let service: ProductsService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent, ConvertToSpaces, StarComponent],
      imports: [FormsModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ProductsService);
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges(); // ngOnInit()
    const req = httpMock.expectOne('assets/products/products.json');

    req.flush([
      {
        productId: 1,
        productName: 'Leaf Rake',
        productCode: 'GDN-0011',
        releaseDate: 'March 19, 2021',
        description: 'Leaf rake',
        price: 19.95,
        starRating: 3.2,
        imageUrl: 'assets/images/leaf_rake.png',
      },
      {
        productId: 2,
        productName: 'Garden Cart',
        productCode: 'GDN-0023',
        releaseDate: 'March 18, 2021',
        description: 'Garden cart',
        price: 32.99,
        starRating: 4.2,
        imageUrl: 'assets/images/garden_cart.png',
      },
    ]);

    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle showImage', () => {
    expect(component.showImage).toBeFalse();

    component.toggleImage();
    expect(component.showImage).toBeTrue();

    component.toggleImage();
    expect(component.showImage).toBeFalse();
  });

  it('should filter regardless of case', () => {
    const result = component.performFilter('LEAF');

    expect(result.length).toBe(1);
  });

  it('should trim spaces before filtering', () => {
    const result = component.performFilter('  Leaf  ');

    expect(result.length).toBe(1);
  });

  it('should initialize filteredProducts with all products', () => {
    expect(component.filteredProducts.length).toBe(component.products.length);
  });

  it('should filter products when listFilter is set', () => {
    component.listFilter = 'Leaf';

    expect(component.filteredProducts.length).toBe(1);
    expect(component.filteredProducts[0].productName).toBe('Leaf Rake');
  });

  it('should return matching products from performFilter()', () => {
    const result = component.performFilter('leaf');

    expect(result.length).toBe(1);
    expect(result[0].productName).toBe('Leaf Rake');
  });

  it('should return no products when there is no match', () => {
    const result = component.performFilter('xyz');

    expect(result.length).toBe(0);
  });

  it('it should update pageTitle', () => {
    component.pageTitle = 'Product List';

    component.onRatingClicked('4.2');

    expect(component.pageTitle).toBe('Product List 4.2');
  });

  it('should return server error message', (done) => {
  const error = new HttpErrorResponse({
    status: 500,
    statusText: 'Internal Server Error'
  });

  service['handleError'](error).subscribe({
    next: () => fail('Expected an error'),
    error: (err: string) => {
      expect(err).toBe('Server returned code: 500');
      done();
    }
  });
});

it('should return client error message', (done) => {
  const errorEvent = new ErrorEvent('NetworkError', {
    message: 'Network connection lost'
  });

  const error = new HttpErrorResponse({
    error: errorEvent
  });

  service['handleError'](error).subscribe({
    next: () => fail('Expected an error'),
    error: (err: string) => {
      expect(err).toBe('Network connection lost');
      done();
    }
  });
});
});

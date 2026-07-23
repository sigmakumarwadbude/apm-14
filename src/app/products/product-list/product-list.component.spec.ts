import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpaces } from 'src/app/shared/convert-to-spaces.pipe';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent, ConvertToSpaces],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
});

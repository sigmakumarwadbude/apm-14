import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsUrl = 'assets/products/products.json';

  constructor(private http: HttpClient) {}
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
    tap(data => console.log(JSON.stringify(data))),
    catchError(this.handleError)
    )
  }

  private handleError(err: HttpErrorResponse) {
    let errorMsg = ''
    if(err.error instanceof ErrorEvent) {
      errorMsg = err.error.message;
    }else {
      errorMsg = `Server returned code: ${err.status}`;
    }
    return throwError(() => errorMsg);
  }
}

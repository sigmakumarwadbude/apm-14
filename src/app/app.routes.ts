import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './products/product-list/product-list.component';
export const ROOT_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
];

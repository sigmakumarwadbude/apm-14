import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConvertToSpaces } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ConvertToSpaces,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

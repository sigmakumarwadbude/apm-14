import { Component } from '@angular/core';

@Component({
  selector: 'sw-root',
  template: `
    <div class="container mt-5">
      <header>
      <h1>{{ title }}</h1>
      </header>

      <!-- <sw-home></sw-home> -->
       <sw-product-list></sw-product-list>
    </div>
  `,
})
export class AppComponent {
  title = 'Angular Learning';
}

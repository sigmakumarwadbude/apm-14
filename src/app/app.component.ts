import { Component } from '@angular/core';

@Component({
  selector: 'sw-root',
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light mb-4">
      <a class="navbar-brand">{{ title }}</a>

      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link" routerLink="home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="products">Product List</a>
        </li>
      </ul>
    </nav>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  title = 'Angular Learning';
}

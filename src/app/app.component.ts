import { Component } from '@angular/core';

@Component({
  selector: 'sw-root',
  template: `
    <div class="container mt-5">
      <div class="alert alert-success">Bootstrap 4 Installed Successfully!</div>

      <h1>{{ title }}</h1>

      <p>Welcome to Angular!</p>

      <button class="btn btn-primary">
        <i class="fa fa-home"></i>Click Me
      </button>
    </div>
  `,
})
export class AppComponent {
  title = 'Angular Learning';
}

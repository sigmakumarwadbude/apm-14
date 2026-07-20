import { Component } from '@angular/core';

@Component({
  selector: 'sw-root',
  template: `
  <h1>{{ title }}</h1>

<p>Welcome to Angular!</p>
  `,
})
export class AppComponent {
  title = 'Angular Learning';
}
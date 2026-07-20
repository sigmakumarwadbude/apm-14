import { Component } from '@angular/core';

@Component({
  selector: 'sw-home',
  template: `
    <div class="jumbotron text-center">
      <p>{{ description }}</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  `,
})
export class HomeComponent {
  description = 'Learn Modern Angular step by step.';
}

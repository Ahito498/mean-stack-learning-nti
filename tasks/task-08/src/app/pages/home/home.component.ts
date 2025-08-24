import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="card">
      <h1>Welcome to Student Portal</h1>
      <p>This is a mini Angular application demonstrating various Angular concepts:</p>
      <ul>
        <li>Routing and Navigation</li>
        <li>Lazy Loading</li>
        <li>Nested Routing</li>
        <li>Lifecycle Hooks</li>
        <li>@Input Decorator</li>
        <li>ng-content</li>
      </ul>
      <p>Navigate to the Students section to see these features in action!</p>
    </div>
  `,
  styles: []
})
export class HomeComponent {}

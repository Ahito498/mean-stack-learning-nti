import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="card">
      <h1>About Student Portal</h1>
      <p>This application was built as part of the MEAN stack learning journey at NTI.</p>
      <h2>Technologies Used:</h2>
      <ul>
        <li>Angular 17 (Standalone Components)</li>
        <li>TypeScript</li>
        <li>Angular Router</li>
        <li>CSS3</li>
      </ul>
      <h2>Features Demonstrated:</h2>
      <ul>
        <li>Component Communication with @Input</li>
        <li>Content Projection with ng-content</li>
        <li>Lifecycle Hooks</li>
        <li>Lazy Loading</li>
        <li>Nested Routing</li>
        <li>Route Parameters</li>
      </ul>
    </div>
  `,
  styles: []
})
export class AboutComponent {}

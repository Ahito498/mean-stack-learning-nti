import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductsComponent],
  template: `
    <div class="app-container">
      <header>
        <h1>Product Management System</h1>
      </header>
      <main>
        <app-products></app-products>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      padding: 20px;
    }
    
    header {
      background: #007bff;
      color: white;
      padding: 1rem;
      margin-bottom: 2rem;
      border-radius: 8px;
    }
    
    h1 {
      margin: 0;
      font-size: 1.5rem;
    }
  `]
})
export class AppComponent { }
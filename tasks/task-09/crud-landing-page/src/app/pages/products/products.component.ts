import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../shared/models/product.model';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="products-container">
      <!-- Add Product Form -->
      <div class="add-product-form">
        <h2>Add New Product</h2>
        <form (ngSubmit)="addProduct()" #productForm="ngForm">
          <div class="form-group">
            <input [(ngModel)]="newProduct.name" name="name" placeholder="Product Name" required>
          </div>
          <div class="form-group">
            <select [(ngModel)]="newProduct.category" name="category" required>
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>
          <div class="form-group">
            <input [(ngModel)]="newProduct.price" name="price" type="number" placeholder="Price" required>
          </div>
          <div class="form-group">
            <textarea [(ngModel)]="newProduct.description" name="description" placeholder="Description" required></textarea>
          </div>
          <button type="submit" [disabled]="!productForm.form.valid">Add Product</button>
        </form>
      </div>

      <!-- Products List -->
      <div class="products-list">
        <h2>Products</h2>
        
        <!-- Filters -->
        <div class="filters">
          <input [(ngModel)]="searchTerm" (ngModelChange)="applyFilters()" 
                 placeholder="Search products...">
          <div class="category-filters">
            <label *ngFor="let cat of categories">
              <input type="radio" [(ngModel)]="selectedCategory" 
                     [value]="cat" (change)="applyFilters()">
              {{cat}}
            </label>
          </div>
        </div>

        <!-- Products Table -->
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let product of filteredProducts">
              <td>{{product.id}}</td>
              <td>{{product.name}}</td>
              <td>{{product.category}}</td>
              <td>${{product.price}}</td>
              <td>{{product.description}}</td>
              <td>
                <button (click)="editProduct(product)">Edit</button>
                <button (click)="deleteProduct(product.id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .products-container {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .add-product-form {
      background: #f5f5f5;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 20px;
    }

    .form-group {
      margin-bottom: 15px;
    }

    input, select, textarea {
      width: 100%;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    button {
      padding: 8px 16px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:disabled {
      background: #cccccc;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }

    th, td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }

    .filters {
      margin: 20px 0;
    }

    .category-filters {
      margin-top: 10px;
      display: flex;
      gap: 20px;
    }
  `]
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories = ['All', 'Electronics', 'Furniture', 'Accessories'];
  selectedCategory = 'All';
  searchTerm = '';

  newProduct: Product = {
    id: 0,
    name: '',
    category: 'Electronics',
    description: '',
    price: 0
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.applyFilters();
    });
  }

  addProduct(): void {
    if (this.newProduct.name && this.newProduct.price > 0) {
      this.productService.addProduct(this.newProduct);
      this.newProduct = {
        id: 0,
        name: '',
        category: 'Electronics',
        description: '',
        price: 0
      };
      this.loadProducts();
    }
  }

  editProduct(product: Product): void {
    // Implementation for edit functionality
    console.log('Editing product:', product);
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id);
    this.loadProducts();
  }

  applyFilters(): void {
    this.filteredProducts = this.products.filter(product => {
      const matchesSearch = product.name.toLowerCase()
        .includes(this.searchTerm.toLowerCase());
      const matchesCategory = this.selectedCategory === 'All' || 
        product.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }
}
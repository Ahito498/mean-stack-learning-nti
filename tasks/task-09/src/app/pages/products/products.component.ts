import { Component } from '@angular/core';
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
      <div class="add-product-form">
        <h2>Add New Product</h2>
        <form (ngSubmit)="addProduct()">
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
          <button type="submit">Add Product</button>
        </form>
      </div>

      <div class="products-list">
        <h2>Products</h2>
        <div class="filters">
          <input [(ngModel)]="searchTerm" placeholder="Search products...">
          <div class="category-filters">
            <label>
              <input type="radio" [(ngModel)]="selectedCategory" value="all">
              All
            </label>
            <label>
              <input type="radio" [(ngModel)]="selectedCategory" value="Electronics">
              Electronics
            </label>
            <label>
              <input type="radio" [(ngModel)]="selectedCategory" value="Furniture">
              Furniture
            </label>
            <label>
              <input type="radio" [(ngModel)]="selectedCategory" value="Accessories">
              Accessories
            </label>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let product of filteredProducts">
              <td>{{product.id}}</td>
              <td>{{product.name}}</td>
              <td>{{product.category}}</td>
              <td>{{product.description}}</td>
              <td>${{product.price}}</td>
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
export class ProductsComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm: string = '';
  selectedCategory: string = 'all';
  
  newProduct: Product = {
    id: 0,
    name: '',
    category: 'Electronics',
    description: '',
    price: 0
  };

  constructor(private productService: ProductService) {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.applyFilters();
    });
  }

  addProduct() {
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

  editProduct(product: Product) {
    // Implementation for edit functionality
    console.log('Editing product:', product);
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    this.loadProducts();
  }

  applyFilters() {
    this.filteredProducts = this.products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = this.selectedCategory === 'all' || product.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }
}
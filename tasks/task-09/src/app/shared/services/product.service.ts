import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = new BehaviorSubject<Product[]>([]);

  getProducts(): Observable<Product[]> {
    return this.products.asObservable();
  }

  addProduct(product: Product): void {
    const current = this.products.value;
    this.products.next([...current, {...product, id: current.length + 1}]);
  }

  updateProduct(product: Product): void {
    const current = this.products.value;
    const index = current.findIndex(p => p.id === product.id);
    if (index !== -1) {
      current[index] = product;
      this.products.next([...current]);
    }
  }

  deleteProduct(id: number): void {
    const current = this.products.value;
    this.products.next(current.filter(p => p.id !== id));
  }
}
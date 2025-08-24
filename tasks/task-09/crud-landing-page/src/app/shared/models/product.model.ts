export interface Product {
  id: number;
  name: string;
  category: 'Electronics' | 'Furniture' | 'Accessories';
  description: string;
  price: number;
}
# Task 09 - CRUD Landing Page

A product management system built with Angular, featuring CRUD operations and filtering capabilities.

## Features
- Add new products with name, category, price, and description
- Edit existing products
- Delete products
- Filter products by category
- Search products by name
- Responsive design

## Technical Stack
- Angular 16+
- Standalone Components
- RxJS for state management
- TypeScript
- SCSS for styling

## Running the Project
```bash
# Install dependencies
npm install

# Start development server
ng serve --port 4201

# Access the application
open http://localhost:4201
```

## Expected Output

### Products List View
![Products List](./screenshots/products-list.png)
*Main view showing product management interface with filtering*

### Add Product Form
![Add Product](./screenshots/add-product.png)
*Form for adding new products with validation*

### Product Categories
![Categories](./screenshots/categories.png)
*Category filtering and search functionality*

## Project Structure
```
src/
├── app/
│   ├── pages/
│   │   └── products/
│   │       └── products.component.ts
│   ├── shared/
│   │   ├── models/
│   │   │   └── product.model.ts
│   │   └── services/
│   │       └── product.service.ts
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
└── assets/
    └── screenshots/
```

## Implementation Details
- Standalone components architecture
- Reactive state management with RxJS
- Form validation
- Responsive layout with SCSS
- Route configuration
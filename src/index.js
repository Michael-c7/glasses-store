import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// contexts
import { ProductsProvider } from './contexts/products_context'
import { FilterProvider } from './contexts/filter_context';
import { CartProvider } from './contexts/cart_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App/>
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </React.StrictMode>
);


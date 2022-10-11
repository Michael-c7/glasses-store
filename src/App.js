import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages
import Home from './pages/Home'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Error from './pages/Error';
// components
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/products" element={ <Products/> } />
        <Route path="/singleProduct/:productId" element={ <SingleProduct/> } />
        <Route path="/cart" element={ <Cart/> } />
        <Route path="/checkout" element={ <Checkout/> } />
        <Route path="*" element={ <Error/> } />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

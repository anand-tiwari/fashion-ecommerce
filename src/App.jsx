import React from "react";
import ProductList from "./components/products/ProductList";
import ProductDetailPage from "./components/productDetail/ProductDetailPage";
import Cart from "./components/cart/Cart";

import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="margin-header">
        <Routes>
          <Route path="/" element={<Navigate to="list" replace />} />
          <Route path="list" element={<ProductList />} />
          <Route path="product/:productId" element={<ProductDetailPage />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

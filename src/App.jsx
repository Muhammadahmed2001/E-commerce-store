import React from "react";
import {Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Nopage from "./pages/nopage/Nopage";
import Order from "./pages/Order/Order";
import MyState from "./context/data/myState";
import Allproducts from "./pages/allproducts/Allproducts";
import ProductInfo from "./pages/productInfo/ProductInfo";



function App() {
  return (
   <MyState>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/allproducts" element={<Allproducts />} />
        <Route path="/productinfo/:id" element={<ProductInfo />} />
        <Route path="/*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
   </MyState>
  );
}

export default App;

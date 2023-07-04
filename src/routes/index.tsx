import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Cart from "../pages/cart";
import Admin from "../pages/admin";
import Header from "../layouts/Header";

const Index = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;

import { createRoot } from "react-dom/client";
import "./main.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import Product from "./pages/Product/Product";
import Developers from "./pages/Developers/Developers";
import Pricing from "./pages/Pricing/Pricing";
import Enterprice from "./pages/Enterprice/Enterprice";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/developers" element={<Developers />} />
      <Route path="/enterprice" element={<Enterprice />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  </BrowserRouter>
);

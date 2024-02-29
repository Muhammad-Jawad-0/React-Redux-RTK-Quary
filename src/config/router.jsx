import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import AddProduct from "../pages/AddProduct";


function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/add-product" element={<AddProduct/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter


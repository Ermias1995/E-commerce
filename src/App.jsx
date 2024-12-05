import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Error from "./pages/Error";

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={ <SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="checkout" element={<Checkout/>}/>
        <Route path="wishlist" element={<Wishlist/>}/>
        <Route path="*" element={<Error/>}/>
      </Route>
      <Route path="login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

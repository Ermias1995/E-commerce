import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector(state=>state.auth.isLoggeIn);
  console.log(isLoggedIn);
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={ <SharedLayout/>}>
        {/* <Route index element={isLoggedIn ? <Home /> : <Navigate to="/login" />}/> */}
        <Route index element={<Home/>}/>
        <Route path="cart" element={isLoggedIn ? <Cart/> : <Navigate to="/login"/>}/>
        <Route path="checkout" element={isLoggedIn ? <Checkout/> : <Navigate to="/login"/>}/>
        <Route path="wishlist" element={isLoggedIn ? <Wishlist/> : <Navigate to="/login"/>}/>
        <Route path="account" element={isLoggedIn ? <Account/> : <Navigate to="/login"/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="*" element={<Error/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

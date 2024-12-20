import { NavLink } from "react-router-dom";
import { IoSearch,IoHeartOutline,IoCartOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RxPerson } from "react-icons/rx";
import { useState } from "react";
import { logout } from '../redux/authSlice';
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function Navbar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state=>state.auth.isLoggeIn);
  const cartItems = useSelector(state => state.cart.items); 
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0); 

  const wishlistItems = useSelector(state => state.wishlist.items);
  const totalWishlistItems = wishlistItems.length;

  console.log(isLoggedIn);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () =>{
    setDropdown(false);
  }
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="">
    <div className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="flex items-center justify-evenly h-12 bg-black pl-10">
        <p className="text-sm text-[#FAFAFA]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!<a href="#" className="font-semibold underline ml-2">ShopNow</a></p>
        <select className="bg-black text-[#FAFAFA] ml-10">
          <option value="English">English</option>
          <option value="Amharic">Amharic</option>
        </select>
      </div>
      <div className="flex items-center justify-evenly h-[92px] px-[135px] pt-11 pb-6">
        <h1 className="text-2xl font-bold">Exclusive</h1>
        <div id='navbar-links' className="flex items-center gap-12">
          <NavLink to="/" className="text-base active:font-bold">Home</NavLink>
          <NavLink to="/contact" className="text-base active:font-bold">Contact</NavLink>
          <NavLink to="/about" className="text-base active:font-bold">About</NavLink>
          <NavLink to="/signup" className="text-base active:font-bold border-b-2">Sign Up</NavLink>
        </div>
        <div className="flex items-center bg-[#F5F5F5] h-[38px] w-[250px] border rounded-[4px] py-[7px] pl-5 pr-3">
          <IoSearch className="absolute transform translate-x-48 text-2xl"/>
          <input type="text" placeholder='What are you looking for?' className="bg-[#F5F5F5] px-2 placeholder:text-xs focus:outline-none"/>
          {isLoggedIn && (
            <div className="flex items-center justify-evenly ml-14 gap-3">
              <div className="relative flex items-center justify-evenly h-10 w-10  rounded-full hover:bg-secondary hover:text-white">
                <NavLink to="/wishlist" className="active:font-bold text-2xl"><IoHeartOutline/></NavLink>
                <p className="absolute top-0 right-0 text-white w-4 h-4 bg-secondary border rounded-full text-xs flex items-center justify-center">{totalWishlistItems}</p>
              </div>
              <div className="relative h-10 w-10 flex items-center justify-evenly rounded-full hover:bg-secondary hover:text-white">
                <NavLink to="/cart" className="active:font-bold text-2xl"><IoCartOutline/></NavLink>
                <p className="absolute top-0 right-0 text-white w-4 h-4 bg-secondary border rounded-full text-xs flex items-center justify-center">{totalQuantity}</p>
              </div>
              <div className="relative flex items-center justify-evenly h-10 w-10 rounded-full hover:bg-secondary hover:text-white">
                <NavLink to="/account" className="active:font-bold text-2xl"><RxPerson/></NavLink>
                <div className="absolute top-10 right-0 w-56 text-white bg-black bg-opacity-40 backdrop-blur border rounded-[4px] p-3 pl-10 flex flex-col gap-3 z-10 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <NavLink to="/account" className="text-sm flex items-center gap-2"><RxPerson className="text-lg"/> Manage My Account</NavLink>
                  <NavLink to="/not" className="text-sm flex items-center gap-2"><FiShoppingBag className="text-lg"/>My Order</NavLink>
                  <NavLink to="/not" className="text-sm flex items-center gap-2"><MdOutlineCancel className="text-lg"/>My Cancellations</NavLink>
                  <NavLink to="/not" className="text-sm flex items-center gap-2"><FaRegStar className="text-lg"/>My Reviews</NavLink>
                  <NavLink to="/login" className="text-sm flex items-center gap-2"><CiLogout className="text-lg"/>Logout</NavLink>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <hr/>
    </div>
    <div className="h-[132px]"></div>
    </div>
  )
}
export default Navbar
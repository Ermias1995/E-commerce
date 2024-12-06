import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";


function Navbar() {
  
  const isLoggedIn = useSelector(state=>state.auth.isLoggedIn);

  return (
    <div>
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
          {isLoggedIn && <div>
            <p>Here Logged in is True</p>
            {/* <NavLink to="/wishlist" className="text-base active:font-bold">Wishlist</NavLink>
            <NavLink to="/cart" className="text-base active:font-bold">Cart</NavLink> */}
            </div>}
        </div>
      </div>
      <hr/>
    </div>
  )
}
export default Navbar
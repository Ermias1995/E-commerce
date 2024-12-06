import { FaAngleRight,FaApple,FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom"
import iPhone from "../assets/iPhone.png";

function Home() {
  return (
    <div>
      <div className="flex pb-36 gap-10">
        <div id="sidebar" className="flex flex-col gap-3 w-96 border-r-[1px] pl-32 pr-3 pt-10">
          <NavLink to="/contact" className="text-base active:font-bold flex justify-between hover:font-bold">Woman's Fashion<FaAngleRight/></NavLink>
          <NavLink to="/contact" className="text-base active:font-bold flex justify-between hover:font-bold">Men's Fashion<FaAngleRight/></NavLink>
          <NavLink to="/contact" className="text-base active:font-bold flex justify-between hover:font-bold">Electronics</NavLink>
          <NavLink to="/contact" className="text-base active:font-bold flex justify-between hover:font-bold">Home & Lifestyle</NavLink>
          <NavLink to="/contact" className="text-base active:font-bold flex justify-between hover:font-bold">Medicine</NavLink>
          <NavLink to="/contact" className="text-base active:font-bold flex justify-between hover:font-bold">Sports & Outdoor</NavLink>
          <NavLink to="/contact" className="text-base active:font-bold flex justify-between hover:font-bold">Baby's & Toys</NavLink>
          <NavLink to="/contact" className="text-base active:font-bold flex justify-between hover:font-bold">Groceries & Pets</NavLink>
          <NavLink to="/contact" className="text-base active:font-bold flex justify-between hover:font-bold">Health & Beauty</NavLink>
        </div>
        <div className="flex justify-center items-center gap-4 pl-16 py-10 mt-10 bg-black">
          <div className="flex flex-col ustify-center gap-4">
            <h1 className="text-textColor text-base flex items-center gap-4"><FaApple className="text-5xl"/>iPhone 14 Series</h1>
            <h1 className="text-textColor text-5xl w-72">Up to 10% off Voucher</h1>
            <NavLink to="/contact" className="text-textColor text-base underline flex items-center gap-2">Shop Now<FaArrowRight/></NavLink>
          </div>
          <img src={iPhone} alt="iPhone" className=""/>
        </div>
      </div>
    </div>
  )
}
export default Home
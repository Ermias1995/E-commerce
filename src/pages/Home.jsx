import { FaAngleRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom"
function Home() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div id="sidebar" className="flex flex-col gap-3 w-96 border border-r-2 pl-32 pr-3 pt-8">
          <NavLink to="/contact" className="text-base active:font-bold flex justify-between hover:font-bold">Woman's Fashion<FaAngleRight/></NavLink>
          <NavLink to="/contact" className="text-base active:font-bold flex justify-between hover:font-bold">Men's Fashion<FaAngleRight/></NavLink>
          <NavLink to="/contact" className="text-base active:font-bold flex justify-between hover:font-bold">Electronics</NavLink>
          <NavLink to="/contact" className="text-base active:font-bold flex justify-between hover:font-bold">Home & Lifestyle</NavLink>
          <NavLink to="/contact" className="text-base active:font-bold flex justify-between hover:font-bold">Medicine</NavLink>
          <NavLink to="/contact" className="text-base active:font-bold flex justify-between hover:font-bold">Sports & Outdoor</NavLink>

        </div>
        <div className=""></div>
      </div>
    </div>
  )
}
export default Home
import { FaAngleRight,FaApple,FaArrowRight,FaTruckFast } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import iPhone from "../assets/iPhone.png";
import Tape from "../assets/Tape.png";
import ps5 from "../assets/ps5.png";
import woman from "../assets/woman.png";
import speaker from "../assets/speaker.png";
import perfume from "../assets/perfume.png";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import ProductList from "../components/ProductList";
import CategoryList from "../components/CategoryList";

function Home() {

  const customStyle = {
    overflowX: 'scroll',
    WebkitOverflowScrolling: 'touch', 
    scrollbarWidth: 'none', 
  };

   const [time, setTime] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
   });
    const countdownDate = new Date().getTime() + 4 * 24 * 60 * 60 * 1000; // 4 days from now
    const countdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTime({ days, hours, minutes, seconds });
    };
    useEffect(() => {
      const interval = setInterval(countdown, 1000);
      return () => clearInterval(interval);
    }, []);

    // const dispatch = useDispatch();
    // const { items, limitedItems,loading, error } = useSelector((state) => state.products);
    
    // useEffect(() => {
    //     dispatch(fetchProducts());
    // }, [dispatch]);

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div id="Sidebar and Banner" className="flex pb-36 gap-10">
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
        <div className="relative flex justify-center items-center gap-4 pl-16 py-10 mt-10 bg-black">
          <div className="flex flex-col ustify-center gap-4">
            <h1 className="text-textColor text-base flex items-center gap-4"><FaApple className="text-5xl"/>iPhone 14 Series</h1>
            <h1 className="text-textColor text-5xl w-72">Up to 10% off Voucher</h1>
            <NavLink to="/contact" className="text-textColor text-base underline flex items-center gap-2">Shop Now<FaArrowRight/></NavLink>
          </div>
            <div className="absolute items-end justify-center flex gap-3 mt-80">
              <button className="w-3 h-3 bg-gray-400 hover:bg-secondary hover:border hover:border-white rounded-full"></button>
              <button className="w-3 h-3 bg-gray-400 hover:bg-secondary hover:border hover:border-white rounded-full"></button>
              <button className="w-3 h-3 bg-gray-400 hover:bg-secondary hover:border hover:border-white rounded-full"></button>
              <button className="w-3 h-3 bg-gray-400 hover:bg-secondary hover:border hover:border-white rounded-full"></button>
              <button className="w-3 h-3 bg-gray-400 hover:bg-secondary hover:border hover:border-white rounded-full"></button>
            </div>
          <div>
            {/* If I get time Image sliding has to be done */}
            <img src={iPhone} alt="iPhone" className="object-contain w-full h-full"/>
          </div>
        </div>
      </div>
      <div id="Flash Sales and Items" className="flex flex-col gap-8 px-[135px]">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-start gap-4">
            <div className="w-5 h-10 bg-secondary rounded"/>
            <h1 className="text-secondary text-base font-semibold">Today's</h1>
          </div>
          <div className="flex gap-24 items-center">
            <h1 className="text-4xl font-semibold">Flash Sales</h1>
            <div className="flex">
              <div className="flex flex-col">
                <h1 className="text-xs font-medium">Days</h1>
                <p className="text-3xl font-bold">{time.days}</p>
              </div>
              <p className="text-secondary text-4xl px-3">:</p>
              <div className="flex flex-col">
                <h1 className="text-xs font-medium">Hours</h1>
                <p className="text-3xl font-bold">{time.hours}</p>
              </div>
              <p className="text-secondary text-4xl px-3">:</p>
              <div className="flex flex-col">
                <h1 className="text-xs font-medium">Minutes</h1>
                <p className="text-3xl font-bold">{time.minutes}</p>
              </div>  
              <p className="text-secondary text-4xl px-3">:</p>
              <div className="flex flex-col">
                <h1 className="text-xs font-medium">Seconds</h1>
                <p className="text-3xl font-bold">{time.seconds}</p>
              </div>
            </div>
          </div>
        </div>
        <ProductList/>
        <button className="bg-secondary text-textColor w-56 p-2 flex justify-center items-center ml-[40%] rounded">View All Products</button>
        <hr className="my-10"/>

        {/* Browse by Category Section */}
        <div className="flex flex-col gap-10">
          <div className="flex items-center justify-start gap-3">
            <div className="w-5 h-10 bg-secondary rounded"/>
            <h1 className="text-secondary text-base font-semibold">Categories</h1>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-semibold">Browse By Category</h1>
            <div className="flex gap-2">
              <button className="bg-gray-300 w-10 h-10 p-2 rounded-full">{"<"}</button>
              <button className="bg-gray-300 w-10 h-10 p-2 rounded-full">{">"}</button>
            </div>
          </div>
          <CategoryList/>
          <hr className="my-10"/>
        </div>

        {/* Best Selling Products */}
        <div className="flex flex-col gap-10">
          <div className="flex items-center justify-start gap-3">
            <div className="w-5 h-10 bg-secondary rounded"/>
            <h1 className="text-secondary text-base font-semibold">This Month</h1>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-semibold">Best Selling Products</h1>
            <button className="text-textColor bg-secondary p-2 px-4 rounded">View All</button>
          </div>
          {/* <CategoryList/> */}
          <ProductList category="jewelery"/>

          {/* Second banner */}
          <div className="relative flex justify-center items-center gap-4 pl-16 py-12 mt-10 bg-black">
            <div className="flex flex-col justify-center gap-5">
              <h1 className="text-[#00FF66] text-base flex items-center">categories</h1>
              <h1 className="text-textColor text-5xl">Enhance Your Music Experience</h1>
              <div className="flex gap-6">
                <div className="flex flex-col items-center w-16 h-16 bg-white text-black rounded-full p-2">
                  <p className="text-base font-semibold">24</p>
                  <p className="text-xs font-medium">Hours</p>
                </div>
                <div className="flex flex-col items-center w-16 h-16 bg-white text-black rounded-full p-2">
                  <p className="text-base font-semibold">05</p>
                  <p className="text-xs font-medium">Days</p>
                </div>
                <div className="flex flex-col items-center w-16 h-16 bg-white text-black rounded-full p-2">
                  <p className="text-base font-bold">59</p>
                  <p className="text-xs font-medium">Minutes</p>
                </div>
                <div className="flex flex-col items-center w-16 h-16 bg-white text-black rounded-full p-2">
                  <p className="text-base font-bold">35</p>
                  <p className="text-xs font-medium">Seconds</p>
                </div>
              </div>
              <NavLink to="/contact" className="text-textColor w-40 bg-[#00FF66] py-2 px-4 text-base flex items-center justify-center rounded">Buy Now!</NavLink>
            </div>
          <div>
            <img src={Tape} alt="iPhone" className="object-contain w-full h-full"/>
          </div>
        </div>
        </div>
        <div className="flex items-center justify-start gap-3">
          <div className="w-5 h-10 bg-secondary rounded"/>
          <h1 className="text-secondary text-base font-semibold">Our Products</h1>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-semibold">Explore Our products</h1>
          <div className="flex gap-2">
            <button className="bg-gray-300 w-10 h-10 p-2 rounded-full">{"<"}</button>
            <button className="bg-gray-300 w-10 h-10 p-2 rounded-full">{">"}</button>
          </div>
        </div>
        {/* Explore Our Products */}
        <div id="product-list" className="flex gap-8" style={customStyle}>
              {/* {limitedItems.map((product) => (
                  <div key={product.id} className="flex flex-col gap-10 w-[270px] h-[350px]">
                      <div id='image section' className="bg-textColor py-4 border w-48 h-44 rounded relative flex items-center justify-center">
                          <img src={product.image} alt={product.title} className="object-contain w-full h-full"/>
                      </div>
                      <div className="flex flex-col gap-2">
                          <h2 className="text-base">{product.title.length > 20 ? `${product.title.slice(0, 20)}...` : product.title}</h2>
                          <p className="text-secondary text-base">${product.price.toFixed(2)}<span className="text-[#808080] line-through ml-1">${(product.price + 20).toFixed(2)}</span></p>
                      </div>
                  </div>
              ))} */}
        </div>
        <div className="flex items-center justify-start gap-3">
          <div className="w-5 h-10 bg-secondary rounded"/>
          <h1 className="text-secondary text-base font-semibold">Featured</h1>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-semibold">New Arrival</h1>
        </div>

        {/* 3rd Banner  */}
        <div className="flex gap-5">
          <div className="relative flex items-center gap-4 pl-16 py-10 mt-10 bg-black rounded">
            <img src={ps5} alt="iPhone" className="object-contain w-full h-full"/>
            <h1 className="absolute bottom-24 text-textColor text-2xl">Play Station 5</h1>
            <p className="absolute bottom-14 w-60 text-sm text-textColor">Black and White version of the PS5 coming out on sale.</p>
            <NavLink to="/contact" className="absolute bottom-8 text-textColor text-base underline flex items-center">Shop Now</NavLink>
          </div>
          <div className="flex flex-col gap-5 rounded">
            <div className="relative flex items-center gap-4 pl-16 py-10 mt-10 bg-black rounded">
              <img src={woman} alt="iPhone" className="object-contain w-full h-full"/>
              <h1 className="absolute bottom-24 text-textColor text-2xl">Women's Collections</h1>
              <p className="absolute bottom-14 w-60 text-sm text-textColor">Featured woman collections that give you another vibe.</p>
              <NavLink to="/contact" className="absolute bottom-8 text-textColor text-base underline flex items-center">Shop Now</NavLink>
            </div>
            <div className="flex gap-5 rounded">
              <div className="relative flex items-center gap-4 pl-16 py-10 bg-black rounded">
                <img src={speaker} alt="iPhone" className="object-contain w-full h-full"/>
                <h1 className="absolute bottom-24 text-textColor text-2xl">Speakers</h1>
                <p className="absolute bottom-14 w-60 text-sm text-textColor">Amazon wireless speakers</p>
                <NavLink to="/contact" className="absolute bottom-8 text-textColor text-base underline flex items-center">Shop Now</NavLink>
              </div>
              <div className="relative flex items-center gap-4 pl-16 py-10 bg-black rounded">
                <img src={perfume} alt="iPhone" className="object-contain w-full h-full"/>
                <h1 className="absolute bottom-24 text-textColor text-2xl">Perfume</h1>
                <p className="absolute bottom-14 w-60 text-sm text-textColor">GUCCI INTENSE OUD EDP</p>
                <NavLink to="/contact" className="absolute bottom-8 text-textColor text-base underline flex items-center">Shop Now</NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* Last section */}
        <div className="flex justify-around items-center">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center text-4xl bg-black text-white border-8 rounded-full p-2 w-20 h-20"><FaTruckFast/></div>
            <h1 className="text-xl">FREE AND FAST DELIVERY</h1>
            <p className="text-sm">Free delivery for all orders over $140</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
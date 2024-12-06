import { FaAngleRight,FaApple,FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom"
import iPhone from "../assets/iPhone.png";
import { useState,useEffect } from "react";

function Home() {
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
            <img src={iPhone} alt="iPhone" className=""/>
          </div>
        </div>
      </div>
      <div id="Flash Sales and Items" className="flex flex-col gap-10 pl-[135px]">
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
        <div className=""></div>
      </div>
    </div>
  )
}
export default Home
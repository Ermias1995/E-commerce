import { FaAngleRight,FaApple,FaArrowRight,FaTruckFast,FaHeadset } from "react-icons/fa6";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
function Services() {
  return (
    <div className="flex justify-around items-center my-12 px-[135px]">
        <div className="flex flex-col items-center gap-2">
        <div className="flex items-center justify-center text-4xl bg-black text-white border-8 rounded-full p-2 w-20 h-20"><FaTruckFast/></div>
        <h1 className="text-xl font-semibold">FREE AND FAST DELIVERY</h1>
        <p className="text-sm">Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col items-center gap-2">
        <div className="flex items-center justify-center text-4xl bg-black text-white border-8 rounded-full p-2 w-20 h-20"><FaHeadset/></div>
        <h1 className="text-xl font-semibold">24/7 CUSTOMER SERVICE</h1>
        <p className="text-sm">Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col items-center gap-2">
        <div className="flex items-center justify-center text-4xl bg-black text-white border-8 rounded-full p-2 w-20 h-20"><AiOutlineSafetyCertificate/></div>
        <h1 className="text-xl font-semibold">MONEY BACK GUARANTEE</h1>
        <p className="text-sm">We reurn money within 30 days</p>
        </div>
    </div>
  )
}
export default Services
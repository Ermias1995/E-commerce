import { VscSend } from "react-icons/vsc";
import qrcode from "../assets/qrcode.png";
import googlePlay from "../assets/googlePlay.png";
import { FaApple,FaRegCopyright } from "react-icons/fa6";
import { RiFacebookLine,RiTwitterLine,RiInstagramLine,RiLinkedinLine } from "react-icons/ri";

function Footer() {
  return (
    <div className="mb-0 bg-black">
    <div className="mx-32 py-20">
      <div className="grid grid-cols-5 gap-[87px]">
        <div className="flex flex-col gap-7 w-[217px]">
          <h1 className="text-textColor font-bold text-2xl">Exclusive</h1>
          <h1 className="text-textColor font-medium text-xl">Subscribe</h1>
          <div className="flex flex-col gap-4">
            <h1 className="text-textColor text-base">Get 10% off your first order</h1>
            <div className="relative flex items-center bg-black h-12 border rounded-[4px] py-3 pl-4">
                <VscSend className="absolute left-40 text-2xl text-white hover:cursor-pointer" />
                <input 
                  type="text" 
                  placeholder="Enter your email" 
                  className="bg-transparent text-textColor px-2 placeholder:text-base focus:outline-none w-full" 
                />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-7 w-[217px]">
          <h1 className="text-textColor font-medium text-xl">Support</h1>
          <p className="text-textColor text-base">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
          <p className="text-textColor text-base">exclusive@gmail.com</p>
          <p className="text-textColor text-base">+88015-88888-9999</p>
        </div>

        <div className="flex flex-col gap-7">
          <p href="/Account" className="text-textColor font-medium text-xl">Account</p>
          <a href="#" className="text-textColor text-base">My Account</a>
          <a href="/signup" className="text-textColor text-base">Login / Register</a>
          <a href="/cart" className="text-textColor text-base">Cart</a>
          <a href="/wishlist" className="text-textColor text-base">Wishlist</a>
          <a href="/shop" className="text-textColor text-base">Shop</a>
        </div>

        <div className="flex flex-col gap-7">
          <p href="/Account" className="text-textColor font-medium text-xl">Quick Link</p>
          <a href="#" className="text-textColor text-base">Privacy Policy</a>
          <a href="/signup" className="text-textColor text-base">Terms Of Use</a>
          <a href="/cart" className="text-textColor text-base">FAQ</a>
          <a href="/wishlist" className="text-textColor text-base">Contact</a>
        </div>

        <div className="flex flex-col gap-7 w-48">
          <p href="/Account" className="text-textColor font-medium text-xl">Download App</p>
          <div className="flex flex-col gap-2">
            <p className="text-textColor font-medium text-xs">Save $3 with App New User Only</p>
            <div className="flex items-center gap-2">
              <img src={qrcode} alt="qrcode"/>
              <div className="flex flex-col justify-between gap-2">
                <div className="flex items-center justify-center border w-24 text-textColor border-textColor rounded-[4px]">
                  <img src={googlePlay} className="h-6 w-6" alt="Google play icon" />
                  <div className="flex flex-col justify-start">
                    <p className="text-[8px]">GET IT ON</p>
                    <p className="text-[12px]">Google Play</p>
                  </div>
                </div>
                <div className="flex items-center justify-center border w-24 text-textColor border-textColor rounded-[4px]">
                  <FaApple className="text-2xl"/>
                  <div className="flex flex-col justify-start">
                    <p className="text-[8px]">Download on the</p>
                    <p className="text-[12px]">Apple Store</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id='Contact Links' className="flex justify-around items-center text-textColor text-2xl">
            <a href="#"><RiFacebookLine/></a>
            <a href="#"><RiTwitterLine/></a>
            <a href=""><RiInstagramLine/></a>
            <a href="#"><RiLinkedinLine/></a>
          </div>
        </div>
      </div>
    </div>
    <hr className="border-gray-500 my-5"/>
    <p className="text-[#808080] pb-3 text-base flex items-center justify-center gap-2"><FaRegCopyright/> Copyright Rimel 2022. All right reserved</p>
    </div>
  )
}
export default Footer
import { VscSend } from "react-icons/vsc";
import { RiFacebookLine,RiTwitterLine,RiInstagramLine,RiLinkedinLine } from "react-icons/ri";
function Footer() {
  return (
    <div className="h-[440px] pl-32 pt-20 bg-black">
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

        <div className="flex flex-col gap-7">
          <p href="/Account" className="text-textColor font-medium text-xl">Download App</p>
          <div className="">
            <p className="text-textColor font-medium text-xs">Save $3 with App New User Only</p>
            <div className="flex items-center">
              <div className=""></div>
            </div>
          </div>
          <div id='Contact Links' className="flex justify-evenly items-center text-textColor text-2xl">
            <RiFacebookLine />
            <RiTwitterLine/>
            <RiInstagramLine/>
            <RiLinkedinLine/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
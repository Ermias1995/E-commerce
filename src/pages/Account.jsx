import { NavLink } from "react-router-dom"

function Account() {
  return (
    <div className="flex gap-8 px-[135px] my-28 py-10">
        <div className="flex flex-col gap-2 py-12 px-4">
            <h1 className="text-base flex items-center font-medium">Manage My Account</h1>
            <NavLink className="text-[#808080] hover:text-secondary pl-4 text-sm">My Profile</NavLink>
            <NavLink className="text-[#808080] hover:text-secondary pl-4 text-sm">Address Book</NavLink>
            <NavLink className="text-[#808080] hover:text-secondary pl-4 text-sm">My Payment Options</NavLink>
            <h1 className="text-base flex items-center font-medium">My Orders</h1>
            <NavLink className="text-[#808080] hover:text-secondary pl-4 text-sm">My Returns</NavLink>
            <NavLink className="text-[#808080] hover:text-secondary pl-4 text-sm">My Cancellations</NavLink>
            <h1 className="text-base flex items-center font-medium">My Wishlist</h1>
        </div>
        <div className="flex flex-col gap-6 rounded shadow-md p-4 py-12">
            <div className="flex gap-8">
                <input type="text" placeholder="Your Name" className="bg-textColor p-2"/>
                <input type="email" placeholder="Your Email" className="bg-textColor p-2"/>
                <input type="phone" placeholder="Your Phone" className="bg-textColor p-2"/>
            </div>
            <textarea className="h-[207px] w-[737px] bg-textColor p-4" placeholder="Your Message"></textarea>
            <button className="bg-secondary py-2 px-6 w-56 text-textColor rounded flex items-center justify-center">Send Message</button>
        </div>
    </div>
  )
}
export default Account
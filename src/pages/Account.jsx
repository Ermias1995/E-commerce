import { NavLink } from "react-router-dom"

function Account() {
  return (
    <div className="flex gap-8 px-[135px] my-20 py-10">
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
        <div className="flex flex-col gap-6 rounded shadow-md p-4 py-12 px-10">
            <h1 className="text-xl text-secondary">Edit Your Profile</h1>
            <div className="flex gap-8">
                <div className="flex flex-col">
                  <p>First Name</p>
                  <input type="text" placeholder="Md" className="bg-textColor p-2 w-80"/>
                </div>
                <div className="flex flex-col">
                  <p>Last Name</p>
                  <input type="text" placeholder="Rimel" className="bg-textColor p-2 w-80"/>
                </div>
            </div>
            <div className="flex gap-8">
                <div className="flex flex-col">
                  <p>Email</p>
                  <input type="text" placeholder="rimel1111@gmail.com" className="bg-textColor p-2 w-80"/>
                </div>
                <div className="flex flex-col">
                  <p>Address</p>
                  <input type="text" placeholder="Kingston, 5236, United State" className="bg-textColor p-2 w-80"/>
                </div>
            </div>
            <h1>Password Changes</h1>
            <input type="text" placeholder="Current Passwod" className="bg-textColor p-2 w-[710px]"/>
            <input type="text" placeholder="New Passwod" className="bg-textColor p-2 w-[710px]"/>
            <input type="text" placeholder="Confirm New Password" className="bg-textColor p-2 w-[710px]"/>
            <div className="flex gap-4 justify-end">
              <button className="py-2 px-6 w-56 bg-textColor rounded flex items-center justify-center">Cancel</button>
              <button className="bg-secondary py-2 px-6 w-56 text-textColor rounded flex items-center justify-center">Save Changes</button>
            </div>
        </div>
    </div>
  )
}
export default Account
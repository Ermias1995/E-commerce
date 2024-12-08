import { FaHome,FaShoppingBag } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
function Status() {
  return (
    <div id="2nd section" className="flex items-center justify-center px-[135px] gap-4">
        <div className="flex flex-col items-center gap-2 border rounded bg-textColor hover:text-textColor hover:bg-secondary py-5 px-10">
            <div className="flex items-center justify-center text-4xl bg-black text-white border-8 rounded-full p-2 w-20 h-20"><FaHome/></div>
            <h1 className="text-3xl font-bold">10.5k</h1>
            <p className="text-base">Sallers active our site</p>
        </div>
        <div className="flex flex-col items-center gap-2 border rounded bg-textColor hover:text-textColor hover:bg-secondary py-5 px-10">
            <div className="flex items-center justify-center text-4xl bg-black text-white border-8 rounded-full p-2 w-20 h-20"><FaDollarSign/></div>
            <h1 className="text-3xl font-bold">33k</h1>
            <p className="text-base">Monthly Product Sale</p>
        </div>
        <div className="flex flex-col items-center gap-2 border rounded bg-textColor hover:text-textColor hover:bg-secondary py-5 px-10">
            <div className="flex items-center justify-center text-4xl bg-black text-white border-8 rounded-full p-2 w-20 h-20"><FaShoppingBag/></div>
            <h1 className="text-3xl font-bold">45.5k</h1>
            <p className="text-base">Customer active in our site</p>
        </div>
        <div className="flex flex-col items-center gap-2 border rounded bg-textColor hover:text-textColor hover:bg-secondary py-5 px-10">
            <div className="flex items-center justify-center text-4xl bg-black text-white border-8 rounded-full p-2 w-20 h-20"><GiGymBag/></div>
            <h1 className="text-3xl font-bold">25k</h1>
            <p className="text-base">Annual gross sale in our site</p>
        </div>
    </div>
  )
}
export default Status
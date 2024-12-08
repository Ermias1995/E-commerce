import afgirls from "../assets/afgirls.png";
import { FaHome,FaShoppingBag } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
const Contact = () =>{
    return(
        <div className="flex flex-col mt-36 gap-36">
            <div id="First section" className="flex items-center justify-center pl-[135px] gap-10">
                <div className="flex flex-col gap-16">
                    <h1 className="text-[54px] font-semibold">Our Story</h1>
                    <div className="flex flex-col gap-5 w-[525px]">
                        <p className="text-base">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an 
                        active presense in Bangladesh. Supported by wide range of tailored marketing, data and 
                        service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons 
                        customers across the region. </p>
                        <p className="text-base">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive 
                            offers a diverse assotment in categories ranging  from consumer.</p>
                    </div>
                </div>
                <div className="flex items-center justtify-center">
                    <img src={afgirls} alt="afgirls"/>
                </div>
            </div>
            <div id="2nd section" className="flex items-center justify-center px-[135px] gap-4">
                <div className="flex flex-col items-center gap-2 border rounded bg-textColor hover:text-textColor hover:bg-secondary py-5 px-10">
                    <div className="flex items-center justify-center text-4xl bg-black text-white border-8 rounded-full p-2 w-20 h-20"><FaHome/></div>
                    <h1 className="text-3xl font-bold">10.5k</h1>
                    <p className="text-base">Sallers active our site</p>
                </div>
                <div className="flex flex-col items-center gap-2 border rounded bg-textColor hover:text-textColor hover:bg-secondary py-5 px-10">
                    <div className="flex items-center justify-center text-4xl bg-black text-white border-8 rounded-full p-2 w-20 h-20"><FaHome/></div>
                    <h1 className="text-3xl font-bold">33k</h1>
                    <p className="text-base">Monthly Product Sale</p>
                </div>
                <div className="flex flex-col items-center gap-2 border rounded bg-textColor hover:text-textColor hover:bg-secondary py-5 px-10">
                    <div className="flex items-center justify-center text-4xl bg-black text-white border-8 rounded-full p-2 w-20 h-20"><FaHome/></div>
                    <h1 className="text-3xl font-bold">45.5k</h1>
                    <p className="text-base">Customer active in our site</p>
                </div>
                <div className="flex flex-col items-center gap-2 border rounded bg-textColor hover:text-textColor hover:bg-secondary py-5 px-10">
                    <div className="flex items-center justify-center text-4xl bg-black text-white border-8 rounded-full p-2 w-20 h-20"><FaHome/></div>
                    <h1 className="text-3xl font-bold">25k</h1>
                    <p className="text-base">Annual gross sale in our site</p>
                </div>
            </div>
        </div>
    );
}
export default Contact;
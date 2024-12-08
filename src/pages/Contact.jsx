import afgirls from "../assets/afgirls.png";
const Contact = () =>{
    return(
        <div className="mt-36">
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
        </div>
    );
}
export default Contact;
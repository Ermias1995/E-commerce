import { IoCall } from "react-icons/io5";

const Contact = () =>{
    return(
        <div className="flex gap-5">
            <div className="flex flex-col gap-1 py-8 px-4 rounded shadow-md">
                <h1 className="text-base flex items-center gap-3"><IoCall className="bg-secondary rounded-full text-white p-2 text-3xl"/>Call To Us</h1>
                <p className="text-sm">We are available 24/7, 7 days a week.</p>
                <p className="text-sm">Phone: +8801611112222</p>
                <hr className="my-4"/>
                <h1 className="text-base flex items-center gap-3"><IoCall className="bg-secondary rounded-full text-white p-2 text-3xl"/>Write To Us</h1>
                <p className="text-sm">Fill out our form and we will contact you within 24 hours.</p>
                <p className="text-sm">Emails: customer@exclusive.com</p>
                <p className="text-sm">Emails: support@exclusive.com</p>
            </div>
            <div className=""></div>
        </div>
    );
}
export default Contact;
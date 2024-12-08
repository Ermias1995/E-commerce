import { CiTwitter,CiInstagram,CiLinkedin } from "react-icons/ci";
function Personel({name, title, image}) {
  return (
    <div className="flex flex-col gap-2">
        <div className="bg-textColor rounded p-2">
            <img src={image} alt="Emma watson"/>
        </div>
        <h1 className="text-[32px] font-medium">{name}</h1>
        <p className="text-base">{title}</p>
        <div className="flex gap-2">
            <CiTwitter/>
            <CiInstagram/>
            <CiLinkedin/>
        </div>
    </div>
  )
}
export default Personel;
import LoginPage from "../assets/LoginPage.png";
import google from "../assets/google.png";

function Login() {
  return (
    <div>
      <div className="flex justify-between items-center gap-32 pr-32 mt-14 mb-36 h-[781px]">
        <div className="bg-[#CBE4E8]">
          <img src={LoginPage} alt="Login Page"/>
        </div>
        <div className="flex flex-col justify-start gap-12 w-[370px]">
          <div className="flex flex-col justify-start gap-3">
            <h1 className="text-4xl">Log in to Exclusive</h1>
            <p className="text-base">Enter your detail below</p>
          </div>
          <div className="flex flex-col justify-start gap-10">
            <input type="email" placeholder="Enter Email or Phone Number" className="border-[#808080] border-b-[1px] focus:outline-none"/>
            <input type="text" placeholder="Password" className="border-[#808080] border-b-[1px] focus:outline-none"/>
            <div className="flex justify-between items-center">
              <button className="text-white w-36 py-3 bg-[#EA4335] text-base rounded-[4px]" >Login</button>
              <a className="pl-16 flex gap-2 text-[#EA4335]">Forget Password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
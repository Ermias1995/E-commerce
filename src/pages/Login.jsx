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
            <h1 className="text-4xl">Create an account</h1>
            <p className="text-base">Enter your detail below</p>
          </div>
          <div className="flex flex-col justify-start gap-10">
            <input type="text" placeholder="Name" className="border-[#808080] border-b-[1px] focus:outline-none"/>
            <input type="email" placeholder="Enter Email or Phone Number" className="border-[#808080] border-b-[1px] focus:outline-none"/>
            <input type="text" placeholder="Password" className="border-[#808080] border-b-[1px] focus:outline-none"/>
            <div className="flex flex-col justify-start gap-6">
              <button className="text-white py-3 bg-[#EA4335] text-base w-full rounded-[4px]" >Create Account</button>
              <button className="flex gap-1 items-center justify-center py-3 text-base w-full border border-[#808080] rounded-[4px]"><img src={google} alt="Google" className="w-6 h-6"/>Sign up with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
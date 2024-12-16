import { useDispatch, useSelector } from "react-redux";
import LoginPage from "../assets/LoginPage.png";
import { authActions } from "../redux/authSlice";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(state=>state.auth.error);
  
  const handleSubmit = async(e) =>{
    e.preventDefault();
    
    try {
      const response = await axios.post('https://fakestoreapi.com/auth/login',{
        username: username,
        password,
      });
      console.log(response.data);
      dispatch(authActions.login(response.data));
      navigate('/');
    } catch (error) {
      if(error.response){
        dispatch(authActions.setError(error.response.data.message || 'Login Failed'));
      }else{
        dispatch(authActions.setError('An error occurred. Please try again later.'));
      }
  } }

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
            {error&& <p className="text-red-500">{error}</p>}
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col justify-start gap-10">
            <input type="text" placeholder="Username: mor_2314" onChange={(e)=>setUsername(e.target.value)} className="border-[#808080] border-b-[1px] focus:outline-none"/>
            <input type="text" placeholder="Password: 83r5^_" onChange={(e)=>setPassword(e.target.value)} className="border-[#808080] border-b-[1px] focus:outline-none"/>
            <div className="flex justify-between items-center">
              <button className="text-white w-36 py-3 bg-[#EA4335] text-base rounded-[4px]" type="submit">Login</button>
              <a className="pl-16 flex gap-2 text-[#EA4335]">Forget Password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login
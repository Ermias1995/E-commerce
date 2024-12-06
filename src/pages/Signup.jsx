import { useState } from "react";
import LoginPage from "../assets/LoginPage.png";
import google from "../assets/google.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Signup() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) =>{
    preventDefault();

    const userData = {
      email,
      username: email.split('@')[0], // Use the email prefix as the username
      password,
      name: {
        firstname: name.split(' ')[0], // Assuming first name is first part
        lastname: name.split(' ')[1] || '', // Assuming last name is second part
      },
      address: {
        city: 'Addis Ababa', // Placeholder for city
        street: '5kilo', // Placeholder for street
        number: 1, // Placeholder for number
        zipcode: '1000', // Placeholder for zipcode
        geolocation: {
          lat: '-37.3159', // Example latitude
          long: '81.1496', // Example longitude
        },
      },
      phone: '000-000-0000', // Placeholder for phone
    };

    try {
      const response = await axios.post('https://fakestoreapi.com/users', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log("User cretaed:",response.data);
      navigate('/login');
    } catch (error) {
      if (error.response) {
        dispatch(authActions.setError(error.response.data.message || 'Signup Failed'));
      }else{
        dispatch(authActions.setError('An error occurred. Please try again later.'));
      }
    }
  };
  
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
        <form className="flex flex-col justify-start gap-10" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} className="border-[#808080] border-b-[1px] focus:outline-none"/>
          <input type="email" placeholder="Enter Email or Phone Number" onChange={(e)=>setEmail(e.target.value)} className="border-[#808080] border-b-[1px] focus:outline-none"/>
          <input type="text" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} className="border-[#808080] border-b-[1px] focus:outline-none"/>
          <div className="flex flex-col justify-start gap-6">
            <button className="text-white py-3 bg-[#EA4335] text-base w-full rounded-[4px]" >Create Account</button>
            <button className="flex gap-1 items-center justify-center py-3 text-base w-full border border-[#808080] rounded-[4px]"><img src={google} alt="Google" className="w-6 h-6"/>Sign up with Google</button>
            <p className="text-[#808080] pl-16 flex gap-2">Already have account?<NavLink to="/login" className="underline font-medium">Log in</NavLink></p>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
export default Signup
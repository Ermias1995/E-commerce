import { NavLink } from "react-router-dom"
function Error() {
  return (
    <div className="flex flex-col items-center justify-center my-52 gap-6">
      <h1 className="text-8xl">404 Not Found</h1>
      <p>Your visited page not found. You may go home page.</p>
      <NavLink to='/' className="flex justify-center items-center text-white w-64 py-3 mt-10 bg-[#EA4335] text-base rounded-[4px]">Back to home page</NavLink>
    </div>
  )
}
export default Error
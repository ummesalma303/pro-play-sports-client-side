import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'


const Navbar = () => {
    const {user,signOutUser} = useContext(AuthContext)
    const [theme,setTheme] = useState('light')

    const link =<>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/addEquipment'>Add Equipment</NavLink>
    <NavLink to='/allEquipment'>All Equipment</NavLink>
   {
    user&& <NavLink to='/myEquipments'>My Equipment</NavLink>
   }
    </>


const toggleTheme=()=>{
  setTheme(theme==='light'?'dark':'light')
}
useEffect(()=>{
  document.querySelector('html').setAttribute("data-theme",theme)
},[theme])



    return (
       <div className="bg-blue-400 ">
         <div className="w-11/12 mx-auto">
          <div className='navbar  '>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10 `}>
             
              {link}
            </ul>
          </div>
          <a className="btn btn-ghost md:text-xl -ml-6 text-white ">Pro Play Sports</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-5 text-white">
            
            {link}
          </ul>
        </div>
      


       <div className="navbar-end ">
      <div className="">
      {
        user?<div className="flex space-x-2 ">
        <img data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} className="w-10 h-10 md:w-14 md:h-14 rounded-full" src= {user?.photoURL} alt="" /><Tooltip id="my-tooltip" /> <button className="bg-white rounded-md px-2 md:px-auto md:btn" onClick={signOutUser}>Log Out</button>
        </div>: <div className=" space-x-2 mr-5">
        <NavLink to='/register' className="btn">Register</NavLink>
        <NavLink to='/login' className="btn hidden md:inline-flex">Login</NavLink>
        </div>
    
       }
      </div>

<div className="">
<label className="grid cursor-pointer place-items-center ">
  <input
    type="checkbox"
    value="synthwave"
    className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" onClick={toggleTheme}  />
  <svg
    className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <svg
    className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>

</div>
      
  </div>
       
      </div>
        </div>
       </div>
    );
};

export default Navbar;
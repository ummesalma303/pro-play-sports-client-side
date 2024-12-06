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
          <div className={`navbar  ${theme==='dark'?"text-white":"text-black"}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className={`menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow ${theme==='light'?"text-black":"text-black"} z-10`}>
             
              {link}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl -ml-6 md:-ml-0 hidden md:block">Pro Play Sports</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-5">
            
            {link}
          </ul>
        </div>
      


       <div className="navbar-end">
       {
        user?<div className="flex space-x-2 ">
        <img data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} className="w-14 h-14 rounded-full" src= {user?.photoURL} alt="" /><Tooltip id="my-tooltip" /> <button className="btn" onClick={signOutUser}>Log Out</button>
        </div>: <div className=" space-x-2">
        <NavLink to='/register' className="btn">Register</NavLink>
        <NavLink to='/login' className="btn">Login</NavLink>
        </div>
    
       }

<div className="">

<input type="checkbox" value="synthwave" onClick={toggleTheme} className="toggle theme-controller" />
</div>
      
  </div>
       
      </div>
        </div>
       </div>
    );
};

export default Navbar;
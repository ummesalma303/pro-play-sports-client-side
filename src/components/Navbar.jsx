// import { useContext } from "react";
import { NavLink } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    // const data = useContext(AuthContext)
    // console.log(data)
    const link =<>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/addEquipment'>Add Equipment</NavLink>
    <NavLink to='/allEquipment'>All Equipment</NavLink>
    <NavLink to='/myEquipment'>My Equipment</NavLink>
    </>
    return (
        <div className="navbar bg-blue-400 text-white px-12">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow text-black z-10">
             
              {link}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl -ml-6 md:-ml-0">Pro Play Sports</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-5">
            
            {link}
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          <NavLink to='/register' className="btn">Register</NavLink>
          <NavLink to='/login' className="btn">Login</NavLink>
        </div>
      </div>
    );
};

export default Navbar;
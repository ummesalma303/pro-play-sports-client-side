import { useContext } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    
    return (
        <div >
            <NavLink to='/' className="btn btn-primary">home</NavLink>
            i am nav.
        </div>
    );
};

export default Navbar;
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { myContext } from "../../../contextApi/Authcontext";
import logo from '../../../assest/icon.png'

const Navbar = () => {
  const { user ,logOut} = useContext(myContext);

  const menulist = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      
       
      
      {user?.email? <>
        <li>
        <Link to="/dashbord">Dashboard</Link>
      </li>
      <button onClick={logOut}> Logout </button>
      </>
      :
      <li>
      <Link className="btn btn-primary text-lime-50 rounded-[10px] mx-0 md:mx-2" to="/login">login</Link>
    </li>
      
    }

      {

      }
    </React.Fragment>
  );

  return (
    <div className="navbar bg-[#e2f7ff] py-4 rounded-md flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <div className="h-5 w-5">
              {" "}
              <FaBars />{" "}
            </div>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menulist}
          </ul>
        </div>
       <div className="flex items-center">
        <img src= {logo} className ="w-[40px] " alt="" />
       <Link to="/" className="btn btn-ghost bg-slate-100  normal-case text-xl md:text-2xl">
          ICM Bangladesh
        </Link>
       </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menulist}</ul>
       
      </div>
      <label
          tabIndex={2}
          htmlFor="my-drawer"
          className="btn btn-ghost lg:hidden"
        >
          <div className="h-5 w-5">
            {" "}
            <FaBars />{" "}
          </div>
        </label>
    </div>
  );
};

export default Navbar;

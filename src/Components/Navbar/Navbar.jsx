import React, { useContext } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import logo from '../../../public/logo.jpg'
import Theme from "../../Pages/Theme";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Navbar = () => {
  const {user,signOutUser} = useContext(AuthContext)
  const list = (
    <>
      <li>
      <NavLink to='/'>Home</NavLink>
      </li>

      <li>
      <NavLink to='/all-foods'>All Foods</NavLink>
      </li>
      <li>
      <NavLink to='/gallery'>Gallery</NavLink>
      </li>
    </>
  );


  const handleSignOut =()=>{
    signOutUser()
    toast.success('Logout successful' ,{position: "top-center",
      autoClose: 2000,})
  }

  return (

    <div className="navbar bg-base-200">
      <Tooltip anchorSelect=".my-anchor-element" place="top">
        Click It For Change Theme
      </Tooltip>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {list}
          </ul>
        </div>
        <img src={logo} className="w-10 rounded-full" alt="" />
        <a className=" btn-sm lg:btn lg:btn-ghost  lg:text-xl text-sm"><span className="text-amber-500">Nova</span> Restaurant</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {list}
        </ul>
      </div>

      <div className="navbar-end gap-2">


      {
        user?
         <>
          <Theme></Theme>
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt='photo'
            src={user?.photoURL}/>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <Link to={`/myFoods/${user.email}`} className="justify-between">
            My Foods
            {/* <span className="badge">New</span> */}
          </Link>
        </li>
        <li><Link to='/add-item'>Add Foods</Link></li>
        <li><Link to={`/myOrders/${user.email}`} >My Orders</Link></li>
      </ul>
    </div>


    <div className="">
        <Link to=''>
        <button 
        onClick={handleSignOut} 
         className="btn btn-neutral ">Logout</button></Link>
      </div>
        </>
        :
        <>
        <Theme></Theme>
        <Link to='/login' className="btn-sm btn btn-neutral lg:btn lg:btn-neutral">Login</Link>
        </>
      }



        
      </div>
    </div>
  );
};

export default Navbar;

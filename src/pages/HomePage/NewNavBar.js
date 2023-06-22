import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function NewNavBar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (

    <nav className="w-full bg-green-700 text-white shadow sticky top-0 h-20">

<div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
      <img src="../assets/EARM_LogoTypeWhite.svg" alt="" width={200} />        
        </h1>
      <ul className="hidden md:flex">
        <li className="p-4"><Link to={"/"}>Home</Link></li>
        <li className="p-4"> <Link to="/blogs">Blogs</Link></li>
        <li className="p-4"> <Link to="/ourservices">Services</Link></li>
        <li className="p-4"> <Link to={"/about"}>About US</Link></li>
        <li className="p-4"><Link to="/contact">Contact US</Link></li>
        <li className="p-4"><Link to="/gallery">Gallery</Link></li>
        <li className="p-4"> <Link to="/login">Log In</Link></li>
        <li className="p-4">signUp</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">Company</li>
        <li className="p-4 border-b border-gray-600">Resources</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
    </nav>
  );
}

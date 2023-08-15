import React, { useState } from "react";
import { Close, Menu } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const location = useLocation(); // Get the current URL location
  const activeNavItem = location.pathname.substring(1); // Extract the active segment from the URL

  const handleNav = () => {
    setNav(!nav);
  };

  const NavItem = ({ to, children, handleNav }) => (
    <Link to={to} onClick={handleNav}>
      <li
        className={`p-4 cursor-pointer ${
          activeNavItem === to
            ? "text-[#000]"
            : "hover:text-[#000] text-[#D60B64]"
        }`}
      >
        {children}
      </li>
    </Link>
  );

  return (
    <nav className="flex justify-between items-center h-24 w-full mx-auto px-4 md:px-36 text-[#D60B64] font-bold bg-transparent">
       <h1 className="w-full text-3xl font-bold text-[#D60B64]">Pink Beauty</h1>
    
      <ul className="hidden md:flex mx-auto ">
        <NavItem to="home">Home</NavItem>
        <NavItem to="journey">Business</NavItem>
        <NavItem to="skills">Products</NavItem>
        <NavItem to="projects">SCC</NavItem>
        <NavItem to="blog">Consultation</NavItem>
      </ul>
      <div onClick={handleNav} className="block md:hidden ml-auto">
        {nav ? <Close size={20} /> : <Menu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#FEE5F0] ease-in-out duration-500 p-6 font-bold"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <NavItem handleNav={handleNav} to="home">
          Home
        </NavItem>
        <NavItem handleNav={handleNav} to="journey">
          Business
        </NavItem>
        <NavItem handleNav={handleNav} to="skills">
          Products
        </NavItem>
        <NavItem handleNav={handleNav} to="projects">
          SCC
        </NavItem>
        <NavItem handleNav={handleNav} to="blog">
          Consultation
        </NavItem>
      </ul>
    </nav>
  );
}

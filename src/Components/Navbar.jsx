import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ProfilePicture from "../Assets/profilepicture.png";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justified-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={ProfilePicture} alt="Profile Pic" style={{ width: "50px" }} />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Experience</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div className="md:hidden">
        <FaBars />
      </div>

      {/* Mobile Menu */}
      <ul className="absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center">
        <li>Home</li>
        <li>About</li>
        <li>Experience</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;

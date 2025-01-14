import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "Work", to: "work" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-[1000px] mx-auto px-8 py-4 flex justify-between items-center">
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              className="text-gray-600 hover:text-black cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white border-t px-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              className="block py-2 text-gray-600 hover:text-black hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

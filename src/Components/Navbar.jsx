import React, { useState } from "react";
import { Link } from "react-scroll";
import { useTheme } from "../Components/ThemeContext";
import { IoIosMoon, IoIosSunny } from "react-icons/io";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "Work", to: "work" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 transition-colors duration-200">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-8 py-4 flex justify-between items-center relative">
        <div className="flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white cursor-pointer transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <IoIosSunny className="text-white w-6 h-6 sm:w-8 sm:h-8" />
          ) : (
            <IoIosMoon className="text-gray-600 w-6 h-6 sm:w-8 sm:h-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white/95 dark:bg-gray-900/95 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-[1000px] mx-auto px-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                className="block py-3 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

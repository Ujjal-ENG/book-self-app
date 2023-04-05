import React, { useState } from "react";
import { AiFillThunderbolt, AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:mx-20 mx-0 p-3 flex items-center justify-between">
      {/* logo item */}
      <Link
        className="flex items-center justify-center gap-2 lg:text-3xl text-xl tracking-wide font-bold"
        to="/"
      >
        <AiFillThunderbolt className="text-blue-600" />
        <span className="text-gray-800">ProgrammingBooks</span>
      </Link>
      {/* NavItem */}
      <ul className="items-center text-2xl font-bold hidden space-x-8 lg:flex">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Home
        </NavLink>
        <NavLink
          to="/books"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Books
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          About
        </NavLink>
      </ul>

      {/* Mobile Menu Navbar section */}
      <div className="lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          onClick={() => setIsOpen(!isMenuOpen)}
        >
          <HiOutlineMenuAlt3 className="text-2xl text-gray-600 duration-500 transition-all" />
        </button>

        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full z-10">
            <div className="p-5 bg-white border rounded shadow-sm">
              {/* Logo & Button section */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Link to="/" className="inline-flex items-center">
                    <AiFillThunderbolt className="text-2xl text-blue-500" />
                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                      ProgrammingBooks
                    </span>
                  </Link>
                </div>
                {/* Dropdown menu close button */}
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    onClick={() => setIsOpen(!isMenuOpen)}
                  >
                    <AiOutlineClose className="text-2xl text-gray-600" />
                  </button>
                </div>
              </div>
              {/* Mobile Nav Items Section */}
              <nav>
                <ul className="space-y-4">
                  <li>
                    <Link to="/" className="default">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/books"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                    >
                      Books
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                    >
                      About Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

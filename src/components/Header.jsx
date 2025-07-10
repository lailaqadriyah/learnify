import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo & Hamburger */}
        <div className="flex items-center space-x-2">
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <Link to="/" className="flex items-center">
            <img
              src="/src/img/learnifylogo.png"
              alt="Learnify Logo"
              className="h-12"
            />
          </Link>
        </div>

        {/* Search bar */}
        <div className="flex-grow max-w-sm mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Cari"
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
            />
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Menu kanan */}
        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-black font-medium">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-black font-medium">
            About
          </Link>
          <FaUserCircle className="w-6 h-6 text-gray-600" />
        </nav>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="bg-white px-4 pt-2 pb-4 shadow space-y-4">
          <Link to="/" className="block text-gray-700 hover:text-black font-medium">
            Home
          </Link>
          <Link to="/about" className="block text-gray-700 hover:text-black font-medium">
            About
          </Link>
          
        </div>
      )}
    </header>
  );
}

export default Header;

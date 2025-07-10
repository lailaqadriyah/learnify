import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';

function Header() {
    return(
        <header className="bg-white-900 text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/src/img/learnifylogo.png" alt="Learnify Logo" className="h-12 mr-2" />
          </Link>
        </div>

        <div className="flex-grow max-w-sm mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari"
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
            />
           <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-black font-medium">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-black font-medium">About</Link>
          <button className="p-2 rounded-full hover:bg-white-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
           <FaUserCircle className="w-6 h-6 text-gray-300" />

          </button>
        </nav>
      </div>
    </header>
    )
}

export default Header;
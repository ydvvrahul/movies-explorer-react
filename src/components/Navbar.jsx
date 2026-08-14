import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


  return (
    <nav className="min-w-full h-2/15  bg-slate-900 text-white shadow-lg fixed top-0 z-50 border-b border-slate-800 flex items-center justify-around w-full mx-auto px-4 sm:px-6 lg:px-8">
     
          
          {/* Logo / Brand Name */}
          <div className="flex items-center  space-x-2 cursor-pointer">
            <span className="text-2xl">🎬</span>
            <h1 className="text-xl sm:text-2xl font-bold bg-linear-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
              Movie Explorer
            </h1>
          </div>

          {/* Navigation Links */}
          <div className=" min-w-3xl flex items-center justify-around space-x-6 sm:space-x-8">
            <Link
              to="/"
              className="text-sm cursor-pointer sm:text-base font-medium transition-colors duration-200 hover:text-gray-300 "
            >
              Home
            </Link>

            <Link
             to="/about"
              className="text-sm sm:text-base cursor-pointer font-medium transition-colors duration-200 hover:text-gray-300 "
            >
              About
            </Link>
          </div>

        
    </nav>
  );
};

export default Navbar;
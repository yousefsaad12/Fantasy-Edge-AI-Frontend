import React from 'react'
import '../components/Navbar.css'
export default function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-[#37003c] to-[#da0043] p-4 flex justify-between items-center">
        <div className="logo">
          <a
            className="relative px-4 py-2 md:px-6 md:py-3.5 lg:px-10 lg:py-4 group bg-gradient-to-r from-[#37003c] to-[#da0043] hover:bg-gradient-to-r hover:from-[#da0043] hover:to-[#37003c] text-white transition-all ease-out duration-300 rounded overflow-hidden"
            href="#"
          >
            <span
              className="absolute right-0 w-6 md:w-8 lg:w-10 h-full top-0 transition-all duration-1000 transform translate-x-8 md:translate-x-10 lg:translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-28 md:group-hover:-translate-x-32 lg:group-hover:-translate-x-36 ease"
            ></span>
            <span className="relative text-sm md:text-lg lg:text-xl capitalized font-semibold">
              Fantasy Football AI
            </span>
          </a>
        </div>

        <div className="flex space-x-4 md:space-x-4 lg:space-x-8 text-white">
        <a href="#" className="text-sm md:text-sm lg:text-base hover:text-gray-300">Recommendation</a>
        <a href="#" className="text-sm md:text-sm lg:text-base hover:text-gray-300">Analyze</a>
      </div>

          <div>
          <button className="bg-[#4CAF50] hover:bg-[#3e8e41] text-white font-bold py-2 px-4 text-sm md:text-base lg:text-lg md:py-3 md:px-6 lg:py-4 lg:px-8 rounded">
            Login
            </button>
          </div>
        </nav>
      );
    };
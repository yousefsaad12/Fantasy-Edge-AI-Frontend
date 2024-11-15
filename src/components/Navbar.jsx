import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="p-3 sm:p-4 flex items-center justify-between w-full max-w-full overflow-hidden">
            {/* Logo */}
            <div className="flex-none">
                <a
                    className="relative font-extrabold px-2 py-1 sm:px-2 sm:py-2 md:px-4 md:py-3.5 lg:px-6 lg:py-4 group bg-gradient-to-r from-[#37003c] to-[#da0043] hover:bg-gradient-to-r hover:from-[#da0043] hover:to-[#37003c] text-white transition-all ease-out duration-300 rounded-3xl overflow-hidden"
                    href="#"
                >
                    <span
                        className="absolute right-0 w-4 sm:w-5 md:w-6 lg:w-7 h-full top-0 transition-all duration-1000 transform translate-x-6 sm:translate-x-6 md:translate-x-8 lg:translate-x-10 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-28 sm:group-hover:-translate-x-24 md:group-hover:-translate-x-32 lg:group-hover:-translate-x-36 ease"
                    ></span>
                    <span className="relative text-xs sm:text-sm md:text-lg lg:text-xl">
                        FANTASY EDGE AI
                    </span>
                </a>
            </div>

            {/* Center Links (visible only on medium and larger screens) */}
            <div className="hidden md:flex flex-grow items-center justify-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 text-[#37003c]">
                <Link to="/" className="menu__link text-xs sm:text-sm md:text-base lg:text-lg hover:text-gray-300">Home</Link>
                <Link to="/recommendation" className="menu__link text-xs sm:text-sm md:text-base lg:text-lg hover:text-gray-300">Recommendation</Link>
                <Link to="#" className="menu__link text-xs sm:text-sm md:text-base lg:text-lg hover:text-gray-300">Analyze</Link>
            </div>

            {/* Login Button (visible on all screens) */}
            <div className="flex items-center space-x-2">
                <a href="/Login" className="bg-[#37003c] w-20 sm:w-24 h-8 flex items-center justify-center rounded-3xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#6d0044] before:to-[#a7006c] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-white text-xs sm:text-sm">
                    Login
                </a>


                {/* Menu Icon with rotation animation */}
                <button
                    className={`text-[#37003c] text-lg md:hidden focus:outline-none transform transition-transform duration-300 ${
                        isDropdownOpen ? 'rotate-90' : ''
                    }`}
                    onClick={toggleDropdown}
                >
                    {isDropdownOpen ? <FaTimes /> : <FaBars />} {/* Toggle between hamburger and X icon */}
                </button>
            </div>

            {/* Dropdown Menu with scale and fade-in animation */}
            <div
                className={`absolute top-16 right-0 bg-white shadow-lg rounded-lg w-40 md:hidden transform transition-all duration-300 ease-out ${
                    isDropdownOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                }`}
            >
                <Link to="/" className="block px-4 py-2 text-sm text-[#37003c] hover:bg-gray-100">Home</Link>
                <Link to="/recommendation" className="block px-4 py-2 text-sm text-[#37003c] hover:bg-gray-100">Recommendation</Link>
                <Link to="#" className="block px-4 py-2 text-sm text-[#37003c] hover:bg-gray-100">Analyze</Link>
            </div>
        </nav>
    );
}

import React from 'react'
import '../components/Navbar.css'
export default function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-[#37003c] to-[#da0043] p-4 flex items-center flex-row">
            <div className="flex-none">
                <a
                    className="relative font-extrabold px-2 py-2 md:px-4 md:py-3.5 lg:px-6 lg:py-4 group bg-gradient-to-r from-[#37003c] to-[#da0043] hover:bg-gradient-to-r hover:from-[#da0043] hover:to-[#37003c] text-white transition-all ease-out duration-300 rounded-3xl overflow-hidden w-6 "
                    href="#"
                >
                    <span
                        className="absolute right-0 w-5 md:w-6 lg:w-7 h-full top-0 transition-all duration-1000 transform translate-x-6 md:translate-x-8 lg:translate-x-10 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-28 md:group-hover:-translate-x-32 lg:group-hover:-translate-x-36 ease"
                    ></span>
                    <span className="relative text-sm md:text-lg lg:text-xl ">
                        FANTASY EDGE AI
                    </span>
                </a>
            </div>

            <div className="flex-grow flex items-center justify-center space-x-4 md:space-x-6 lg:space-x-8 text-white lg:mr-10">
                <a href="#" className=" menu__link text-sm md:text-sm lg:text-lg hover:text-gray-300">Home</a>
                <a href="#" className=" menu__link text-sm md:text-sm lg:text-lg hover:text-gray-300">Recommendation</a>
                <a href="#" className=" menu__link text-sm md:text-sm lg:text-lg hover:text-gray-300">Analyze</a>
            </div>

            <div className="flex-none lg:ml-2">
            <button class=" bg-[#37003c] lg:w-32 lg:h-7 sm:text-sm sm:w-24 sm:h-8 md:w-28 md:h-8 flex items-center justify-center rounded-3xl cursor-pointer relative 
            overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full 
            before:w-full before:h-full before:bg-gradient-to-r before:from-[#6d0044] before:to-[#a7006c]  before:transition-all before:duration-500 
            before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
            Login
            </button>
            </div>
        </nav>
    );
};
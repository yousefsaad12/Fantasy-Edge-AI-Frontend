import React from 'react'
import '../components/Navbar.css'
export default function Navbar() {
    return (
       < nav className="p-3 sm:p-4 flex items-center justify-between w-full max-w-full overflow-hidden">
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

    <div className="  flex-grow flex items-center justify-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 text-[#37003c]">
        <a href="#" className=" menu__link text-xs sm:text-sm md:text-base lg:text-lg hover:text-gray-300">Home</a>
        <a href="#" className=" menu__link text-xs sm:text-sm md:text-base lg:text-lg hover:text-gray-300">Recommendation</a>
        <a href="#" className=" menu__link text-xs sm:text-sm md:text-base lg:text-lg hover:text-gray-300">Analyze</a>
    </div>

    <div className="flex-none">
        <button className="bg-[#37003c] sm:w-full sm:h-8 md:w-28 md:h-8 lg:w-32 lg:h-8 flex items-center justify-center rounded-3xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#6d0044] before:to-[#a7006c] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-white text-xs sm:text-sm md:text-base">
            Login
        </button>
    </div>
</nav>
    );
};
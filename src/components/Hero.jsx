import React from 'react'
import  '../components/Hero.css'
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center justify-between pt-10 pr-10 pl-10 mt-20 md:mt-32  lg:mt-32 ">

        {/* Text Section */}
        <div className="text-center md:text-left space-y-6">

          {/* Typing Animation */}
          
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              // wait 1s before replacing "Mice" with "Hamsters"

              1000,
              'Build Your Dream Team with Fantasy Edge AI Powered by Smart AI Predictions.',
              1000
            ]}
            wrapper="h1"
            speed={50}
            repeat={4}
            className='inline-block bg-gradient-to-br from-[#37003c] to-[#da0043] bg-clip-text text-transparent text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-wide leading-relaxed mb-2 pb-5'
          />
              
          

          {/* Description */}
          <p className="text-[#37003c] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed pt-10 pb-10">
            Transform your fantasy football experience with Fantasy Edge AI. 
            Our advanced analytics and real-time predictions help you make informed decisions, 
            optimize your lineup, and build your dream team. Whether you’re a seasoned player or just getting started, 
            our expert recommendations and insights are designed to give you the competitive edge you need to succeed. 
            Elevate your game and stay ahead of the curve with the ultimate fantasy football tool.
          </p>

          {/* Button */}
          <button className="bg-[#37003c] rounded-full w-32 h-12 lg:text-2xl lg:font-extrabold text-gray-200 lg:w-80 lg:h-14 md:w-1/2 md:h-12 sm:w-full sm:h-12 transform transition duration-300 hover:scale-105 hover:bg-[#a7006c] ">
            Start Now <i className="fa-solid fa-futbol"></i>
          </button>
        </div>

      {/* Image Section */}
      <div className="flex items-center justify-center m-4">
        <img 
          src='../utilities/HeroImag.webp' 
          alt="Fantasy Football AI" 
          className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl object-cover rounded-3xl border border-gray-300 shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105" 
        />
      </div>
    </div>

  );
}

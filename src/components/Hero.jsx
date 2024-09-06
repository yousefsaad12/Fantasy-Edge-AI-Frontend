import React from 'react'
import  '../components/Hero.css'
export default function Hero() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-16 items-center justify-between p-10 mt-10 mb-10">
      
      {/* Text Section */}
      <div className="text-center md:text-left space-y-6">
        <h1 className="bg-gradient-to-br from-pink-100 to-pink-800 bg-clip-text text-transparent text-4xl sm:text-2xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Build Your <span className='gradient-text text-4xl font-bold'>Dream Team </span>with Fantasy Edge AI Powered by Smart AI Predictions.
        </h1>
        
        <p className="text-gray-200 text-base sm:text-sm md:text-base lg:text-lg leading-relaxed">
          Transform your fantasy football experience with Fantasy Edge AI. 
          Our advanced analytics and real-time predictions help you make informed decisions, 
          optimize your lineup, and build your dream team. Whether you’re a seasoned player or just getting started, 
          our expert recommendations and insights are designed to give you the competitive edge you need to succeed. 
          Elevate your game and stay ahead of the curve with the ultimate fantasy football tool.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex items-center justify-center  p-4">
        <img 
          src='../utilities/HeroImag.webp' 
          alt="Fantasy Football AI" 
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl object-cover rounded-3xl border border-gray-300 shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105" 
        />
    </div>

    </div>
  )
}
import React from "react";
import { motion } from "framer-motion";
import { featuresData } from "../assets/FeatureData";

export default function Features() {
  
  return (
    <div className="relative py-16 lg:py-32 mt-44 lg:mb-32 sm:mb-10 md:mb-5">
    {/* Central vertical bar - hidden on small screens */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-tr from-[#37003c] to-[#da0043] bg-clip-text text-transparent mb-32 ">
        Explore Our Fantasy Football Features
    </h2>

    <div className="absolute left-1/2 transform -translate-x-1/2 h-4/5 w-px bg-gradient-to-b from-[#37003c] to-[#da0043] hidden md:block"></div>
  
    <div className="w-11/12 lg:w-10/12 xl:w-[1200px] mx-auto space-y-16">
      {featuresData.map((feature, index) => (
        <motion.div
          key={index}
          className={`flex flex-col items-center justify-center md:justify-between ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-full md:w-1/3 text-center md:text-left space-y-4 px-4 sm:px-0">
            <h3 className="font-semibold text-xl md:text-2xl text-[#37003c]">
              {feature.title}
            </h3>
            <p className="text-[#37003c] text-sm sm:text-base">
              {feature.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
  

  );
}

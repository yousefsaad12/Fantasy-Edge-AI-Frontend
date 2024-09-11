import React from 'react'
import Card from './Card'

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


export default function Review() {

    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.2,    // Trigger when 20% of the element is visible
    });

    useEffect(() => {
        if (inView) {
        controls.start("visible");
        }
    }, [controls, inView]);


  return (
   
    <div class=" mt-32">

  <section class="max-w-5xl mx-auto w-full px-10 py-10">
    <div class="flex items-center justify-center flex-col gap-y-2 py-5">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold max-w-md mx-auto text-center text-white">Here's what our
        <span class="text-[#45B3BA]">customers</span> have to say
      </h2>
      <p class="text-lg font-medium text-slate-400/70">Discover how our service can benefit you</p>
      
    </div>

    <motion.div
      ref={ref}  // Reference for the intersection observer
      className="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full"
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.3, // Stagger effect between cards
          },
        },
        hidden: {},
      }}
    >
      {["col-span-2", "col-span-3", "col-span-3", "col-span-2"].map((spanSize, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.5 }}
          className={spanSize}
        >
          <Card title="sdad" comment="okoamfs" />
        </motion.div>
      ))}
    </motion.div>
   
    </section>
    </div>
  )
}

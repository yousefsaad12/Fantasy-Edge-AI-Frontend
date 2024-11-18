import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#37003c] to-[#da0043] text-white mt-48">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-6 sm:px-6 lg:px-8">
        {/* Project Description */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-xl font-semibold text-[#ffccd5]">Fantasy Edge AI</h2>
          <p className="mt-2 text-[#f0b0bc] text-sm">
            Unleash your potential with AI-driven insights and edge over the competition in Fantasy Premier League.
            Join our community of passionate managers, get real-time recommendations, and make smarter decisions.
          </p>
        </motion.div>

        {/* Footer Links */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center mt-6 -mx-5 -my-2"
        >
          {['Home', 'Features', 'Contact Us', 'Reviews'].map((item) => (
            <div key={item} className="px-4 py-2">
              <a href="#" className="text-base leading-6 text-[#ffc1d3] hover:text-white">
                {item}
              </a>
            </div>
          ))}
        </motion.nav>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-center"
        >
          <h3 className="text-lg font-medium text-[#ffccd5]">Stay Ahead of the Game</h3>
          <p className="text-[#f0b0bc] text-sm">Sign up for weekly updates, player insights, and special offers!</p>
        </motion.div>

        {/* Social Proof / Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center mt-6 space-x-4 text-xs text-[#f0b0bc]"
        >
          <p>Join 5,000+ FPL managers using AI insights</p>
          <span className="inline-block w-px h-4 bg-[#f0b0bc]" aria-hidden="true"></span>
          <p>98% satisfaction from our users</p>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-6 text-center text-[#e8a0b2] text-xs"
        >
          © {new Date().getFullYear()} Fantasy Premier Edge. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}

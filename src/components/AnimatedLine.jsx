// AnimatedLine.js
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLine = ({ isVisible }) => {
  return (
    <motion.div
      className="absolute left-0 top-0 w-1 bg-violet-600"
      initial={{ height: 0 }} // Start with height 0
      animate={{ height: isVisible ? '100%' : 0 }} // Animate to full height when visible
      transition={{ duration: 0.5 }} // Animation duration
    />
  );
};

export default AnimatedLine;

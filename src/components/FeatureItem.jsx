// FeatureItem.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedLine from './AnimatedLine';

const FeatureItem = ({ title, description, index, onScrollIn }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const rect = document.getElementById(`feature-${index}`).getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      setIsVisible(true);
      onScrollIn(); // Notify parent that this item is visible
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id={`feature-${index}`} className="relative flex flex-col justify-center items-center h-screen p-8 text-center">
      <AnimatedLine isVisible={isVisible} />
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slightly below
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }} // Animate based on visibility
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-4xl font-semibold">{title}</h3>
        <p className="mt-5 text-lg">{description}</p>
      </motion.div>
    </div>
  );
};

export default FeatureItem;

import React, { useEffect } from 'react';
import Card from './Card';
import reviews from '../assets/Data'; // Ensure this path is correct
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Review() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2,    // Trigger when 20% of the element is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className="mt-64 mb-64">
      <section className="max-w-5xl mx-auto w-full px-10 py-10">
        <div className="flex items-center justify-center flex-col gap-y-2 py-5 w-full max-w-5xl mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#37003c] mb-3">
            Discover why players 
            <span className="bg-gradient-to-br from-[#37003c] to-[#da0043] bg-clip-text text-transparent"> TRUST</span> Fantasy Edge AI for success.
          </h2>
          <p className="text-lg text-center font-medium text-[#37003c]">
            Discover how our service can benefit you
          </p>
        </div>

        <motion.div
          ref={ref}  // Apply the ref here for intersection observer
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
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
              className={review.spanSize}
            >
              <Card name={review.name} comment={review.comment} from={review.from} spanSize={review.spanSize} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
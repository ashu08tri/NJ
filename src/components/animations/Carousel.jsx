import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for left-to-right, -1 for right-to-left

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(currentIndex === images.length - 1 ? -1 : 1); // Set direction based on index
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const slideVariants = {
    enter: (direction) => ({
      width: '100vw',
      x: direction > 0 ? '100vw' : '-100vw', // New image enters from the right or left
      opacity: 1,
    }),
    center: {
      width: '100vw',
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      width: '100vw',
      x: direction > 0 ? '-50vw' : '50vw', // Previous image moves slightly out
      opacity: 0,
    }),
  };

  const transition = { duration: 1, ease: 'easeInOut' };

  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence>
        {/* Render the previous image */}
        <motion.div
          key={currentIndex}
          className="absolute top-0 left-0 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
          initial="enter"
          animate="center"
          exit="exit"
          variants={slideVariants}
          custom={direction}
          transition={transition}
        >
          {/* Full Gradient Overlay */}
        </motion.div>

        {/* Render the next image */}
        <motion.div
          key={nextIndex}
          className="absolute top-0 left-0 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${images[nextIndex]})` }}
          initial="enter"
          animate="center"
          exit="exit"
          variants={slideVariants}
          custom={direction}
          transition={transition}
        >
          {/* Full Gradient Overlay */}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;

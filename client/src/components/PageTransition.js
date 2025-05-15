import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    // x: '-100vw', // Example: slide in from left
  },
  in: {
    opacity: 1,
    // x: 0,
  },
  out: {
    opacity: 0,
    // x: '100vw', // Example: slide out to right
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4 // Adjust duration as needed
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ position: 'relative' }} // Important if pages have different heights or absolute elements
    >
      {children}
    </motion.div>
  );
};

export default PageTransition; 
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function SlideReveal({bgColor}) {
  // Ref to track the component's visibility
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once when in view

  return (
    <motion.div
      ref={ref} // Attach the ref to the div
      initial={{ x: 0 }} 
      animate={{ x: isInView ? ['-100%', '0%', '100%'] : '-100%' }} 
      transition={{ duration: 2, ease: [0.2, 1, 0.2, 1] }} 
      className='w-full h-full absolute top-0 left-0 z-50'
      style={{backgroundColor: bgColor}}
    />
  );
}

export default SlideReveal;

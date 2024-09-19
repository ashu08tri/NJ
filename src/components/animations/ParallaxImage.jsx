import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ParallaxImage = ({ src, alt, scrollNum, delay, height }) => {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.img
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0, transition: { delay } }}
      className="w-full object-cover"
      style={{
        transform: `translateY(${scrollY * 0.01 - scrollNum}%)`, 
        transition: 'transform 0.1s ease-out',
        height
      }}
      src={src}
      alt={alt}
      loading="lazy"
    />
  );
};

export default ParallaxImage;

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ParallaxImage = ({ src, alt }) => {
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
      animate={{ opacity: isInView ? 1 : 0, transition: { delay: 0.6 } }}
      className="w-full h-[120%] object-cover"
      style={{
        transform: `translateY(${scrollY * 0.01 - 18}%)`, 
        transition: 'transform 0.1s ease-out',
      }}
      src={src}
      alt={alt}
      loading="lazy"
    />
  );
};

export default ParallaxImage;

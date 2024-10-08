import { motion } from 'framer-motion';
import SlideReveal from '../animations/SlideReveal';
import ParallaxImage from '../animations/ParallaxImage';

function ThirdSection() {
  
  return (
    <div className='h-screen flex bg-brown7'>
      {/* Left Section with SlideReveal */}
      <div className='w-1/2 h-full relative'>
          <div className="relative w-full h-full overflow-hidden">
            <ParallaxImage src={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/650c6964876ba0c8dcac575d_pexels-produtora-midtrack-14996830.webp"}
              alt={"thirdSection_img"} scrollNum={18} delay={0.6} height={'120%'}/>
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#b36b64] to-[#b36b64] opacity-20"></div>

            {/* Infinite sliding text */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center z-50"
              animate={{ x: ['-100%', '100%', '-100%', '100%']}} // Moves from left to right
              transition={{
                repeat: Infinity, // Infinite repeat
                repeatType: 'loop', // Continuous loop
                duration: 35, // Duration of the animation cycle
                ease: 'linear', // Smooth continuous motion
              }}
            >
              <p className="text-brown15Text opacity-35 text-[170px] tracking-widest font-bold uppercase">
                Financial
              </p>
              <p className="text-brown15Text opacity-35 text-[170px] tracking-widest font-bold uppercase pl-4">
                Solutions
              </p>
            </motion.div>

            {/* SlideReveal Component */}
            <SlideReveal bgColor={'#4c2e2b'}/>
          </div>
        
      </div>

      {/* Right Section with Static Content */}
      <div className="w-1/2 h-full flex flex-col gap-16 justify-center items-center bg-brown7 text-brown15Text font-medium">
        <p className="text-xs md:text-sm uppercase px-3 text-center">Build and Safeguard Your Wealth</p>

        {/* Wrapper for the image and gradient */}
        <div className="relative w-3/4 md:w-8/12 md:h-80 overflow-hidden">
        <ParallaxImage src={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/651c05ee5d1d847ed1b58993_clay-banks-JPhVGeY4H7I-unsplash-p-1080.webp"}
            alt={"thirdSection_img2"} scrollNum={18} delay={0.6} height={'120%'}/>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#b36b64] to-[#b36b64] opacity-20"></div>
          <SlideReveal bgColor={'#4c2e2b'}/>
        </div>

        <p className="text-xs md:text-sm uppercase px-3 text-center">for Generations to Come</p>
      </div>
    </div>
  );
}

export default ThirdSection;

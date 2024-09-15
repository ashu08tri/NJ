import React from 'react';
import { motion } from 'framer-motion';
import SlideReveal from '../animations/SlideReveal';

function ThirdSection() {
    return (
        <div className='h-screen flex'>

            <div className='w-1/2 h-full'>

            <div className="relative w-full h-full overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/650c6964876ba0c8dcac575d_pexels-produtora-midtrack-14996830.webp"
        alt="thirdSection_img"
        loading="lazy"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#b36b64] to-[#b36b64] opacity-20"></div>

      {/* Infinite sliding text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ x: ["-100%", "100%","-100%","100%"] }} // Moves from left to right
        transition={{
          repeat: Infinity, // Infinite repeat
          repeatType: "loop", // Continuous loop
          duration: 35, // Duration of the animation cycle
          ease: "linear", // Smooth continuous motion
        }}
      >
        <p className="text-brown15Text opacity-35 text-[170px] tracking-widest font-bold uppercase">Financial</p>
        <p className="text-brown15Text opacity-35 text-[170px] tracking-widest font-bold uppercase pl-4">Solutions</p>
      </motion.div>

      {/* SlideReveal Component */}
      <SlideReveal />
    </div>

            </div>

            <div className="w-1/2 h-full flex flex-col gap-16 justify-center items-center bg-brown7 text-brown15Text font-medium">
                <p className="text-xs md:text-sm uppercase">Build and Safeguard Your Wealth</p>

                {/* Wrapper for the image and gradient */}
                <div className="relative w-3/4 md:w-8/12 md:h-80 overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/651c05ee5d1d847ed1b58993_clay-banks-JPhVGeY4H7I-unsplash-p-1080.webp"
                        alt="thirdSection_img2"
                        loading="lazy"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#b36b64] to-[#b36b64] opacity-20"></div>
                    <SlideReveal />
                </div>

                <p className="text-xs md:text-sm uppercase">for Generations to Come</p>
            </div>


        </div>
    )
}

export default ThirdSection;
import React from 'react';
import { motion } from 'framer-motion';
import styles from './header.module.css';
import { FaArrowDown } from "react-icons/fa6";

function Header() {
  return (
    <div className='h-screen md:h-[110vh] relative overflow-y-hidden'>
      {/* Image as background */}
      <img
        src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/6516e3fae8b274b4838678cb_bda21aa-c30-c764-e1f2-f65b041c420-poster-00001.jpg"
        alt="header_img"
        className='w-full h-full object-cover'
      />

      {/* Gradient overlay */}
      <div className={styles.overlay1}></div>

      <div className={styles.overlay2}></div>

      <div className='absolute top-56 flex px-8 md:px-16 gap-10'>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.7, ease: "easeInOut" } }}
          className='flex relative'
        >
          <div className='absolute h-10 md:h-16 w-[1.5px] bg-headerText'></div>
          <div className='h-56 md:h-72 w-[1.5px] bg-headerTextOpa'></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.7, ease: "easeInOut" } }}
          className='flex flex-col gap-4'
        >
          <p className='text-3xl md:text-6xl tracking-wider text-headerText'>Dream Big, Save Bigger:</p>
          <p className='text-3xl md:text-6xl tracking-wider text-headerTextOpacity'>Where Financial Goals</p>
          <p className='text-3xl md:text-6xl tracking-wider text-headerTextOpacity'>Become Reality</p>
          <p className='text-sm md:text-xl text-headerTextOpa pt-5'>
            We believe that financial success is within everyone's reach.
          </p>
        </motion.div>
      </div>

    <div className='flex justify-center w-full'>
    <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 0.8, ease: "easeInOut" } }}
        className='absolute left-5 md:left-0 flex flex-col md:flex-row md:justify-between items-center top-[70%] md:top-[80%] md:px-10 w-[90vw]'>

        {/* Container with animated borders */}
        <div className='relative w-full md:w-4/12 flex md:hover:w-[35%] transition-all duration-300 items-center border border-navBorder hover:bg-brown9Hover'>
          {/* Animated borders */}
          <div className={`${styles.animation} absolute inset-0`}>
          <div className={`${styles.borderTop}`}></div>
            {/* Bottom border */}
          <div className={`${styles.borderBottom}`}></div>
          </div>

          {/* Content */}
          <div className='flex py-2 md:py-4 px-8 items-center bg-brown9Fade w-full'>
          <img className='w-36 md:w-44 border border-l-0 border-navBorder h-16 object-cover' src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/6520397176412162475ab235_clay-banks-yWla5dgcdMY-unsplash.jpg" loading='lazy' alt="explore" />
          <div className='flex items-center justify-between w-full px-3 md:px-0'>
          <p className='px-6 md:px-20 py-2 md:py-6 font-semibold text-brown9 uppercase'>EXPLORE</p>
          <p className='text-brown9'><FaArrowDown /></p>
          </div>
          </div>
        </div>

        <div className='flex w-1/4 gap-10 md:gap-0 items-center justify-center md:justify-between text-brown9 mt-8 md:mt-2 cursor-pointer'>
            <div className='flex justify-between w-32 items-center gap-10 md:gap-0'>
              <p>Process</p>
              <img className='w-5 h-5' src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/652920041eb6f19c1c6b890a_chart-data-fill0-wght400-grad0-opsz24.svg" alt="process" loading='lazy'/>
            </div>

            <div className='h-16 md:h-20 w-[1.5px] bg-headerTextOpa md:overflow-hidden'>
              <div className={`${styles.lineAnimate} h-5 md:h-6 w-[1.5px] bg-headerText`}></div>
            </div>

            <div className='flex justify-between w-28 items-center gap-10 md:gap-0'>
              <p>Results</p>
              <img className='w-5 h-5' src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/6529200471488398155903cb_area-chart-fill0-wght400-grad0-opsz24.svg" loading='lazy' alt="results" />
            </div>
        </div>
      </motion.div>
    </div>
     


    </div>
  );
}

export default Header;

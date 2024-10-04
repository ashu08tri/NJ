import { motion } from 'framer-motion';
import styles from '../landingpage/header.module.css';
import { FaArrowDown } from "react-icons/fa6";

function Header({iconImg, image, title, desc}) {
    return (
        <div className='relative h-[125vh] bg-[#262140] overflow-y-hidden'>
            <img src={image} alt="header_img" className='w-full h-full object-cover'/>
            <div className='absolute inset-0 h-full w-full bg-custom-gradient2 mix-blend-normal' />
            <div className='absolute top-60 flex px-8 md:px-16 gap-10'>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.7, ease: "easeInOut" } }}
          className='flex relative'
        >
          <div className='absolute h-10 md:h-16 w-[1.5px] bg-headerText'></div>
          <div className='h-40 md:h-72 w-[1.5px] bg-headerTextOpa'></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.7, ease: "easeInOut" } }}
          className='flex flex-col gap-4 text-headerText'
        >
            <div className='flex items-center gap-5'>
                <img src={iconImg} alt="icon" className='w-6 h-6 object-cover'/>
                <p className='md:text-2xl tracking-wider uppercase text-xs'>Solution</p>
            </div>
          <p className='text-5xl md:text-8xl tracking-wider md:w-2/4'>{title}</p>
        </motion.div>
      </div>

    <div className='flex justify-center w-full'>
    <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 0.8, ease: "easeInOut" } }}
        className='absolute left-5 md:left-0 flex gap-3 flex-col md:flex-row md:justify-between items-center top-[70%] md:top-[80%] md:px-10 w-[90vw]'>

        <div className='relative w-full md:w-6/12 flex items-center'>
          <div className='flex py-2 md:py-4 px-8 justify-between items-center w-full'>
          <p className='text-headerTextOpacity text-xl pt-5 md:w-3/4'>{desc}</p>
          </div>
        </div>

        <div className='relative w-full md:w-4/12 flex items-center border border-[#5c5099]'>
          {/* Animated borders */}
          <div className={`${styles.animation} absolute inset-0`}>
          <div className={`${styles.givenTopColor}`}></div>
            {/* Bottom border */}
          <div className={`${styles.givenBottomColor}`}></div>
          </div>

          {/* Content */}
          <div className='flex flex-col p-2 justify-between gap-2 items-center bg-purpleBlurLight w-full'>
            
         <div className='flex justify-between items-center h-16'>
         <div className='flex items-center justify-between w-full px-3 md:px-0'>
          <p className='px-6 md:px-12 py-2 md:py-6 font-semibold text-brown9 uppercase'>All Solutions</p>
          </div>
          <img className='w-36 md:w-48 border border-l-0 border-[#5c5099] h-16 object-cover' src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/6515539e0c97c2d8cd3e809e_pexels-gustavo-fring-4173267-p-500.webp" loading='lazy' alt="all_solutions" />
         </div>
          
          <div className='w-full flex justify-between items-center h-16 bg-purpleBlur border border-[#6b5db3] text-[#eca098] px-3'>
          <p className='uppercase font-medium'>About the solutions</p>
          <p><FaArrowDown/></p>
          </div>

          </div>
        </div>
      </motion.div>
    </div>
     
        </div>
    )
}

export default Header;
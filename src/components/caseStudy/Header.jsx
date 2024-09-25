import Carousel from '../animations/Carousel';
import { motion } from 'framer-motion';
import styles from '../landingpage/header.module.css';
import { FaArrowDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const images = [
    'https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/651c05b126e7bdea1d964246_the-blowup-hK-jdvutWoU-unsplash.webp',
    'https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/651c05ee616124d1aa39a6bd_note-thanun-LiarWHLHjx0-unsplash.webp',
    'https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/6515539f331a3329d9005b5d_refargotohp-x8dTKZ5IWp0-unsplash-p-1080.webp'
];

function Header() {
    return (
        <div className='relative h-screen bg-[#262140] overflow-y-hidden'>
            <Carousel images={images} />
            <div className='absolute inset-0 h-full w-full bg-custom-gradient2 mix-blend-normal' />
            <div className='absolute top-44 flex px-8 md:px-16 gap-10'>
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
          className='flex flex-col gap-4 text-headerText'
        >
          <p className='text-3xl md:text-6xl tracking-wider '>Real Clients, Real</p>
          <p className='text-3xl md:text-6xl tracking-wider'>Results: <span className='opacity-70'>Explore Our</span></p>
          <p className='text-3xl md:text-6xl tracking-wider opacity-70'>Success Stories</p>
          <p className='text-sm text-headerTextOpacity pt-5 md:w-1/2'>
          Discover the success stories that make us proud to be financial advisors. From individuals to large enterprises
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
          <img className='w-36 md:w-44 border border-l-0 border-navBorder h-16 object-cover' src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/651c05ef7db4f38d102e2a63_clay-banks-WNrMJykUiwU-unsplash.webp" loading='lazy' alt="explore" />
          <div className='flex items-center justify-between w-full px-3 md:px-0'>
          <p className='px-6 md:px-12 py-2 md:py-6 font-semibold text-brown9 uppercase'>Proven Results</p>
          <p className='text-brown9'><FaArrowDown /></p>
          </div>
          </div>
        </div>

        <div className='flex w-1/4 gap-10 md:gap-0 items-center justify-center md:justify-between text-brown9 mt-8 md:mt-2 cursor-pointer'>
            <div className='flex justify-between w-32 items-center gap-10 md:gap-0'>
              <Link to='/solutions' className='block'>Solutions</Link>
              <img className='w-5 h-5' src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/650cac9b74615efe60e9ff50_account-balance-wallet-fill1-wght400-grad0-opsz24%20(1).svg" alt="process" loading='lazy'/>
            </div>

            <div className='h-16 md:h-20 w-[1.5px] bg-headerTextOpa md:overflow-hidden'>
              <div className={`${styles.lineAnimate} h-5 md:h-6 w-[1.5px] bg-headerText`}></div>
            </div>

            <div className='flex justify-between w-28 items-center gap-10 md:gap-0'>
              <Link to='/services' className='block'>Services</Link>
              <img className='w-5 h-5' src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/650cac99eaf1382e5292b6b4_account-balance-fill1-wght400-grad0-opsz24%20(1).svg" loading='lazy' alt="results" />
            </div>
        </div>
      </motion.div>
    </div>
     
        </div>
    )
}

export default Header;
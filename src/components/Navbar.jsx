import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

function Navbar() {
  return (
    <nav className='h-28 z-50 text-headerText absolute top-0 w-full flex justify-between px-4 md:px-10 hover:bg-navHover border-t hover:border-b border-navBorder'>

      <div className='w-1/2 md:w-7/12 flex justify-start gap-12 items-center h-full'>
        <div className='relative'>
          {/* Wrapper for animated borders */}
          <div className={`${styles.animation} absolute inset-0 overflow-hidden`}>
            {/* Top border */}
            <div className={`${styles.borderTop}`}></div>
            {/* Bottom border */}
            <div className={`${styles.borderBottom}`}></div>
          </div>

          {/* Content (p tags) not affected by overflow:hidden */}
          <div className='flex relative w-1/2'>
            <p className='px-6 md:px-14 py-2 md:py-4 border border-r-0 border-navBorder hover:px-10 md:hover:px-16 transition-all duration-300'>
              icon
            </p>
            <p className='px-6 md:px-14 py-2 md:py-4 border border-navBorder hover:px-10 md:hover:px-16 transition-all duration-300'>
              KASSA
            </p>
          </div>
        </div>

      </div>

      <div className='w-full content-center'>
        <ul className='hidden md:flex justify-between items-center w-3/4'>
          <li className='py-10'><NavLink to='/'>Home</NavLink></li>
          <li className='py-10'><NavLink to='/solutions'>Solutions</NavLink></li>
          <li className='py-10'><NavLink to='/services'>Services</NavLink></li>
          <li className='py-10'><NavLink to='/about'>About</NavLink></li>
          <motion.li whileHover='hover' className='relative group py-10'>
            <NavLink to='/company' className='hover:text-highlight transition'>Company</NavLink>

            {/* Dropdown menu */}
            <motion.ul
              initial={{ opacity: 0, y: 20, pointerEvents: 'none' }}
              variants={{ hover: { opacity: 1, y: 0, pointerEvents: 'auto' } }}
              transition={{ duration: 0.2, ease: 'easeIn' }}
              className='absolute flex -left-64 top-full items-center w-[40vw] shadow-lg border border-[#6b5db3] z-10'
            >
              <ul className='bg-[#362f5a] w-1/2 h-full p-4'>
                <li className='flex flex-col gap-4'>
                  <li className='text-xs uppercase'>Expertise</li>
                  <li className='py-2 px-4 hover:bg-highlight hover:bg-brown9HoverBox rounded-md hover:border border-brown9'><NavLink to='/subpage1'>Home</NavLink></li>
                  <li className='py-2 px-4 hover:bg-highlight hover:bg-brown9HoverBox rounded-md hover:border border-brown9'><NavLink to='/subpage2'>Service</NavLink></li>
                  <li className='py-2 px-4 hover:bg-highlight hover:bg-brown9HoverBox rounded-md hover:border border-brown9'><NavLink to='/subpage3'>Solutions</NavLink></li>
                  <li className='py-2 px-4 hover:bg-highlight hover:bg-brown9HoverBox rounded-md hover:border border-brown9'><NavLink to='/subpage4'>About</NavLink></li>
                </li>
              </ul>

              <ul className='bg-[#262140] w-1/2 h-full p-4'>
                <li className='flex flex-col gap-4'>
                <li className='text-xs uppercase'>Company</li>
                <li className='py-2 px-4 hover:bg-highlight hover:bg-brown9HoverBox rounded-md hover:border border-brown9'><NavLink to='/subpage1'>Template1</NavLink></li>
                <li className='py-2 px-4 hover:bg-highlight hover:bg-brown9HoverBox rounded-md hover:border border-brown9'><NavLink to='/subpage2'>Template1</NavLink></li>
                <li className='py-2 px-4 hover:bg-highlight hover:bg-brown9HoverBox rounded-md hover:border border-brown9'><NavLink to='/subpage3'>Template1</NavLink></li>
                <li className='py-2 px-4 hover:bg-highlight hover:bg-brown9HoverBox rounded-md hover:border border-brown9'><NavLink to='/subpage4'>Template1</NavLink></li>
                </li>
              </ul>
            </motion.ul>
          </motion.li>
        </ul>
      </div>

      <div className='w-1/2 md:w-5/12 flex justify-center items-center h-full'>
        <ul className='flex justify-end gap-6 items-center w-full md:pr-8'>
          <li><NavLink to='/consultation' className='hidden md:inline text-sm md:text-base'>Consultation</NavLink></li>
          <li>search</li>
          <li>menu</li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar;
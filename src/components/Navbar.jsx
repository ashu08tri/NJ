import {useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { BsChatLeftText } from "react-icons/bs";
import MenuModal from './MenuModal';


function Navbar() {

  const[menuOpen, setMenuOpen] = useState(false);

  const openMenuHandler = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className='h-28 z-50 text-headerText absolute top-0 w-full flex justify-between px-4 md:px-10 hover:bg-navHover border-t hover:border-b border-navBorder'>
     <AnimatePresence>{menuOpen && <MenuModal onClose={openMenuHandler} />}</AnimatePresence>
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
            <p onClick={openMenuHandler} className='px-6 md:px-14 py-4 md:py-5 border border-r-0 border-navBorder hover:px-10 md:hover:px-16 transition-all duration-300'>
            <HiOutlineMenuAlt4 />
            </p>
            <p className='px-6 md:px-14 py-3 md:py-4 border border-navBorder hover:px-10 md:hover:px-16 transition-all duration-300'>
              KASSA
            </p>
          </div>
        </div>

      </div>

      <div className='w-full content-center'>
        <ul className={`${styles.list} hidden md:flex justify-between items-center w-3/4`}>
          <li className='py-10'><NavLink to='/' className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink></li>
          <li className='py-10'><NavLink to='/solutions' className={({ isActive }) => isActive ? styles.active : ''}>Solutions</NavLink></li>
          <li className='py-10'><NavLink to='/services' className={({ isActive }) => isActive ? styles.active : ''}>Services</NavLink></li>
          <li className='py-10'><NavLink to='/about' className={({ isActive }) => isActive ? styles.active : ''}>About</NavLink></li>
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
                  <li className='text-xs uppercase text-headerText'>Expertise</li>
                  <li className='py-2 px-4 hover:bg-highlight hover:bg-brown9HoverBox rounded-md hover:border border-brown9'><NavLink to='/subpage1'>Home</NavLink></li>
                  <li className='py-2 px-4 hover:bg-highlight hover:bg-brown9HoverBox rounded-md hover:border border-brown9'><NavLink to='/subpage2'>Service</NavLink></li>
                  <li className='py-2 px-4 hover:bg-highlight hover:bg-brown9HoverBox rounded-md hover:border border-brown9'><NavLink to='/subpage3'>Solutions</NavLink></li>
                  <li className='py-2 px-4 hover:bg-highlight hover:bg-brown9HoverBox rounded-md hover:border border-brown9'><NavLink to='/subpage4'>About</NavLink></li>
                </li>
              </ul>

              <ul className='bg-[#262140] w-1/2 h-full p-4'>
                <li className='flex flex-col gap-4'>
                <li className='text-xs uppercase text-headerText'>Company</li>
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
        <ul className='flex justify-end gap-10 items-center w-full md:pl-16'>
          <li><NavLink to='/consultation' className='hidden md:inline text-sm md:text-base hover:bg-brown9HoverBox hover:border border-brown9 rounded-3xl py-2 px-5'>Consultation</NavLink></li>
          <li className='flex gap-3 items-center w-full'>
          <li className='bg-brown9HoverBox border border-brown9 p-4 rounded-full hover:bg-navHoverIcon text-sm md:text-base'><IoIosSearch/></li>
          <li className='bg-brown9HoverBox border border-brown9 p-4 rounded-full hover:bg-navHoverIcon text-sm md:text-base'><BsChatLeftText/></li>
          </li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar;
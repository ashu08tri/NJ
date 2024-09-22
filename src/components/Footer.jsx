import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";


function Footer() {
  return (
    <div className='flex md:h-[105vh] justify-center items-center py-12 md:p-0' style={{ background: 'linear-gradient(#262140, rgba(38, 33, 64, 0.5)), url(https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/6515539fbc5a304d105860a0_ryunosuke-kikuno-HjZqtFfec-w-unsplash.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='md:h-[95vh] w-[90vw] border border-[#54498c] md:flex'>

        <div className='w-full md:w-5/12 h-auto md:h-full bg-[#262140] border-b md:border-r border-[#54498c] px-16 py-6 md:px-24 md:py-10 flex flex-col justify-between items-start'>

          <div className='hover:opacity-80 cursor-pointer'>
            <p className='font-medium text-lg text-[#e4938a]'>Kassa</p>
            <p className='text-sm text-[#cc7b72]'>Finance Solutions</p>
          </div>

          <div className='flex flex-col gap-8 py-8'>
            <ul className='text-2xl text-[#cc7b72] group hover:text-brown9HoverBox'>
              <li className='transition-all duration-75 hover:px-6 border-l px-4 pb-3 border-brown9HoverBox hover:text-[#e4938a] hover:border-[#e4938a]'><Link to='/'>Home</Link></li>
              <li className='transition-all duration-75 hover:px-6 border-l px-4 py-3 border-brown9HoverBox hover:text-[#e4938a] hover:border-[#e4938a]'><Link to='/solutions'>Solutions</Link></li>
              <li className='transition-all duration-75 hover:px-6 border-l px-4 py-3 border-brown9HoverBox hover:text-[#e4938a] hover:border-[#e4938a]'><Link to='/service'>Service</Link></li>
              <li className='transition-all duration-75 hover:px-6 border-l px-4 py-3 border-brown9HoverBox hover:text-[#e4938a] hover:border-[#e4938a]'><Link to='/about'>About</Link></li>
              <li className='transition-all duration-75 hover:px-6 border-l px-4 pt-3 border-brown9HoverBox hover:text-[#e4938a] hover:border-[#e4938a]'><Link to='/case_studies'>Case Studies</Link></li>
            </ul>

            <ul className='text-sm text-[#e4938a] uppercase'>
              <li className='border-l px-4 pb-2 border-brown9HoverBox hover:text-[#f8b3ac] hover:border-[#f8b3ac] font-medium'><Link to='/blog'>Blog</Link></li>
              <li className='border-l px-4 py-2 border-brown9HoverBox hover:text-[#f8b3ac] hover:border-[#f8b3ac] font-medium'><Link to='/testimonials'>Testimonials</Link></li>
              <li className='border-l px-4 py-2 border-brown9HoverBox hover:text-[#f8b3ac] hover:border-[#f8b3ac] font-medium'><Link to='/contact'>Contact</Link></li>
              <li className='border-l px-4 pt-2 border-brown9HoverBox hover:text-[#f8b3ac] hover:border-[#f8b3ac] font-medium'><Link to='/consultation'>Consultation</Link></li>
            </ul>
          </div>

          <div className='flex gap-5 text-[#e4938a]'>
            <Link><FaInstagram size={20} /></Link>
            <Link><FaLinkedin size={20} /></Link>
            <Link><FaYoutube size={20} /></Link>
          </div>
        </div>

        <div className='w-full md:w-7/12 h-auto md:h-full bg-purpleBlur flex flex-col items-center justify-between px-4 py-6 md:px-16 md:py-10' style={{ backdropFilter: 'blur(15px)' }}>

          <div className='w-full h-[50vh] md:h-full '>
            <ul className='text-[#cc7b72] flex flex-col items-center'>
              <li className='border-b border-[#cc7b72] hover:py-8 py-6 transition-all duration-100 flex items-center justify-between w-full'>
                <span>Free Consultation</span>
                <li className='flex items-center gap-8'>
                  <span>Get in touch</span>
                  <span><FaArrowRight size={18} /></span>
                </li>
              </li>
              <li className='border-b border-[#cc7b72] hover:py-8 py-6 transition-all duration-100 flex items-center justify-between w-full'>
                <span>Call us</span>
                <span>+999999999</span>
              </li>
              <li className='border-b border-[#cc7b72] hover:py-8 py-6 transition-all duration-100 flex items-center justify-between w-full'>
                <span>Email us</span>
                <span>@niveshjano.com</span>
              </li>
            </ul>

            <div className='pt-8 text-[#cc7b72] flex justify-evenly'>
              <span>Text1</span>
              <span>Text2</span>
              <span>Text3</span>
            </div>

          </div>

          <div className='flex w-full text-[#cfc6fd] border border-[#6b5db3] my-5 md:mb-10'>
            <p className='flex justify-between items-center w-1/3 px-5 py-4 border-r border-[#6b5db3] hover:bg-[#4c437f] hover:w-[36%] transition-tranform duration-100'>
              <span className='hidden md:block opacity-60'>Opt1</span>
              <span>Option1</span>
            </p>
            <p className='flex justify-between items-center w-1/3 px-5 py-4 border-r border-[#6b5db3] hover:bg-[#4c437f] hover:w-[36%] transition-tranform duration-100'>
              <span className='hidden md:block opacity-60'>Opt2</span>
              <span>Option2</span>
            </p>
            <p className='flex justify-between items-center w-1/3 px-5 py-4 hover:bg-[#4c437f] hover:w-[36%] transition-tranform duration-100'>
              <span className='hidden md:block opacity-60'>Opt3</span>
              <span>Option3</span>
            </p>
          </div>

          <div className='text-[#cc7b72] flex gap-6 text-sm'>
            <p>LICENSING</p>
            <p>INSTRUCTIONS</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer;
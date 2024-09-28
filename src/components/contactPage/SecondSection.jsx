import SlideReveal from '../animations/SlideReveal';
import { MdOutlineLocalPhone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa6";




function SecondSection() {
  return (
    <div className='bg-[#f5e7e6]  text-[#b36b64] py-20 px-12 cursor-pointer'>
        <ul>
            <div className='flex items-center justify-between border-b border-[#b36b64] py-12 group transition-all duration-75 ease-linear md:hover:border'>
                <li className='md:w-2/12 uppercase md:font-medium md:group-hover:pl-4'>call us</li>
                <li className='md:w-2/12 md:text-4xl md:group-hover:pl-4'>9999999999</li>
                <li className='md:w-8/12 md:group-hover:pr-4 flex justify-end'><MdOutlineLocalPhone size={20}/></li>
            </div>

            <div className='flex items-center justify-between border-b border-[#b36b64] py-12 group transition-all duration-75 ease-linear md:hover:border md:hover:border-t-0'>
                <li className='md:w-2/12 uppercase md:font-medium md:group-hover:pl-4'>Email us</li>
                <li className='md:w-2/12 md:text-4xl md:group-hover:pl-4'>hello@example.com</li>
                <li className='md:w-8/12 md:group-hover:pr-4 flex justify-end'><AiOutlineMail size={20}/></li>
            </div>

            <div className='flex items-center justify-between py-12'>
                <li className='md:w-2/12'>Office</li>
                <div className='md:w-3/12 flex flex-col items-center md:flex-row justify-center gap-6'>
                <div className='relative overflow-hidden h-28 w-40 md:w-48'>
                <img src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/6515773b5403bb7487979f86_rod-long-2P_ifaetDm0-unsplash-p-1080.webp" alt="office1" className='object-cover h-full w-full'loading='lazy'/>
                <SlideReveal bgColor={"#995c56"}/>
                </div>    
                  <p className='w-3/4'>1234 Windy Lane 200 Chicago, IL 60601</p>
                </div>
                <li className='md:w-8/12 flex justify-end items-center hover:underline underline-offset-4'>
                    <span className='text-xs md:pr-4'>Open Map</span>
                    <span><FaArrowRight /></span>
                </li>
            </div>

            <div className='flex items-center justify-between py-12'>
                <li className='md:w-2/12'>Office</li>
                <div className='md:w-3/12 flex flex-col items-center md:flex-row justify-center gap-6'>
                <div className='relative overflow-hidden h-28 w-40 md:w-48'>
                <img src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/65240790969c8e69be61dad0_mindaugas-norvilas-F7aMaB2nw9o-unsplash-p-1080.webp" alt="office1" className='object-cover h-full w-full'loading='lazy'/>
                <SlideReveal bgColor={"#995c56"}/>
                </div>
                    <p className='w-3/4'>56 Regent Street Floor: 3rd Floor London W1B 5TR</p>
                </div>
                <li className='md:w-8/12 flex justify-end items-center hover:underline underline-offset-4'>
                    <span className='text-xs md:pr-4'>Open Map</span>
                    <span><FaArrowRight /></span>
                </li>
            </div>
        </ul>
    </div>
  )
}

export default SecondSection;
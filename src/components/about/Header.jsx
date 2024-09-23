import Carousel from '../animations/Carousel';
import { motion } from 'framer-motion';
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const images = [
    'https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/651577687930a1675c58db37_pexels-sora-shimazaki-5668856-p-800.webp',
    'https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/6515771faae8c81512936ba1_pexels-gustavo-fring-4173268.webp',
    'https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/6515539e63d1be2ad5dc3c4a_pexels-gustavo-fring-5163384.webp'
];

function Header() {
    return (
        <div className='relative h-screen bg-[#262140]'>
            <Carousel images={images} />
            <div className='absolute inset-0 h-full w-full bg-custom-gradient mix-blend-multiply' />
            <div className='absolute top-36 left-4 md:left-10 h-full w-full text-headerText'>
                <div className='w-full'>
                    <motion.p 
                     initial={{opacity: 0, x: 100}} animate={{opacity:1, x: 0, transition: {delay:.6, duration: .8, ease: 'easeIn'}}}
                    className='border-l pl-8 border-headerText text-xl w-3/4 md:w-1/4'>We belive that financial success is within everyone&apos;s reach.</motion.p>
                    <motion.p 
                     initial={{opacity: 0, x: 100}} animate={{opacity:1, x: 0, transition: {delay:.8, duration: .8, ease: 'easeIn'}}}
                    className='px-3 pt-16 md:w-1/2 text-5xl md:text-7xl'>Secure Your Financial <span className='opacity-80'>Future with Expertise</span></motion.p>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 1, type: 'spring', stiffness: 200 } }}
                className='absolute bottom-0 flex flex-col w-full items-center text-headerText'>

                <div className='w-[85%] h-40 md:h-20 bg-brown9Hover border border-brown9 border-b-0 hover:bg-brown9HoverBox md:flex items-center justify-evenly' style={{backdropFilter: 'blur(15px)'}}>
                <p className='w-10/12 md:w-1/3 flex px-4 md:px-0 justify-between md:justify-center items-center gap-4 md:gap-8 h-1/3 md:h-full' >
                        <span className='w-1/4 md:w-auto font-medium text-xl'>+200</span>
                        <span className='w-3/4 md:w-auto opacity-90'>Tailored Investment Strategies</span>
                    </p>
                    <p className='w-10/12 md:w-1/3 flex px-4 md:px-0 justify-between md:justify-center items-center gap-4 md:gap-8 h-1/3 md:h-full'>
                        <span className='w-1/4 md:w-auto font-medium text-xl'>24/7</span>
                        <span className='w-3/4 md:w-auto opacity-90'>Real Time Finance Monitoring</span>
                    </p>
                    <p className='w-10/12 md:w-1/3 flex px-4 md:px-0 justify-between md:justify-center items-center gap-4 md:gap-8 h-1/3 md:h-full'>
                        <span className='w-1/4 md:w-auto font-medium text-xl'>300M</span>
                        <span className='w-3/4 md:w-auto opacity-90'>In Sustainable Investments</span>
                    </p>
                </div>

                <div className='w-[85%] h-16 border border-[#54498c] border-b-0 flex items-center justify-evenly'>
                <p className='w-1/2 flex justify-center items-center gap-4 md:gap-8 bg-purpleBlur hover:bg-purpleNoBlur hover:w-[55%] transition-all duration-500 ease-in-out border-r border-[#54498c] h-full' style={{ backdropFilter: 'blur(15px)' }}>
                        <span><FaArrowDown size={16} /></span>
                        <span>EXPLORE</span>
                    </p>
                    <p className='w-1/2 flex justify-center items-center gap-4 md:gap-8 bg-purpleBlurDark hover:bg-purpleNoBlurDark hover:w-[55%] transition-all duration-500 ease-in-out h-full'>
                        <span>CASE STUDIES</span>
                        <span><FaArrowRight size={16} /></span>
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

export default Header;
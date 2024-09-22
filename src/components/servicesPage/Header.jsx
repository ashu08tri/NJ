import { useRef } from 'react';
import SlideReveal from '../animations/SlideReveal';
import ParallaxImage from '../animations/ParallaxImage';
import { motion, useInView } from 'framer-motion';
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

function Header() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true })
    return (
        <div className='relative h-screen md:h-[120vh] overflow-hidden bg-[#262140]'>

            <ParallaxImage src={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/6515539e2af2feb4a28a5201_pexels-gustavo-fring-3874035-p-800.webp"} alt={"header_img"}
                scrollNum={0} delay={1} height={"100%"}
            />
            <SlideReveal bgColor={"#362f5a"} />
            <div className='absolute inset-0 h-full w-full bg-custom-gradient mix-blend-multiply' />

            <p className='absolute top-44 md:top-40 w-3/4 md:w-1/4 px-8 md:px-16 text-headerText'>
                Portfolio Optimization: Fine-Tuning for Peak Performance
            </p>

            <div className='absolute top-72 md:top-80 flex px-8 md:px-16 gap-10'>
                <div className='flex relative'>
                    <div className='absolute h-10 md:h-16 w-[1.5px] bg-headerText'></div>
                    <div className='h-36 md:h-56 w-[1.5px] bg-headerTextOpa'></div>
                </div>

                <div className='flex flex-col gap-4 uppercase text-headerText'>
                    <p className='text-3xl md:text-7xl tracking-wide'>Income Planning:</p>
                    <p className='text-3xl md:text-7xl tracking-wider opacity-70'>Your Blueprint for</p>
                    <p className='text-3xl md:text-7xl tracking-wider opacity-70'>Financial Freedom</p>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20, transition: { delay: .2, duration: .6, type: 'spring', stiffness: 200 } }}
                ref={ref} className='absolute bottom-0 flex w-full justify-center text-headerText'>
                <div className='w-[85%] h-16 md:h-20 border border-[#54498c] border-b-0 flex items-center justify-evenly'>
                    <p className='w-1/2 flex justify-center items-center gap-4 md:gap-8 bg-purpleBlur hover:bg-purpleNoBlur hover:w-[55%] transition-all duration-500 ease-in-out border-r border-[#54498c] h-full' style={{ backdropFilter: 'blur(15px)' }}>
                        <span><FaArrowDown size={16} /></span>
                        <span>Services</span>
                    </p>
                    <p className='w-1/2 flex justify-center items-center gap-4 md:gap-8 bg-purpleBlurDark hover:bg-purpleNoBlurDark hover:w-[55%] transition-all duration-500 ease-in-out h-full'>
                        <span>Free Consultation</span>
                        <span><FaArrowRight size={16} /></span>
                    </p>
                </div>

            </motion.div>
        </div>
    )
}

export default Header;
import React from 'react';
import ParallaxImage from '../animations/ParallaxImage';
import SlideReveal from '../animations/SlideReveal';
import { FaArrowRight } from "react-icons/fa6";

function FourthSection() {
    return (
        <div className='bg-[#f5e7e6] p-10 md:p-20'>

            <p className='text-4xl md:w-1/2 md:text-5xl font-medium leading-10 text-[#362f5a] py-10'>Our team <span className='opacity-70'>is eager to help you achieve your financial goals</span></p>

            <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                <div className='relative overflow-hidden w-full h-[50vh] md:w-1/2 md:h-[95vh]'>

                    <ParallaxImage src={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651c275b185176c121267034_pexels-pavel-danilyuk-7519011.jpg"} alt={"aboutImg4"}
                        scrollNum={50} delay={1} height={'120%'}
                    />
                    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#1e1a33] mix-blend-multiply' />
                    <SlideReveal bgColor={"#362f5a"} />

                    <div className='absolute bottom-0 h-40 flex flex-col items-center justify-center gap-4 text-[#fac8c3] w-full'>
                        <button className='p-3 bg-[#362f5a] border border-brown15Text rounded-full flex justify-between items-center w-56'>
                            <span className='text-xl'>Stefan Mullar</span> <span className='border border-brown15Text rounded-full p-2 opacity-80'><FaArrowRight size={12} /></span>
                        </button>
                        <p className='uppercase'>Tax Strategy Consultant</p>
                    </div>
                </div>

                <div className='relative overflow-hidden w-full h-[50vh] md:w-1/2 md:h-[95vh]'>
                    <ParallaxImage src={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651c2740acabdcc568b87d63_pexels-ron-lach-7968078.jpg"} alt={"aboutImg4"}
                        scrollNum={55} delay={1} height={'120%'}
                    />
                    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#1e1a33] mix-blend-multiply' />
                    <SlideReveal bgColor={"#362f5a"} />
                    <div className='absolute bottom-0 h-40 flex flex-col items-center justify-center gap-4 text-[#fac8c3] w-full'>
                        <button className='p-3 bg-[#362f5a] border border-brown15Text rounded-full flex justify-between items-center w-56'>
                            <span className='text-xl'>Emily Thompson</span> <span className='border border-brown15Text rounded-full p-2 opacity-80'><FaArrowRight size={12} /></span>
                        </button>
                        <p className='uppercase'>Senior Financial Advisor</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FourthSection;
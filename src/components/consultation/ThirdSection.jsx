import React from 'react';
import { Link } from 'react-router-dom';
import ParallaxImage from '../animations/ParallaxImage';
import SlideReveal from '../animations/SlideReveal';


function ThirdSection() {

    
  return (
    <div className='relative overflow-hidden h-[95vh] bg-[#262140]'>
      <ParallaxImage src={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/6515771f169082b87ed293ff_pexels-gustavo-fring-5163388.webp"} alt={"thirdSection_img"}
       scrollNum={45} delay={1} height={'180%'} />
       <SlideReveal bgColor={"#362f5a"}/>
       <Link to='/about' className='absolute top-20 md:top-24 left-16 md:left-20 w-[70vw] md:w-[25vw] h-[50vh] bg-[#995c56] border border-[#e4938a] text-[#f8b3ac] flex flex-col gap-8 justify-center items-center'>
        <p className='text-4xl w-3/4'>Who We Are</p>
        <p className='w-3/4'>Meet the team driving your financial success and freedom</p>
        <p className='font-medium w-3/4'>About The Company</p>
       </Link>
    </div>
  )
}

export default ThirdSection;
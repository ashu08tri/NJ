import React from 'react';
import { Link } from 'react-router-dom';
import ParallaxImage from '../animations/ParallaxImage';
import SlideReveal from '../animations/SlideReveal';

function EleventhSection() {
  return (
    <div className='relative overflow-hidden h-[95vh] bg-[#262140]'>
      <ParallaxImage src={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/6516dfb9da737c2b1a589700_tim-stief-dH6IjhWHNQQ-unsplash.webp"} alt={"eleventhSection_img"}
       scrollNum={120} delay={1} height={'150%'} />
       <SlideReveal bgColor={"#362f5a"}/>
       <Link to='/consultancy' className='absolute top-20 md:top-24 left-16 md:left-20 w-[70vw] md:w-[25vw] h-[50vh] bg-[#995c56] border border-[#e4938a] text-[#f8b3ac] flex flex-col gap-8 justify-center items-center'>
        <p className='text-4xl w-3/4'>Secure Your Financial Future</p>
        <p className='w-3/4'>Click here for tailored financial strategies that work.</p>
        <p className='font-medium w-3/4'>FREE CONSULTATION</p>
       </Link>
    </div>
  )
}

export default EleventhSection;
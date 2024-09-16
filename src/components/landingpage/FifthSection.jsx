import React from 'react';
import Carousel from '../animations/Carousel';

const images = [
  'https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/65155385727272a836162324_hans-eiskonen-wn57cSQ7VzI-unsplash.webp',
  'https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/6515539f331a3329d9005b5d_refargotohp-x8dTKZ5IWp0-unsplash.webp',
  'https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/6515773b5403bb7487979f86_rod-long-2P_ifaetDm0-unsplash.webp'
];

function FifthSection() {
  return (
    <div className='h-[130vh] relative border-b border-brown9'>
      <Carousel images={images} />
      <div className='absolute inset-0 h-full w-full flex cursor-pointer'>
        {/* First Column */}
        <div className='w-1/3 h-full md:hover:border-x border-brown9 flex flex-col justify-center items-center duration-500 ease-in-out hover:bg-[#352d5e] md:hover:w-[600px] hover:delay-100'>
          <div className='text-center text-brown9 max-w-[500px] w-full'>
            <p className='text-4xl md:text-7xl font-semibold mt-10'>16.3%</p>
            <p className='text-base md:text-3xl px-4 md:px-28 py-16'>Average ROI of 16.3% Annually</p>
            <p className='text-xs md:text-base md:px-32 mt-52'>Achieve long-term growth. Our clients enjoy an average annual ROI of 16.3%.</p>
          </div>
        </div>

        {/* Second Column */}
        <div className='w-1/3 h-full border-x md:border-0 md:hover:border-x border-brown9 flex flex-col justify-center items-center duration-500 ease-in-out hover:bg-[#352d5e] md:hover:w-[600px] hover:delay-100'>
          <div className='text-center text-brown9 max-w-[500px] w-full'>
            <p className='text-4xl md:text-7xl font-semibold mt-10'>+200</p>
            <p className='text-base md:text-3xl px-4 py-16'>Success Client <br /> Stories</p>
            <p className='text-xs md:text-base md:px-36 mt-52'>Hear firsthand accounts of financial success from our satisfied clients.</p>
          </div>
        </div>

        {/* Third Column */}
        <div className='w-1/3 h-full md:hover:border-x border-brown9 flex flex-col justify-center items-center duration-500 ease-in-out hover:bg-[#352d5e] md:hover:w-[600px] hover:delay-100'>
          <div className='text-center text-brown9 max-w-[500px] w-full'>
            <p className='text-4xl md:text-7xl font-semibold mt-10'>$300M</p>
            <p className='text-base md:text-3xl px-4 py-16'>In Sustainable <br /> Investments</p>
            <p className='text-xs md:text-base md:px-28 mt-52'>Our sustainable investment options offer both strong performance and impact.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default FifthSection;

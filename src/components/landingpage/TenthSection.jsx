import React from 'react';
import SlideReveal from '../animations/SlideReveal';
import HoverText from '../animations/HoverText';

function TenthSection() {
  return (
    <div className='bg-[#0f0d1a] text-[#e4938a] py-28 px-8 md:py-36 md:px-20'>

      <p className='text-4xl md:text-6xl py-12'>Insightful Reads</p>

      <div className='flex flex-col gap-10'>
        <div className='relative overflow-hidden w-full h-[60vh] md:h-[55vh] border-[2px] border-[#4c2e2b]'>
          <img loading="lazy" src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651d6de3173724960aef55a5_pexels-karolina-grabowska-4386174.jpg" alt="tenthSection_img1" className='w-full h-full object-cover'/>
          <SlideReveal bgColor={'#4c2e2b'}/>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e1a33] to-[#1e1a33] opacity-50" />
          
          <div className='absolute inset-0 flex h-full flex-col justify-center gap-20 px-6 md:mt-5'>

           <div className='flex flex-col gap-6'>
           <div className='flex gap-1'>
              <p className='uppercase text-xs p-1 bg-[#362f5a] border border-[#a696f5]'>Featured</p>
              <p className='uppercase text-xs p-1 bg-brown9HoverBox border border-brown9'>Tax Planning  &#38; Compliance</p>
            </div>

          <p className='text-3xl md:text-4xl font-medium text-[#cc7b72] md:w-5/12 hover:text-[#e4938a] border-l pl-6 border-[#cc7b72]
            hover:border-[#e4938a] hover:pl-8 cursor-pointer transition-all duration-100 
          '>The Impact of Recent Tax Reforms: A Closer Look</p>
           </div>

          <div className='md:flex justify-between'>
            <p className='md:w-4/12'>Stay updated on how the latest tax reforms can affect your financial planning and what steps to take.</p>
            <div className='md:w-64 py-4' style={{color: '#e4938a'}}>
              <HoverText text={'Read the Article'} overlayBG={'#4c2e2b'} mainBG={'rgba(204, 123, 114, 0.5)'} borderColor={'rgba(230, 148, 140, .5)'}/>
            </div>
          </div>
          
          </div>
        </div>

        <div className='relative overflow-hidden w-full h-[60vh] border-[2px] border-[#4c2e2b]'>
        <img loading="lazy" src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651d6e042c83a9c85b7eea8c_viktor-forgacs-md1SZCindxE-unsplash.jpg" alt="tenthSection_img2" className='w-full h-full object-cover'/>
          <SlideReveal bgColor={'#4c2e2b'}/>

          <div className="absolute inset-0 bg-gradient-to-b from-[#1e1a33] to-[#1e1a33] opacity-50" />
          
          <div className='absolute inset-0 flex h-full flex-col justify-center gap-20 px-6 md:mt-5'>

           <div className='flex flex-col gap-6'>
           <div className='flex gap-1'>
              <p className='uppercase text-xs p-1 bg-[#362f5a] border border-[#a696f5]'>Featured</p>
              <p className='uppercase text-xs p-1 bg-brown9HoverBox border border-brown9'>Investment Strategies</p>
            </div>

          <p className='text-3xl md:text-4xl font-medium text-[#cc7b72] md:w-5/12 hover:text-[#e4938a] border-l pl-6 border-[#cc7b72]
            hover:border-[#e4938a] hover:pl-8 cursor-pointer transition-all duration-100 
          '>How Diversification Can Boost Your Investment Portfolio</p>
           </div>

          <div className='md:flex justify-between'>
            <p className='md:w-4/12'>Learn why putting all your financial eggs in one basket is risky. Discover the power of diversification.</p>
            <div className='md:w-64 py-4' style={{color: '#e4938a'}}>
              <HoverText text={'Read the Article'} overlayBG={'#4c2e2b'} mainBG={'rgba(204, 123, 114, 0.5)'} borderColor={'rgba(230, 148, 140, .5)'}/>
            </div>
          </div>
          
          </div>
        </div>
      </div>

    </div>
  )
}

export default TenthSection;
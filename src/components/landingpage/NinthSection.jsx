import SlideReveal from '../animations/SlideReveal';
import HoverText from '../animations/HoverText';
import { FaArrowRight } from "react-icons/fa6";

function NinthSection() {
  return (
    <div className='p-8 md:px-12 md:pt-24 bg-[#e4cecc]'>

      <div className=''>
        {/* 1st content */}
       
        <div className='flex flex-col gap-6'>

          <p className='md:w-3/4 text-4xl md:text-5xl md:font-medium text-[#262140]'>Your assets are the building blocks of your financial future, and their allocation can make or break your investment journey.</p>
          <div className='w-72 text-brown15Text'>
            <HoverText text={'ALL SERVICES'} mainBG={'rgba(0,0,0,0)'} overlayBG={'rgba(230, 148, 140, .2)'} borderColor={'black'} />
          </div>
        </div>
        
        {/* 2nd content*/}
        <div className='w-full md:flex justify-between mt-2 md:mt-8'>

        <div className='relative overflow-hidden w-full md:w-4/12 h-80 py-3 md:h-[80vh]'>
        <img loading='lazy' src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/6515771f169082b87ed293ff_pexels-gustavo-fring-5163388.webp" alt="ninthSection_Img" className='h-full w-full object-cover'/>
        <SlideReveal bgColor={'#4c2e2b'} />
        </div>
        
        <div className='md:w-7/12 h-auto mt-10 md:m-0'>
          <ul className='border-y-2 w-full border-brown15Text py-10'>

            <li className='flex justify-between gap-10 pb-7 border-b border-brown15Text items-center hover:pb-10 transition-all duration-100 ease-linear'>
              <span className='text-[#262140] w-1/12'>01.</span>
              <span className='text-brown15Text w-4/12'>Asset Allocation</span>
              <span className='text-[#262140] w-4/12'>Wealth Management</span>
              <span className='text-brown15Text w-1/12 flex justify-center'><FaArrowRight size={10}/></span>
            </li>

            <li className='flex justify-between gap-10 border-b border-brown15Text py-7 items-center hover:py-10 transition-all duration-100 ease-linear'>
              <span className='text-[#262140] w-1/12'>02.</span>
              <span className='text-brown15Text w-4/12'>Estate Planning</span>
              <span className='text-[#262140] w-4/12'>Wealth Management</span>
              <span className='text-brown15Text w-1/12 flex justify-center'><FaArrowRight size={10}/></span>
            </li>

            <li className='flex justify-between gap-10 border-b border-brown15Text py-7 items-center hover:py-10 transition-all duration-100 ease-linear'>
              <span className='text-[#262140] w-1/12'>03.</span>
              <span className='text-brown15Text w-4/12'>Risk Assessment</span>
              <span className='text-[#262140] w-4/12'>Investment Advisory</span>
              <span className='text-brown15Text w-1/12 flex justify-center'><FaArrowRight size={10}/></span>
            </li>

            <li className='flex justify-between gap-10 border-b border-brown15Text py-7 items-center hover:py-10 transition-all duration-100 ease-linear'>
              <span className='text-[#262140] w-1/12'>04.</span>
              <span className='text-brown15Text w-4/12'>Portfolio Optimization</span>
              <span className='text-[#262140] w-4/12'>Investment Advisory</span>
              <span className='text-brown15Text w-1/12 flex justify-center'><FaArrowRight size={10}/></span>
            </li>

            <li className='flex justify-between gap-10 border-b border-brown15Text py-7 items-center hover:py-10 transition-all duration-100 ease-linear'>
              <span className='text-[#262140] w-1/12'>05.</span>
              <span className='text-brown15Text w-4/12'>Income Planning</span>
              <span className='text-[#262140] w-4/12'>Retirement Planning</span>
              <span className='text-brown15Text w-1/12 flex justify-center'><FaArrowRight size={10}/></span>
            </li>

            <li className='flex justify-between gap-10  pt-7 items-center hover:pt-10 transition-all duration-100 ease-linear'>
              <span className='text-[#262140] w-1/12'>06.</span>
              <span className='text-brown15Text w-4/12'>Tax-Efficient Drawdowns</span>
              <span className='text-[#262140] w-4/12'>Tax Optimization</span>
              <span className='text-brown15Text w-1/12 flex justify-center'><FaArrowRight size={10}/></span>
            </li>
          </ul>
        </div>
        </div>
      
      </div>
    </div>
  )
}

export default NinthSection;
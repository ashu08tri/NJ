import SlideReveal from '../animations/SlideReveal';
import HoverText from '../animations/HoverText';
import { FaArrowRight } from "react-icons/fa6";

function SixthSection() {
  return (
    <div className='p-8 md:px-12 md:py-24 bg-[#f5e7e6]'>
<p className='text-7xl md:text-9xl md:font-medium text-[#262140] pb-6 md:pb-10'>SERVICES</p>
      {/* Container for the entire section */}
      <div className='md:flex justify-between'>
        
        {/* Left Side: Service Title, Texts, and Image */}
        <div className='md:w-5/12 flex flex-col justify-between gap-6 text-[#262140]'>
          <p className='text-xl md:font-medium'>
            Your assets are the building blocks of your financial future, and their allocation can make or break your investment journey.
          </p>
          <p>
            Our Asset Allocation service is designed to diversify your portfolio optimally, balancing risk and reward.
          </p>
          <div className='w-72 text-brown15Text'>
            <HoverText
              text={'ALL SERVICES'}
              mainBG={'rgba(0,0,0,0)'}
              overlayBG={'rgba(230, 148, 140, .2)'}
              borderColor={'black'}
            />
          </div>
          <div className='relative overflow-hidden w-full h-56 py-3 md:h-[35vh]'>
            <img
              loading='lazy'
              src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/651577692e864426ee31197c_pexels-tima-miroshnichenko-5717313-p-1080.webp"
              alt="sixthSection_Img"
              className='h-full w-full object-cover border border-brown15Text'
            />
            <SlideReveal bgColor={'#4c2e2b'} />
          </div>
        </div>

        {/* Right Side: List of Services */}
        <div className='md:w-6/12 mt-10 md:m-0'>
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
  );
}

export default SixthSection;

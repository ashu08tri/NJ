import { Link } from "react-router-dom"

function FourthSection() {
  return (
    <>
    <div className="bg-[#e4cecc] text-[#362f5a] p-8 h-96 md:h-[65vh] flex flex-col md:flex-row items-center gap-10 md:justify-between">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
            <p className="pb-4">Get Started</p>
            <p className="text-4xl md:text-6xl">Ready for Your Own Success Story?</p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-8">
            <p className="md:w-3/4">Speak to our financial experts today and let&apos;s write your success chapter together. Our team is eager to help you achieve your financial goals. Contact us now.</p>
            <Link to='/consultation' className='self-start border border-black py-4 px-10 text-brown9'>Free Consultation</Link>
        </div>
    </div>

    <div className='h-[130vh] relative border-b border-brown9'>
      <img loading='lazy' src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/651e973b8698371ad69840f8_83e55f5-2dde-3008-bf47-4d36351f8a40-poster-00001.jpg" alt="case_studyimg" className='w-full h-full object-cover'/>
      <div className="absolute h-full inset-0 bg-gradient-to-t from-[#262140] to-[#262140] opacity-50 mix-blend-multiply"></div>
      <div className="absolute h-full inset-0 bg-gradient-to-b from-[#262140] to-[#262140] opacity-50 mix-blend-multiply"></div>
      <div className='absolute inset-0 h-full w-full md:flex cursor-pointer'>
        {/* First Column */}
        <div className='w-full h-1/3 md:w-1/3 md:h-full hover:border-y md:hover:border-x border-brown9 flex md:flex-col justify-center items-center duration-500 ease-in-out hover:bg-[#352d5e] md:hover:w-[600px] hover:delay-100'>
          <div className='text-center text-brown9 md:max-w-[500px] w-full'>
            <p className='text-4xl md:text-7xl font-semibold mt-10'>16.3%</p>
            <p className='text-base md:text-3xl px-4 md:px-28 py-16'>Average ROI of 16.3% Annually</p>
            <p className='text-xs md:text-base md:px-32 md:mt-52'>Achieve long-term growth. Our clients enjoy an average annual ROI of 16.3%.</p>
          </div>
        </div>

        {/* Second Column */}
        <div className='w-full h-1/3 md:w-1/3 md:h-full hover:border-y border-x md:border-0 md:hover:border-x border-brown9 flex md:flex-col justify-center items-center duration-500 ease-in-out hover:bg-[#352d5e] md:hover:w-[600px] hover:delay-100'>
          <div className='text-center text-brown9 md:max-w-[500px] w-full'>
            <p className='text-4xl md:text-7xl font-semibold mt-10'>+200</p>
            <p className='text-base md:text-3xl px-4 py-16'>Success Client <br /> Stories</p>
            <p className='text-xs md:text-base md:px-36 md:mt-52'>Hear firsthand accounts of financial success from our satisfied clients.</p>
          </div>
        </div>

        {/* Third Column */}
        <div className='w-full h-1/3 md:w-1/3 md:h-full hover:border-y md:hover:border-x border-brown9 flex md:flex-col justify-center items-center duration-500 ease-in-out hover:bg-[#352d5e] md:hover:w-[600px] hover:delay-100'>
          <div className='text-center text-brown9 md:max-w-[500px] w-full'>
            <p className='text-4xl md:text-7xl font-semibold mt-10'>$300M</p>
            <p className='text-base md:text-3xl px-4 py-16'>In Sustainable <br /> Investments</p>
            <p className='text-xs md:text-base md:px-28 md:mt-52'>Our sustainable investment options offer both strong performance and impact.</p>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default FourthSection
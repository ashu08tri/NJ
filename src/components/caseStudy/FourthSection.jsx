import React from 'react';

function FourthSection() {
  return (
    <div className='h-[130vh] relative border-b border-brown9'>
      <img src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/6515539e641fcc96eecd1c81_pexels-gustavo-fring-4173265-p-800.webp" loading='lazy' alt="aboutImg5" className='w-full h-full object-cover'/>
      <div className="absolute h-full inset-0 bg-gradient-to-t from-[#262140] to-[#262140] opacity-50 mix-blend-multiply"></div>
      <div className="absolute h-full inset-0 bg-gradient-to-b from-[#262140] to-[#262140] opacity-50 mix-blend-multiply"></div>
      <div className='absolute inset-0 h-full w-full md:flex cursor-pointer'>
        {/* First Column */}
        <div className='w-full h-1/3 md:w-1/3 md:h-full hover:border-y md:hover:border-x border-brown9 flex md:flex-col justify-center items-center duration-500 ease-in-out hover:bg-[#352d5e] md:hover:w-[600px] hover:delay-100'>
          <div className='text-center text-brown9 md:max-w-[500px] w-full'>
            <p className='text-4xl md:text-7xl font-semibold mt-10'>30%</p>
            <p className='text-base md:text-3xl px-4 md:px-28 py-16'>Boosted Annual Revenue</p>
            <p className='text-xs md:text-base md:px-32 md:mt-52'>On average, our clients have experienced a 20-30% increase in annual revenue.</p>
          </div>
        </div>

        {/* Second Column */}
        <div className='w-full h-1/3 md:w-1/3 md:h-full hover:border-y border-x md:border-0 md:hover:border-x border-brown9 flex md:flex-col justify-center items-center duration-500 ease-in-out hover:bg-[#352d5e] md:hover:w-[600px] hover:delay-100'>
          <div className='text-center text-brown9 md:max-w-[500px] w-full'>
            <p className='text-4xl md:text-7xl font-semibold mt-10'>15%</p>
            <p className='text-base md:text-3xl px-4 py-16'>Lowered Operational <br /> Costs</p>
            <p className='text-xs md:text-base md:px-28 md:mt-52'>Through our advisories, clients typically cut their operational costs by up to 15%.</p>
          </div>
        </div>

        {/* Third Column */}
        <div className='w-full h-1/3 md:w-1/3 md:h-full hover:border-y md:hover:border-x border-brown9 flex md:flex-col justify-center items-center duration-500 ease-in-out hover:bg-[#352d5e] md:hover:w-[600px] hover:delay-100'>
          <div className='text-center text-brown9 md:max-w-[500px] w-full'>
            <p className='text-4xl md:text-7xl font-semibold mt-10'>$200K</p>
            <p className='text-base md:text-3xl px-4 py-16'>Maximized Tax Savings</p>
            <p className='text-xs md:text-base md:px-32 md:mt-52'>Our tax strategies have saved clients an average of $200k per annum.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default FourthSection;

import React from 'react'

function SecondSection({text}) {
  return (
    <div className='text-[#362f5a] py-20 px-6 bg-[#f5e7e6]'>
        <p className='text-4xl md:text-6xl md:w-10/12 pb-16'>{text}</p>

        <div className='md:flex gap-36 pt-16 md:pt-24 border-t border-[#362f5a]'>

            <p className='md:w-1/3'>About the solution</p>

            <div className='flex flex-col md:flex-row justify-evenly lg:h-[80vh]'>
                <div className='md:w-1/3'>
                    <p><span className='font-medium'>Navigating the financial landscape can be overwhelming, whether you're an individual or running a business.</span> Let us be your compass, pointing you in the direction of financial growth and stability.</p>

                    <p className='py-10 md:py-16'><span className='font-medium text-2xl'>Expert Guidance</span> <br /> Our team of experienced financial advisors are not just experts in their field—they're also dedicated to understanding you. This allows us to create bespoke financial plans that are a true reflection of your goals.</p>

                    <p><span className='font-medium text-2xl'>Commitment to Excellence</span> <br />Quality is at the heart of everything we do. Our rigorous approach combines data-driven insights and intuitive understanding to offer you services that are both effective and ethical.</p>
                </div>

                <div className='md:w-1/3 mt-4 md:m-0'>
                <img loading='lazy' src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/651c05ef7db4f38d102e2a63_clay-banks-WNrMJykUiwU-unsplash.webp" alt="sol_img" className='w-full h-full object-cover'/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default SecondSection;
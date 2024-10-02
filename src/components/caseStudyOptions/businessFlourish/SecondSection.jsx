import React from 'react'
import { Link } from 'react-router-dom'

function SecondSection() {
  return (
    <div className='md:flex bg-[#f5e7e6] text-[#362f5a]'>
  <div className='md:w-1/4 pl-10 md:pl-16 py-8 md:py-16'>
    <ul className='sticky top-20 flex flex-col h-auto'>

      <li className='border-l-2 border-[#b36b64] pl-4 py-3 font-medium'>About</li>

      <li className='border-l-2 border-lightBorder pl-4 py-2 w-3/4'>
        <p>Ensuring Business Longevity through Succession Planning and Commercial Investment</p>
      </li>

      <li className='border-l-2 border-lightBorder pl-4 py-3'>
        <p className='font-medium'>Client</p>
        <p>John's Catering Services</p>
      </li>

      <li className='border-l-2 border-lightBorder pl-4 py-3'>
        <p className='font-medium'>Industry</p>
        <p>Food & Beverage</p>
      </li>

      <li className='border-l-2 border-lightBorder pl-4 py-3'>
        <p className='font-medium'>Duration</p>
        <p>6 months</p>
      </li>

      <li className='border-l-2 border-lightBorder pl-4 py-3'>
        <p className='font-medium'>Solution</p>
        <Link to='/'>Financial Education</Link>
      </li>

      <li className='border-l-2 border-lightBorder pl-4 py-3'>
        <p className='font-medium'>Services</p>
        <div className='flex flex-col'>
        <Link to='/'>Income Planning</Link>
        <Link to='/'>Personal Finance Workshops</Link>
        <Link to='/'>Risk Assessment</Link>
        <Link to='/'>Portfolio Optimization</Link>
        </div>
      </li>

    </ul>
  </div>
  <div className='md:w-3/4 px-10 py-8 md:py-16 flex flex-col items-center gap-10 md:gap-16 justify-between'>

    <div className='md:w-3/4'>
      <p className='text-xl md:text-3xl font-medium'>Content</p>
      <p className='py-6'><span>Discover how our tailored financial solutions have transformed the lives and businesses of our clients.</span>
      <span>Our case studies provide an in-depth look at the challenges faced, strategies employed, and the remarkable outcomes achieved.</span></p>
    </div>


    <div className='md:w-3/4'>
      <p className='text-xl md:text-3xl font-medium'>Real Success, Real Stories</p>
      <p className='py-6'>Beyond the numbers and solutions, our case studies reveal the personal impact of effective financial planning. They&#39;re narratives of dreams realized, businesses saved, and lives changed. Get inspired by real-world applications of our services and start imagining what we could do for you.</p>
      <ul className='list-disc pl-7'>
        <li>In-depth problem analysis</li>
        <li>Custom-tailored financial solutions</li>
        <li>Long-term client satisfaction</li>
      </ul>
    </div>

    <div className='md:w-3/4'>
      <p className='text-xl md:text-3xl font-medium'>Navigate Your Financial Maze</p>
      <p className='py-6'>No two financial challenges are the same. We understand this, and that's why each case study showcases a unique scenario. Learn about various financial issues, from asset allocation to tax strategy, and see how we've steered our clients toward success.</p>
      <ul className='list-disc pl-7'>
        <li>Diverse financial issues tackled</li>
        <li>Industry-specific solutions</li>
        <li>Hands-on guidance and support</li>
      </ul>
    </div>

    <div className='md:w-3/4'>
      <p className='text-xl md:text-3xl font-medium'>The Numbers Speak for Themselves</p>
      <p className='py-6'>Our case studies aren't just stories; they're backed by data. We believe in measuring success with tangible results. Explore key performance indicators, growth metrics, and financial milestones that underscore each success story.</p>
      <ul className='list-disc pl-7'>
        <li>Key performance indicators</li>
        <li>Transparent ROI metrics</li>
        <li>Client testimonials</li>
      </ul>
    </div>

    <div className='md:ml-32 md:w-3/4 self-start border-t border-brown15Text py-10 flex flex-col gap-8 items-center'>
      <p className='self-start'>Reach out to us and we&#39;ll guide you on your financial journey.</p>
      <Link to='/consultation' className='self-start border border-black py-4 px-10 text-brown9'>Free Consultation</Link>
    </div>

  </div>
</div>

  )
}

export default SecondSection;
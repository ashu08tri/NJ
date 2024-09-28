import React from 'react';
import '../contactPage/checkbox.css';

function ThirdSection() {
    return (
        <div className='bg-[#1e1a33] py-12 md:py-20 px-6 md:px-12 text-[#f8b3ac]'>
            <div>
                <p className='text-3xl md:text-5xl pb-12 md:w-1/2'>Share Your Experience With Us</p>
                <form>
                    <div className='border-b border-brown15Text flex items-center md:hover:py-2 transition-all duration-75 ease-in'>
                        <label htmlFor="name" className='md:w-1/12 opacity-80'>FullName</label>
                        <input type="text" className='ml-4 md:m-0 md:w-11/12 py-6 bg-transparent focus:outline-none text-xl placeholder-brown9HoverBox' placeholder='Enter Name' required />
                        <span className='hidden md:block'>Required</span>
                    </div>
                    <div className='border-b border-brown15Text flex items-center md:hover:py-2 transition-all duration-75 ease-in'>
                        <label htmlFor="email" className='md:w-1/12 opacity-80'>Email</label>
                        <input type="email" className='ml-4 md:m-0 md:w-11/12 py-6 bg-transparent focus:outline-none text-xl placeholder-brown9HoverBox' placeholder='example@hello.com' required />
                        <span className='hidden md:block'>Required</span>
                    </div>
                    <div className='border-b border-brown15Text flex items-center md:hover:py-2 transition-all duration-75 ease-in'>
                        <label htmlFor="phone" className='md:w-1/12 opacity-80'>Phone</label>
                        <input type="tel" className='ml-4 md:m-0 md:w-11/12 py-6 bg-transparent focus:outline-none text-xl placeholder-brown9HoverBox' placeholder='+9199999999' required />
                        <span className='hidden md:block'>Required</span>
                    </div>
                    <div className='border-b border-brown15Text flex items-center md:hover:py-2 transition-all duration-75 ease-in'>
                        <label htmlFor="role" className='md:w-1/12 opacity-80'>Role</label>
                        <input type="text" className='ml-4 md:m-0 md:w-11/12 py-6 bg-transparent focus:outline-none text-xl placeholder-brown9HoverBox' placeholder='Teacher' required />
                        <span className='hidden md:block'>Required</span>
                    </div>
                    <div className='border-b border-brown15Text flex md:hover:py-2 transition-all duration-75 ease-in'>
                        <label htmlFor="name" className='md:w-1/12 opacity-80 pt-6'>Testimonial</label>
                        <textarea className='ml-4 md:m-0 w-full md:w-11/12 pt-6 bg-transparent focus:outline-none text-xl placeholder-brown9HoverBox' rows={12} placeholder='Tell Us more about your financial goals'/>
                    </div>
                    <div className='py-8 text-[#b36b64] text-xs md:text-2xl'>
                        <label htmlFor="accept" className='md:flex items-center'>
                            <input type="checkbox" class="custom-checkbox " />
                            By clicking this button, you agree to our <span className='underline underline-offset-2 px-2'>Terms of Service</span> and <span className='underline underline-offset-2 px-2'>Privacy Policy</span>.
                        </label>
                    </div>
                    <div className='py-2 text-[#b36b64] text-xs md:text-2xl'>
                        <label htmlFor="accept" className='flex items-center'>
                            <input type="checkbox" class="custom-checkbox " />
                           <span className='md:font-medium pr-2'> Newsletter. </span> Keep me updated with the latest news and offers.
                        </label>
                    </div>
                    <button className='mt-7 py-8 w-full bg-[#362f5a] border border-[#5c5099] text-[#e4938a] text-3xl hover:bg-[]'>Apply Now</button>
                </form>
            </div>

        </div>
    )
}

export default ThirdSection;
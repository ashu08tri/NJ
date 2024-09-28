import { useRef } from 'react';
import SlideReveal from '../animations/SlideReveal';
import { motion, useInView } from 'framer-motion';

function SecondSection() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const inView1 = useInView(ref1, { once: true });
    const inView2 = useInView(ref2, { once: true });
    const inView3 = useInView(ref3, { once: true });

    return (
        <div className='py-12 px-10 md:px-16 md:py-20 bg-[#f5e7e6] text-[#995c56]'>
            <p className='text-[#262140] text-3xl md:text-7xl py-10 md:mb-8 text-center'>Hear From Our Satisfied Clients</p>

            {/* First Section */}
            <div ref={ref1} className='md:flex justify-between'>
                <div className='h-[60vh] md:h-[80vh] md:w-1/2 md:flex justify-center'>
                    <div className='relative overflow-hidden h-full md:w-[65%]'>
                        <motion.img 
                            loading="lazy" 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: inView1 ? 1 : 0, transition: { delay: .6 } }} 
                            src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651e91b15cfda45e13ff7d61_pexels-tima-miroshnichenko-5717639.jpg" 
                            alt="img1" 
                            className='h-full w-full object-cover' 
                        />
                        <SlideReveal bgColor={"#362f5a"} />
                    </div>
                </div>
                <motion.div 
                    initial={{opacity: 0, y: 100}} 
                    animate={{opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 100, transition: {duration: .8, ease: 'easeIn'}}}
                    className='md:w-1/2 text-center flex flex-col gap-5 justify-center items-center mt-4 md:m-0'>
                    <p className='text-2xl font-medium md:text-3xl'>Emily Thompson</p>
                    <p>Small Business Owner</p>
                    <p className='font-medium'>99</p>
                    <p className='md:w-3/4 opacity-90'>Since partnering with Kassa, my business has experienced significant growth. Their investment strategies are top-notch, and the advice on tax planning has been invaluable. They made the complex world of finance feel simple.</p>
                    <div className='flex gap-5 mt-4 md:m-0'>
                        <p>Asset Allocation</p>
                        <p>Income Planning</p>
                    </div>
                </motion.div>
            </div>

            {/* Second Section */}
            <div ref={ref2} className='md:flex justify-between mt-16 md:mt-20'>
                <div className='h-[60vh] md:h-[80vh] md:w-1/2 order-1 md:order-2 md:flex justify-center'>
                    <div className='relative overflow-hidden h-full md:w-[65%]'>
                        <motion.img 
                            loading="lazy"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: inView2 ? 1 : 0, transition: { delay: 0.6 } }}
                            src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651e9195a20c5481958f33b8_pexels-pavel-danilyuk-8111827.jpg"
                            alt="img2"
                            className='h-full w-full object-cover'
                        />
                        <SlideReveal bgColor={"#362f5a"} />
                    </div>
                </div>
                <motion.div 
                    initial={{opacity: 0, y: 100}} 
                    animate={{opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 100, transition: {duration: .8, ease: 'easeIn'}}}
                    className='md:w-1/2 text-center flex flex-col gap-5 justify-center items-center mt-4 md:m-0 order-2 md:order-1'>
                    <p className='text-2xl font-medium md:text-3xl'>Priya Kapoor</p>
                    <p>Marketing Manager</p>
                    <p className='font-medium'>99</p>
                    <p className='md:w-3/4 opacity-90'>I've worked with financial advisors before, but the team at Kassa is different. Their Estate Planning service was a lifesaver for me. They took the time to understand my unique needs and crafted a financial plan that truly resonates with my lifestyle and aspirations. The personal touch is what sets them apart.</p>
                    <div className='flex gap-5 mt-4 md:m-0'>
                        <p>Investment Webinars</p>
                        <p>Personal Finance Workshops</p>
                    </div>
                </motion.div>
            </div>

            {/* Third Section */}
            <div ref={ref3} className='md:flex justify-between mt-16 md:mt-20'>
                <div className='h-[60vh] md:h-[80vh] md:w-1/2 md:flex justify-center'>
                    <div className='relative overflow-hidden h-full md:w-[65%]'>
                        <motion.img 
                            loading="lazy" 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: inView3 ? 1 : 0, transition: { delay: .6 } }} 
                            src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651e92098d6ed71bd608d469_pexels-ron-lach-8035285.jpg" 
                            alt="img3" 
                            className='h-full w-full object-cover' 
                        />
                        <SlideReveal bgColor={"#362f5a"} />
                    </div>
                </div>
                <motion.div 
                    initial={{opacity: 0, y: 100}} 
                    animate={{opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 100, transition: {duration: .8, ease: 'easeIn'}}}
                    className='md:w-1/2 text-center flex flex-col gap-5 justify-center items-center mt-4 md:m-0'>
                    <p className='text-2xl font-medium md:text-3xl'>Tobias Müller</p>
                    <p>High School Teacher</p>
                    <p className='font-medium'>99</p>
                    <p className='md:w-3/4 opacity-90'>As a teacher, planning for the future is second nature to me, but I always found personal finance to be a puzzle. Kassa simplified everything with their Income Planning and Tax Strategy Consultation services. For the first time, I feel like I'm not just saving, but actually building a future. A class act!</p>
                    <div className='flex gap-5 mt-4 md:m-0'>
                        <p>Asset Allocation</p>
                        <p>Estate Planning</p>
                        <p>Income Planning</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default SecondSection;

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from '../landingpage/second.module.css';
import SlideReveal from '../animations/SlideReveal';
import { FaArrowDown } from "react-icons/fa6";

const data = [
    {
        sNo: 1,
        name: 'Financial',
        title: 'Proactive Solutions',
        desc: 'We offer proactive, fully-integrated financial solutions that take the guesswork out of wealth management. Whether you&apos;re an individual or a business, we&apos;ve got the tools and expertise to help you meet and exceed your financial goals.',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/651577695c44098667c5f6fe_pexels-pavel-danilyuk-8112152-p-500.webp'
    },
    {
        sNo: 2,
        name: 'Unique needs',
        title: 'Services Tailored to You',
        desc: 'Our diverse range of services, from asset allocation to tax compliance, are custom-fit to your unique needs. With our expertise, we guide you through each step, ensuring that your financial decisions are smart, secure, and sustainable.',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/651c05eef81f1dddc05394e0_clay-banks-yWla5dgcdMY-unsplash-p-800.webp'
    },
    {
        sNo: 3,
        name: 'Proven Results',
        title: 'Real Success, Real Stories',
        desc: 'Our case studies offer a glimpse into the transformative impact of our services. From increasing business revenue to maximizing personal wealth, we showcase our capability to make a meaningful difference.',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/6515771f169082b87ed293ff_pexels-gustavo-fring-5163388-p-800.webp'
    },
    {
        sNo: 4,
        name: 'Take Action',
        title: 'Consultations That Count',
        desc: 'We believe that financial success starts with a conversation. Our one-on-one consultations are designed to understand your unique needs and tailor a plan that&apos;s right for you.',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/65157769e310a80b1e4816a1_pexels-los-muertos-crew-10041276-p-800.webp'
    },

]

function SecondSection() {

    return (
        <div className='px-8 md:px-16 bg-second py-20 '>
            <div className='md:flex items-center mb-12 md:mb-20'>
                <div className='w-full md:w-1/2 text-secondText'>
                    <p className='pb-16 uppercase'>
                        company
                    </p>
                    <p className='text-5xl md:text-6xl'>Crafting Financial</p>
                    <p className='text-5xl md:text-6xl py-4'>Pathways, One </p>
                    <p className='text-5xl md:text-6xl'>Solution at a Time</p>
                </div>


                <div className='w-full md:w-1/2 text-secondText mt-12 md:mt-24'>
                    <p className='leading-8 md:w-3/4'>We understand that the financial landscape can be complex and overwhelming. That's why we're dedicated to providing you with simplified, efficient, and personalized financial solutions. It's about building relationships that stand the test of time.</p>
                    <div className='mt-8 md:mt-12'>

                        <button className='uppercase pr-8 pl-2 border border-transparent text-brown9 hover:border-brown9 hover:bg-brown9Hover rounded-3xl hover:pl-4 transition-all duration-300 flex justify-between items-center gap-4'>
                            <div className='relative w-12 h-12 flex items-center justify-center'>
                                <svg
                                    className='-rotate-90'
                                    width="20"
                                    height="20"
                                    viewBox="0 0 40 40"
                                >
                                    <circle
                                        className={styles.progressRing}
                                        cx="20"
                                        cy="20"
                                        r="18"
                                        stroke="rgb(204, 123, 114)"
                                        strokeWidth="5"
                                        fill="none"
                                    />
                                </svg>
                                <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                    <FaArrowDown size={8} />
                                </span>
                            </div>
                            <span className='text-xs font-medium uppercase'>What we are offering</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex justify-center mb-20'>
                <img src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/6516e3fae8b274b4838678cb_bda21aa-c30-c764-e1f2-f65b041c420-poster-00001.jpg" alt="about_img" className='w-full md:w-[98vw] h-full md:h-[78vh] object-cover' />
            </div>

            <div>
                {data.map((item, i) => {

                    const ref = useRef(null);
                    const inView = useInView(ref, {once: true});

                    return (
                        <div className='md:flex justify-between items-center text-[#362f5a] mb-2' key={i}>
                            <div className='flex justify-center gap-10 w-full md:w-5/12'>
                                <p>0{item.sNo}.</p>
                                <div>
                                    <p className='text-xs uppercase'>{item.name}</p>
                                    <p className='text-4xl md:text-5xl py-2 md:py-4'>{item.title}</p>
                                    <p className='opacity-75'>{item.desc}</p>
                                </div>
                            </div>

                            <div ref={ref} className='relative overflow-hidden flex items-center justify-center w-full md:w-[50%] h-80 md:h-96 p-4 md:p-10'>
                                <div className='relative w-full h-full overflow-hidden'>
                                    {/* Animate only the image */}
                                    <motion.img
                                        src={item.img}
                                        alt="about_img"
                                        className='object-cover w-full h-full'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: inView ? 1 : 0, transition: {delay: .6} }}
                                        
                                    />
                                    <SlideReveal bgColor={"#4c2e2b"} />
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default SecondSection;
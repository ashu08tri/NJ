import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import SlideReveal from '../animations/SlideReveal';
import { FaArrowRight } from "react-icons/fa6";

const data = [
    {
        sNo: 1,
        title: 'Assest Allocation',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/6515533d9608969bf906f399_pexels-sora-shimazaki-5669614.jpg',
        desc: 'Strategic assests distribution for balanced growth',
        url: 'assest-allocation'
    },
    {
        sNo: 2,
        title: 'Estate Planning',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/652565ed5dfb036da3e9efb9_matthew-henry-VviFtDJakYk-unsplash.jpg',
        desc: 'Safegaurd your legacy throught expert estate planning',
        url: 'estate-planning'
    },
    {
        sNo: 3,
        title: 'Risk Assessment',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651fdc82e7b34681ca7c3067_pexels-karolina-grabowska-4386374.jpg',
        desc: 'Quantify and manage financial risks effectively',
        url: 'risk-assessment'
    },
    {
        sNo: 4,
        title: 'Portfolio Optimization',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651c0630b17bd62222f63be6_clay-banks-JPhVGeY4H7I-unsplash.jpg',
        desc: 'Maximize returns through portfolio optimization',
        url: 'portfolio-optimization'
    },
    {
        sNo: 5,
        title: 'Income Planning',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/65154e35eaecbad0896ec1a5_pexels-gustavo-fring-4173258.jpg',
        desc: 'Strategic planning for stable income flow',
        url: 'income-planning'
    },
    {
        sNo: 6,
        title: 'Tax-Efficient Drawdowns',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/65154e3d3e5c3dc909470d50_pexels-gustavo-fring-3873856.jpg',
        desc: 'Optimize withdrawals with taz-efficient strategies',
        url: 'tax-efficient-drawdowns'
    },

]

function SecondSection() {
    return (
        <div className='bg-[#f5e7e6] text-[#995c56] px-6 md:px-20'>
            <div className='text-[#262140] flex justify-between py-24'>
                <p>Choose a expertise</p>
                <p>Services</p>
            </div>

            <div>
                {
                    data.map((item, i) => {
                        const ref = useRef(null);
                        const inView = useInView(ref, { once: true });
                        return (
                            <Link to={`/services/${item.url}`} key={i}
                            ref={ref} className='block'>
                            <motion.ul 
                                initial="initial"
                                 
                                whileHover="hover"
                                className='flex flex-col h-auto md:flex-row relative md:justify-between md:hover:py-12 transition-all duration-150 ease-linear md:items-center cursor-pointer py-10 border-b border-[#995c56] first:border-t-2 last:border-0'>

                                <div className='w-full md:w-7/12 flex flex-col md:flex-row justify-start md:items-center md:gap-20'>

                                    <div className='flex justify-between gap-10 items-center md:w-1/2 px-2'>
                                    <li>0{item.sNo}.</li>
                                    <li className='bg-[#f5e7e6] relative h-28 w-80 md:w-48 overflow-hidden'>
                                        <SlideReveal bgColor={"#262140"} />
                                        <motion.img
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: inView ? 1 : 0, transition: { duration: .5, delay: .6 } }} src={item.img} alt="services_img" className='object-cover w-full h-full' />

                                    </li>
                                    </div>

                                    <motion.li
                                    initial={{opacity: 0, x: -50}}
                                    animate= {{opacity: inView ? 1 : 0, x: inView ? 0 : -50, transition: {duration: .5, ease: 'linear'}}}
                                        className='block py-3 md:p-0  text-2xl md:text-3xl md:w-[98%] md:mr-8'>{item.title}
                                        <motion.span
                                            initial={{ width: 0 }}
                                            variants={{
                                                hover: {
                                                    width: '30%',
                                                    transition: {
                                                        duration: 2,
                                                        delay: 0.45,
                                                        ease: [0.2, 1, 0.2, 1],
                                                    },
                                                },
                                            }}
                                            className='absolute bottom-0 h-[2px] bg-[#995c56] hidden md:block'
                                        />
                                    </motion.li>
                                </div>
                                <motion.div
                                initial={{opacity: 0, x: -70}}
                                animate= {{opacity: inView ? 1 : 0, x: inView ? 0 : -70, transition: {duration: .5, ease: 'linear'}}}
                                className='md:w-5/12 md:flex justify-between items-center md:px-6'>
                                    <li className='md:w-1/2'>{item.desc}</li>
                                    <motion.li
                                    className='hidden md:block'
                                    variants={{
                                        hover: {
                                            x: ['0%', '200%', '-100%', '0%'], // Move to the right, then jump to the left off-screen, and come back
                                            opacity: [1, 0, 0, 1],
                                            scale: [1,0.5,0,1]
                                        },
                                    }}
                                    initial={{ x: 0, opacity: 1 }} // Start at original position, fully visible
                                    transition={{
                                        duration: 1, // Total duration for the animation sequence
                                        ease: [0.2, 1, 0.2, 1], // Smooth easing
                                        times: [0, 0, 0, 1], // Adjust timing for each step in the animation
                                    }}
                                    ><FaArrowRight size={15} /></motion.li>
                                </motion.div>

                            </motion.ul>
                            </Link>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}

export default SecondSection;
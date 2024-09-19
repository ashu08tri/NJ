import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import HoverText from '../animations/HoverText';
import { FaArrowRight } from "react-icons/fa6";

const data = [
    {
        sNo: 1,
        title: 'Wealth Management',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/65118546ea066f424888e31a_pexels-tima-miroshnichenko-5717069-p-500.jpg',
        desc: 'Maximize your wealth through personalized asset & estate planning.'
    },
    {
        sNo: 2,
        title: 'Investment Advisory',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651191e2be015f37785da01d_pexels-pavel-danilyuk-8112164-p-800.jpg',
        desc: 'Strategic investment advice to help you reach financial success.'
    },
    {
        sNo: 3,
        title: 'Retirement Planning',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/65119201066cbcc2b9789a2d_pexels-sora-shimazaki-5668856-p-500.jpg',
        desc: 'Secure your future with custom retirement income strategies.'
    },
    {
        sNo: 4,
        title: 'Tax Optimization',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/65119222f421c66b366f44bb_pexels-tima-miroshnichenko-5717271-p-1080.jpg',
        desc: 'Save more with strategic tax planning and complete compliance.'
    },
];

function SeventhSection() {
    const [textWidths, setTextWidths] = useState([]);
    const [screenSize, setScreenSize] = useState('large');

    // Function to update the screen size
    const updateScreenSize = () => {
        if (window.matchMedia('(max-width: 640px)').matches) {
            setScreenSize('small');
        } else if (window.matchMedia('(max-width: 1024px)').matches) {
            setScreenSize('medium');
        } else {
            setScreenSize('large');
        }
    };

    useEffect(() => {
        const updateWidths = () => {
            const widths = Array.from(document.querySelectorAll('.textRef')).map(el => el.offsetWidth);
            setTextWidths(widths);
        };

        // Initial call to set the screen size and widths
        updateScreenSize();
        updateWidths();

        window.addEventListener('resize', updateScreenSize);
        window.addEventListener('resize', updateWidths);
        return () => {
            window.removeEventListener('resize', updateScreenSize);
            window.removeEventListener('resize', updateWidths);
        };
    }, []);

    // Define responsive height variants based on the screen size
    const heightVariants = {
        initial: {
            height:
                screenSize === 'small'
                    ? '200px'
                    : screenSize === 'medium'
                    ? '160px'
                    : '160px',
            transition: { duration: 0.5 },
        },
        hover: {
            height:
                screenSize === 'small'
                    ? 'auto'
                    : screenSize === 'medium'
                    ? '200px'
                    : '200px',
            transition: { duration: 0.5 },
        },
    };


    return (
        <div className='bg-[#e4cecc] py-10'>
            <div>
                {/* Top text */}
                <div className='pl-10 md:pl-16 py-10 text-[#352d5e]'>
                    <p>Choose From</p>
                    <p className='text-6xl font-medium py-5'>Adaptive Financial Solutions</p>
                </div>
                {/* List Items */}
                <div>
                    {data.map((item, i) => (
                        <motion.ul
                            key={i}
                            className='px-8 md:p-0 relative md:flex gap-5 w-full border-t border-brown15Text transition-transform overflow-hidden last:border-b'
                            whileHover="hover"
                            whileTap="hover"
                            initial="initial"
                            variants={heightVariants} // Apply responsive variants
                        >
                            <li className='w-full md:w-1/4'>
                                <motion.li>
                                    <motion.img
                                        variants={{
                                            initial: {
                                                height: '200px',
                                                width:
                                                    screenSize === 'small'
                                                        ? '100%'
                                                        : screenSize === 'medium'
                                                        ? 0
                                                        : 0,
                                            },
                                            hover: {
                                                height: '200px',
                                                width:
                                                    screenSize === 'small'
                                                        ? '100%'
                                                        : screenSize === 'medium'
                                                        ? '80%'
                                                        : '80%',
                                                        transition: { duration: 2, delay: 0.4, ease: [0.2, 1, 0.2, 1] }
                                            },
                                        }}
                                        src={item.img}
                                        alt="listImg"
                                        className='w-full h-full object-cover'
                                    />
                                </motion.li>

                                <motion.li className='absolute top-16 left-[40%] md:left-28 px-5 py-7 bg-brown15Text rounded-md h-12 flex items-center justify-center text-[#e4cecc]'>
                                    <span className='block'>0{item.sNo}.</span>
                                </motion.li>
                            </li>

                            <li className='flex flex-col md:flex-row items-center justify-between pr-16 w-full md:w-3/4'>
                                <motion.li
                                    initial={{ x: 0 }}
                                    variants={{
                                        hover: {
                                            x: 15,
                                            transition: {
                                                duration: 2,
                                                delay: 0.45,
                                                ease: [0.2, 1, 0.2, 1],
                                            },
                                        },
                                    }}
                                    className='text-2xl md:text-3xl text-brown15Text font-medium w-full md:w-1/2 underline-offset-4 py-2 md:py-0'
                                >
                                    <span className='textRef'>{item.title}</span>
                                    <motion.span
                                        initial={{ width: 0 }}
                                        variants={{
                                            hover: {
                                                width: textWidths[i] || '0px',
                                                transition: {
                                                    duration: 2,
                                                    delay: 0.45,
                                                    ease: [0.2, 1, 0.2, 1],
                                                },
                                            },
                                        }}
                                        className='mt-2 h-[2px] bg-brown15Text block'
                                    />
                                </motion.li>

                                <motion.li
                                    initial={{ opacity: 0, x: '-20%' }}
                                    variants={{
                                        hover: {
                                            opacity: 1,
                                            x: 0,
                                            transition: { duration: 2, delay: 0.45, ease: [0.2, 1, 0.2, 1] },
                                        },
                                    }}
                                    className='text-[#352d5e] md:px-16 py-4 md:py-0 w-full md:w-auto'
                                >
                                    {item.desc}
                                </motion.li>

                                <motion.li
                                    initial={{ opacity: 0, x: '-20%' }}
                                    variants={{
                                        hover: {
                                            opacity: 1,
                                            x: 0,
                                            transition: { duration: 2, delay: 0.45, ease: [0.2, 1, 0.2, 1] },
                                        },
                                    }}
                                    className='w-64 md:w-72 text-brown15Text py-4 md:py-0 self-start md:self-auto'
                                >
                                    <HoverText text={'Solutions'} mainBG={'rgba(0,0,0,0)'} overlayBG={'rgba(230, 148, 140, .2)'} borderColor={'black'} />
                                </motion.li>

                                <motion.li
                                className='hidden md:block'
                                    initial={{ scale: 1, x: 0 }}
                                    variants={{
                                        hover: {
                                            scale: 0,
                                            x: 30,
                                            transition: { duration: 2, delay: 0.25, ease: [0.2, 1, 0.2, 1] },
                                        },
                                    }}
                                >
                                    <FaArrowRight size={25} className='text-brown15Text' />
                                </motion.li>
                            </li>
                        </motion.ul>
                    ))}
                </div>
                {/* for smaller screen */}
            </div>
            <div className='h-64 flex flex-col gap-12 justify-center items-center mt-20'>
                <p className='text-5xl font-medium text-[#352d5e] text-center'>Need Financial Growth?</p>
                <a href='/' className='w-80 text-brown15Text'>
                    <HoverText text={'Solutions'} mainBG={'rgba(0,0,0,0)'} overlayBG={'rgba(230, 148, 140, .2)'} borderColor={'black'} />
                </a>
            </div>
        </div>
    );
}

export default SeventhSection;

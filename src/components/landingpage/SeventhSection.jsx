import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HoverText from '../animations/HoverText';
import { FaArrowRight } from "react-icons/fa6";

const data = [
    {
        sNo: 1,
        title: 'Wealth Management',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/65118546ea066f424888e31a_pexels-tima-miroshnichenko-5717069-p-500.jpg',
        desc: 'Maximize your wealth through personalized asset & estate planning.',
        url: 'wealth-management'
    },
    {
        sNo: 2,
        title: 'Investment Advisory',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651191e2be015f37785da01d_pexels-pavel-danilyuk-8112164-p-800.jpg',
        desc: 'Strategic investment advice to help you reach financial success.',
        url: 'investment-advisory'
    },
    {
        sNo: 3,
        title: 'Retirement Planning',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/65119201066cbcc2b9789a2d_pexels-sora-shimazaki-5668856-p-500.jpg',
        desc: 'Secure your future with custom retirement income strategies.',
        url: 'retirement-planning'
        
    },
    {
        sNo: 4,
        title: 'Tax Optimization',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/65119222f421c66b366f44bb_pexels-tima-miroshnichenko-5717271-p-1080.jpg',
        desc: 'Save more with strategic tax planning and complete compliance.',
        url: 'tax-optimization'
    },
];

function SeventhSection() {
    const [textWidths, setTextWidths] = useState([]);
    const [screenSize, setScreenSize] = useState('large');

    const [expanded, setExpanded] = useState(null);


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

    const handleClick = (index) => {
        if (screenSize === 'small') {
            setExpanded(expanded === index ? null : index); // Toggle the expanded state for the clicked item
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
                            onClick={() => handleClick(i)} // Apply click handler
                            variants={heightVariants} // Apply height variants
                            whileHover='hover'
                            animate={expanded === i ? "hover" : "initial"} // Apply responsive variants
                        >
                            <li className='w-full md:w-1/4'>
                                <motion.li>
                                    <motion.img
                                        variants={{
                                            initial: {
                                                height: '200px',
                                                width:
                                                    screenSize === 'small'
                                                        ? '0'
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
                                    <Link to={`/solutions/${item.url}`} className='textRef'>{item.title}</Link>
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
                                    <Link to={`/solutions/${item.url}`} className='w-full'><HoverText text={'Solutions'} mainBG={'rgba(0,0,0,0)'} overlayBG={'rgba(230, 148, 140, .2)'} borderColor={'black'} /></Link>
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
            <div className='h-72 flex flex-col gap-12 justify-center items-center mt-20'>
                <p className='text-5xl font-medium text-[#352d5e] text-center'>Need Financial Growth?</p>
                <Link to='/solutions' className='w-80 text-brown15Text'>
                    <HoverText text={'Solutions'} mainBG={'rgba(0,0,0,0)'} overlayBG={'rgba(230, 148, 140, .2)'} borderColor={'black'} />
                </Link>
            </div>
        </div>
    );
}

export default SeventhSection;

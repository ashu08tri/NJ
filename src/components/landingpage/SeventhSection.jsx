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
]

function SeventhSection() {

    const [textWidths, setTextWidths] = useState([]);

    useEffect(() => {
        const updateWidths = () => {
            const widths = Array.from(document.querySelectorAll('.textRef')).map(el => el.offsetWidth);
            setTextWidths(widths);
        };

        updateWidths();
        window.addEventListener('resize', updateWidths);
        return () => window.removeEventListener('resize', updateWidths);
    }, []);

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
                            className='relative flex gap-5 w-full border-t border-brown15Text transition-transform overflow-hidden last:border-b'
                            whileHover="hover" // Define hover behavior on the parent
                            initial="initial"
                            variants={{
                                initial: { height: '160px', transition: { duration: .5 } }, // Parent height transitions in 0.5 seconds
                                hover: { height: '200px', transition: { duration: .5 } } // Hover state for parent
                            }}
                        >
                            <li className='w-1/4'>
                                <motion.li>
                                    <motion.img
                                        variants={{
                                            hover: {
                                                width: "80%",
                                                height: "200px",
                                                transition: { duration: 2, delay: 0.4, ease: [0.2, 1, 0.2, 1] } // Hover transition for the image
                                            },
                                            initial: {
                                                width: 0,
                                                height: '200px',
                                            }
                                        }}
                                        src={item.img}
                                        alt="listImg"
                                        className='w-full h-full object-cover'
                                    />
                                </motion.li>

                                <motion.li className='absolute top-16 left-28 px-5 py-7 bg-brown15Text rounded-md h-12 flex items-center text-[#e4cecc]'>
                                    0{item.sNo}.
                                </motion.li>
                            </li>

                            <li className='flex items-center justify-between pr-16 w-3/4'>
                                <motion.li
                                    initial={{ x: 0 }}
                                    variants={{
                                        hover: {
                                            x: 15,
                                            transition: {
                                                duration: 2,
                                                delay: 0.45,
                                                ease: [0.2, 1, 0.2, 1]
                                            }
                                        }
                                    }}
                                    className='text-3xl text-brown15Text font-medium w-1/2 underline-offset-4'
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
                                                    ease: [0.2, 1, 0.2, 1]
                                                }
                                            }
                                        }}
                                        className='mt-2 h-[2px] bg-brown15Text block'
                                    />
                                </motion.li>

                                <motion.li 
                                initial={{opacity: 0, x: "-20%"}}
                                variants={{
                                    hover: {opacity: 1, x: 0, transition: {duration: 2, delay: 0.45, ease: [0.2, 1, 0.2, 1]}}
                                }}
                                className='text-[#352d5e] px-16'>
                                    {item.desc}
                                </motion.li>

                                <motion.li
                                 initial={{opacity: 0, x: "-20%"}}
                                 variants={{
                                     hover: {opacity: 1, x: 0, transition: {duration: 2, delay: 0.45, ease: [0.2, 1, 0.2, 1]}}
                                 }}
                                className='w-72 text-brown15Text'>
                                    <HoverText text={'Solutions'} mainBG={'rgba(0,0,0,0)'} overlayBG={'rgba(230, 148, 140, .2)'} borderColor={'black'}/>
                                </motion.li>

                                <motion.li
                                initial={{scale: 1, x: 0}}
                                variants={{
                                    hover: {scale: 0, x: 30, transition: {duration: 2, delay: 0.25, ease: [0.2, 1, 0.2, 1]}}
                                }}
                                >
                                    <FaArrowRight size={25} className='text-brown15Text' />
                                </motion.li>
                            </li>
                        </motion.ul>
                    ))}

                    
                </div>
            </div>
            <div className='h-80 flex flex-col gap-12 justify-center items-center'>
                <p className='text-5xl font-medium text-[#352d5e]'>Need Financial Growth?</p>
                <a href='/' className='w-80 text-brown15Text'>
                    <HoverText text={'Solutions'} mainBG={'rgba(0,0,0,0)'} overlayBG={'rgba(230, 148, 140, .2)'} borderColor={'black'}/>
                </a>
            </div>
        </div>
    );
}

export default SeventhSection;
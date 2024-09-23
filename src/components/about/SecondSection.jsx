import React from 'react';
import styles from '../landingpage/second.module.css';
import { FaArrowDown } from "react-icons/fa6";

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
            
            <div className='flex justify-center'>
            <img src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/6516e3fae8b274b4838678cb_bda21aa-c30-c764-e1f2-f65b041c420-poster-00001.jpg" alt="about_img" className='w-full md:w-[98vw] h-full md:h-[78vh] object-cover'/>
            </div>
           
        </div>
    )
}

export default SecondSection;
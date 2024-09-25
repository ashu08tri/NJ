import React from 'react';
import styles from '../landingpage/second.module.css';
import { FaArrowDown } from "react-icons/fa6";

function ThirdSection() {
    return (
        <div className='md:h-[70vh] px-8 md:px-16 bg-second py-10 md:py-0 md:flex items-center'>
            <div className='w-full md:w-1/2 text-secondText mt-12 md:mt-24'>
                <p>Numbers</p>
                <p className='leading-8 text-4xl md:text-6xl pt-4'>Proven Success: Your Goals, Our Results</p>
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
                        <span className='text-xs font-medium'>Our Niche</span>
                    </button>



                </div>
            </div>

            <div className='w-full md:w-1/2 text-secondText mt-10 md:m-0'>
                <p>Numbers don't lie, and neither do we.</p>
                <p className='pt-8'>Our track record of delivering measurable results across diverse financial landscapes speaks for itself. Whether it's boosting revenue, cutting costs, or achieving fast-track financial goals, we have a history of making it happen.</p>
            </div>

        </div>
    )
}

export default ThirdSection;
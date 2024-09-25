import styles from '../landingpage/second.module.css';
import { FaArrowDown } from "react-icons/fa6";

function Header() {
  return (
    <div className='h-[70vh] flex flex-col justify-center gap-16 items-center bg-[#262140] text-[#eca098]'>
        <p className='text-6xl md:text-8xl font-medium mt-16'>Insightful Reads</p>
        <a href='#blog' className='uppercase pr-8 pl-2 border border-transparent text-brown9 hover:border-brown9 hover:bg-brown9Hover rounded-3xl hover:pl-4 transition-all duration-300 flex justify-between items-center gap-4'>
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
                        <span className='text-xs font-medium'>Blog</span>
                    </a>
    </div>
  )
}

export default Header;
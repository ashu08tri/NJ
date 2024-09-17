import { motion, AnimatePresence } from "framer-motion";
import styles from '../landingpage/header.module.css';
import { FaArrowRight } from "react-icons/fa6";

function HoverText({ text }) {
    return (
        <motion.div
            className="relative w-11/12 h-14 bg-brown9HoverBox border border-navBorder content-center overflow-hidden"
            whileHover="hover" // Trigger animation on hover
        >
            <div className={`${styles.animation} absolute inset-0`}>
                <div className={`${styles.borderTop}`}></div>
                {/* Bottom border */}
                <div className={`${styles.borderBottom}`}></div>
            </div>

            {/* Initial static text */}
            <motion.p
                variants={{
                    hover: { x: 100, opacity: 0 }, // Hide the static text on hover
                }}
                initial={{ opacity: 1 }}
                transition={{ duration: 1, ease: [0.2, 1, 0.2, 1] }} // Smooth transition for static text
                className="flex justify-between px-4 items-center"
            >
                <span>{text}</span> <span><FaArrowRight /></span>
            </motion.p>

            {/* Slide reveal animation for the div */}
            <motion.div
                variants={{
                    hover: { x: '0%' }, // Slide in on hover
                    hoverEnd: { x: '-100%' } // Slide out on hover end
                }}
                initial={{ x: '-100%' }} // Initially hidden (off-screen)
                transition={{ duration: 2, ease: [0.2, 1, 0.2, 1] }} // Smooth transition for the div
                className="w-full h-full absolute top-0 left-0 content-center"
                style={{ backgroundColor: '#4c2e2b' }}
            >
                {/* Slide reveal animation for the p tag after the div is in place */}
                <motion.p
                    variants={{
                        hover: { x: '0%' },
                        hoverEnd: { opacity: 0 } // Immediately hide on hover end
                    }}
                    initial={{ x: '-100%' }} // Initially hidden (off-screen)
                    animate="hover" // Slide in on hover
                    transition={{ delay: 0.4, duration: 1, ease: [0.2, 1, 0.2, 1] }} // Delay text slide until div is fully in place
                    className="flex justify-between px-4 items-center"
                >
                    <span>{text}</span> <span><FaArrowRight /></span>
                </motion.p>
            </motion.div>
        </motion.div>

    )
}

export default HoverText;


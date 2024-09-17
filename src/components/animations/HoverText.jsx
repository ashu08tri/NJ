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
                    hover: {
                        x: ['0%', '100%', '-100%', '0%'], // Move to the right, then jump to the left off-screen, and come back
                        opacity: [1, 0, 0, 1], // Fade out when moving to the right, stay invisible, then fade back in
                    },
                }}
                initial={{ x: 0, opacity: 1 }} // Start at original position, fully visible
                transition={{
                    duration: 2, // Total duration for the animation sequence
                    ease: [0.2, 1, 0.2, 1], // Smooth easing
                    times: [0, 0, 0, 1], // Adjust timing for each step in the animation
                }}
                className="flex justify-between px-4 items-center absolute top-0 left-0 content-center h-full w-full z-50"
            >
                <span>{text}</span>
                <span><FaArrowRight /></span>
            </motion.p>

            {/* Slide reveal animation for the div */}
            <motion.div
                variants={{
                    hover: { x: '0%' }, // Slide in on hover
                    hoverEnd: { x: '-100%' } // Slide out on hover end
                }}
                initial={{ x: '-100%' }} // Initially hidden (off-screen)
                transition={{ duration: 2, ease: [0.2, 1, 0.2, 1] }} // Smooth transition for the div
                className="w-full h-full absolute top-0 left-0 content-center z-40"
                style={{ backgroundColor: '#4c2e2b' }}
            >
            </motion.div>
        </motion.div>

    )
}

export default HoverText;


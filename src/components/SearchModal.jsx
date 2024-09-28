import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";

function SearchModal({ onClose }) {
    const controls = useAnimation();

    useEffect(() => {
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

        // Add padding to prevent layout shift and disable scroll
        document.body.style.paddingRight = `${scrollBarWidth}px`;
        document.body.style.overflowY = "hidden";

        const sequence = async () => {
            // Start the initial animation
            await controls.start({
                x: 0,
                opacity: 1,
                backgroundColor: "#362f5a", // Initial background color
                transition: { duration: 0.35, ease: "easeOut" }, // First half of animation
            });

            // Halfway through, change styles
            await controls.start({
                backgroundColor: "rgba(38, 33, 64, .5)", // Applying the 'bg-purpleBlur' color
                backdropFilter: "blur(15px)",
                transition: { duration: 0.35, ease: "easeOut" }, // Second half of animation
            });
        };

        sequence();

        // Re-enable scroll and reset body styles when the modal is closed
        return () => {
            document.body.style.paddingRight = "";
            document.body.style.overflowY = "";
        };
    }, [controls]);

    return (
        <motion.div
            initial={{ x: 500, opacity: 0 }}
            animate={controls}
            exit={{ x: "100px", opacity: 0 }}
            className="w-screen h-screen fixed inset-0 z-50 flex"
            style={{ backdropFilter: "none" }} // Initialize with no blur
        >
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.6, ease: 'linear' } }}
                className="w-[88%] md:w-[96%] h-full overflow-auto z-50 flex justify-center items-center relative"
            >
                <button
                    className="text-white hover:bg-[#362f5a] absolute top-5 right-5 w-12 h-12 p-4 text-2xl border rounded-full border-[#54498c] flex items-center justify-center"
                    onClick={onClose}
                >
                    X
                </button>

                <div className="w-full p-10 md:p-16 flex flex-col gap-8 justify-center items-center text-[#f8b3ac]">
                    <p className="text-6xl md:text-8xl">Search <span className="opacity-70">the site</span></p>
                    <div className="w-1/2 border p-1 flex items-center"> {/* Flex container */}
                        <input
                            type="text"
                            className="px-4 py-5 border border-brown15Text bg-transparent focus:border-blue-400 text-left w-full placeholder:text-[#f8b3ac]" placeholder="Enter what you are looking for..."
                        />
                        <button className="px-10 py-5 bg-[#f8b3ac] m-1 text-black">Search</button>
                    </div>
                </div>
            </motion.div>
        </motion.div>


    );
}

export default SearchModal;

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

function MenuModal({ onClose }) {
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
      initial={{ x: -500, opacity: 0 }}
      animate={controls}
      exit={{ x: "-100px", opacity: 0 }}
      className="w-screen h-screen fixed inset-0 z-50 flex"
      style={{ backdropFilter: "none" }} // Initialize with no blur
    >
      <button
        className="text-white w-[4%] px-2 text-3xl block border-r border-brown9"
        onClick={onClose}
      >
        X
      </button>

      <motion.div className="w-[96%] h-full overflow-auto">
        {/* Modal content goes here */}
      </motion.div>
    </motion.div>
  );
}

export default MenuModal;

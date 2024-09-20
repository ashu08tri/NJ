import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";

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
        className="text-white w-[12%] md:w-[4%] px-2 text-3xl block border-r border-brown9"
        onClick={onClose}
      >
        X
      </button>

      <motion.div
      initial={{opacity: 0, scale: 0}}
      animate={{opacity:1, scale: 1, transition: {delay: .3 ,duration: .6, ease: 'linear'}}}
      className="w-[88%] md:w-[96%] h-full overflow-auto">
        <div className="p-10 md:p-16 flex justify-center items-center">
          <ul className="text-2xl w-[90%] text-[#f8b3ac]">
            <li className="w-full flex gap-3 md:gap-0 items-center justify-between border-b border-brown15Text py-4 hover:py-6 transition-all duration-100 ease-linear">
              <span className="w-1/12 text-xs">01.</span>
              <span className="w-4/12"><img src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/651c05edbe071de1176a5b96_ethan-rougon-oIlix2slmsI-unsplash-p-800.webp" alt="nav_Img" className="w-48 h-16 border border-brown15Text object-cover" /></span>
              <span className="w-6/12">Home</span>
              <span className="w-1/12 flex justify-end"><FaArrowRight size={12} /></span>
            </li>
            <li className="w-full flex gap-3 md:gap-0 items-center justify-between border-b border-brown15Text py-4 hover:py-6 transition-all duration-100 ease-linear">
              <span className="w-1/12 text-xs">02.</span>
              <span className="w-4/12"><img src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/6515539e0c97c2d8cd3e809e_pexels-gustavo-fring-4173267-p-1080.webp" alt="nav_Img2" className="w-48 h-16 border border-brown15Text object-cover" /></span>
              <span className="w-6/12">Contact</span>
              <span className="w-1/12 flex justify-end"><FaArrowRight size={12} /></span>
            </li>
            <li className="w-full flex gap-3 md:gap-0 items-center justify-between border-b border-brown15Text py-4 hover:py-6 transition-all duration-100 ease-linear">
              <span className="w-1/12 text-xs">03.</span>
              <span className="w-4/12"><img src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/651577697e1be3315b4243c1_pexels-pavel-danilyuk-8112161-p-1080.webp" alt="nav_Img3" className="w-48 h-16 border border-brown15Text object-cover" /></span>
              <span className="w-6/12">About</span>
              <span className="w-1/12 flex justify-end"><FaArrowRight size={12} /></span>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default MenuModal;

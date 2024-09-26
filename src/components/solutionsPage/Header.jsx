import { motion } from 'framer-motion';
import HoverText from '../animations/HoverText';

const staggerContainer = {
    hidden: { opacity: 0, y: 150 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3, // Staggering the children animations by 0.4 seconds
        delay: .4
      },
    },
  };
  
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 150 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

function Header() {
  return (
    <div className='h-screen md:h-[105vh] relative bg-[#1e1a33] overflow-y-hidden'>
      <motion.div
      variants={staggerContainer} // Applying the container variants
      initial="hidden"
      animate="show"
      className="flex justify-between items-end gap-12 h-full"
    >
      {/* Image 1 */}
      <motion.div variants={fadeUpVariant} className="w-2/12 md:w-auto md:flex-1 flex items-end">
        <img
          src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/6515539f331a3329d9005b5d_refargotohp-x8dTKZ5IWp0-unsplash-p-500.webp"
          alt="header_img1"
          className="md:w-full h-[40vh] object-cover"
        />
      </motion.div>

      {/* Image 2 */}
      <motion.div variants={fadeUpVariant} className="w-8/12 md:w-auto md:flex-1 flex items-end">
        <img
          src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/651b246a9322b21715e44db7_f3e5c7b-faf6-7bf4-2b81-8b20148f263-poster-00001.jpg"
          alt="header_img2"
          className="w-96 md:w-full h-[55vh] object-cover"
        />
      </motion.div>

      {/* Image 3 */}
      <motion.div variants={fadeUpVariant} className="w-2/12 md:w-auto md:flex-1 flex items-end">
        <img
          src="https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/65157720322b6e18d3024daa_refargotohp-1azkcG0c38A-unsplash-p-1600.webp"
          alt="header_img3"
          className="md:w-full h-[40vh] object-cover"
        />
      </motion.div>
    </motion.div>


      <div className="absolute h-full inset-0 bg-gradient-to-b from-solutionsGradientTop to-solutionsGradientBottom"></div>

      <div className='absolute px-8 inset-0 w-full h-full flex flex-col items-center justify-between pt-40 pb-8 md:pt-44 md:pb-12 text-[#d07b73]'>
        <div className='w-full flex flex-col items-center gap-10 mt-4'>
        <motion.p
         initial={{opacity:0 , y: 100}}
         animate={{opacity:1, y:0, transition:{ duration:.5}}}
        className='md:w-2/6 text-xl text-center'>Our rigorous approach combines data-driven insights and intuitive understanding</motion.p>
        <motion.p
         initial={{opacity:0 , y: 100}}
         animate={{opacity:1, y:0, transition:{ duration:.5, delay:.2}}}
        className='text-7xl md:text-9xl tracking-wide text-[#eca098]'>SOLUTIONS</motion.p>
        </div>
        <motion.div
        initial={{opacity: 0, y: 150}}
        animate={{opacity:1, y: 0, transition: {duration: .5, delay: .8}}}
        className='w-[85%] md:w-[35%] flex gap-5'>
            <HoverText text={'Explore'} overlayBG={'#4c2e2b'} mainBG={'rgba(204, 123, 114, 0.2)'} borderColor={'rgba(230, 148, 140, .5)'}/>
            <div className='text-[#a696f5] w-full'>
            <HoverText text={'Solutions'} overlayBG={'#54498c'} mainBG={'rgba(54, 47, 90, .4)'} borderColor={'#54498c'} animaColor={'#a696f5'}/>
            </div>
        </motion.div>
      </div>
      
     
    </div>
  )
}

export default Header;

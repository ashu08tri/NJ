import { motion } from 'framer-motion';
import Carousel from '../animations/Carousel';
import HoverText from '../animations/HoverText';

const images = [ 
    'https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/65240790bea7372ec0aba88e_adeolu-eletu-dgOJDAv96s8-unsplash-p-1080.webp',
    'https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/6515773b5403bb7487979f86_rod-long-2P_ifaetDm0-unsplash.webp',
    'https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/65240790969c8e69be61dad0_mindaugas-norvilas-F7aMaB2nw9o-unsplash.webp'
];

function Header() {
  return (
    <div className='h-[110vh] relative text-headerText'>
  <Carousel images={images} bgFixed={"fixed"} />
  
  <div className='absolute inset-0 h-full bg-purpleNoBlur mix-blend-multiply' />
  
  <div className='absolute inset-0 h-full flex flex-col justify-center gap-7 items-center'>
    <p className='text-6xl md:text-9xl font-medium'>Contact</p>
    <div className='text-center'>
      <p className='opacity-85'>Ready to take control of your finances?</p>
      <p className='opacity-65'>Contact us to schedule a free consultation.</p>
    </div>
  </div>

 <div className='absolute bottom-16 w-full'> 
 <motion.div
    initial={{ opacity: 0, y: 150 }}
    animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } }}
    className='w-[50%] md:w-[35%] md:flex justify-center gap-5 mx-auto'
  >
    <div className='w-full mb-5 md:m-0'>
      <HoverText text={'Get in Touch'} overlayBG={'#4c2e2b'} mainBG={'rgba(204, 123, 114, 0.2)'} borderColor={'rgba(230, 148, 140, .5)'}/>
    </div>
    <div className='text-[#a696f5] w-full'>
      <HoverText text={'Consultation'} overlayBG={'#54498c'} mainBG={'rgba(54, 47, 90, .4)'} borderColor={'#54498c'} animaColor={'#a696f5'}/>
    </div>
  </motion.div>
 </div>
</div>

  )
}

export default Header;
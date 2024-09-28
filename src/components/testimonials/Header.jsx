import { motion } from 'framer-motion';
import HoverText from '../animations/HoverText';


function Header() {
    return (
        <div className='h-[110vh] relative text-headerText'>
    <div
        className='absolute inset-0 w-full h-full bg-cover bg-fixed'
        style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/651e973b8698371ad69840f8_83e55f5-2dde-3008-bf47-4d36351f8a40-poster-00001.jpg")' }}
    />
    <div className='absolute inset-0 h-full bg-purpleNoBlur mix-blend-multiply' />

    <div className='absolute inset-0 h-full flex flex-col justify-center gap-7 items-center'>
        <p className='text-6xl md:text-9xl font-medium'>Testimonials</p>
        <div className='flex justify-center'>
            <p className='opacity-90 w-3/4 text-center'>From first-time investors to seasoned business owners, our clients share their stories of financial transformation and success.</p>
        </div>
    </div>

    <div className='absolute bottom-16 w-full'>
        <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } }}
            className='flex flex-col items-center md:flex-row md:justify-evenly gap-5'
        >
            <div className='w-[50%] md:w-[15%]  mb-5 md:m-0'>
                <HoverText text={'Stories'} overlayBG={'#4c2e2b'} mainBG={'rgba(204, 123, 114, 0.2)'} borderColor={'rgba(230, 148, 140, .5)'} />
            </div>
            <div className='text-[#a696f5] w-[50%] md:w-[15%] '>
                <HoverText text={'Consultation'} overlayBG={'#54498c'} mainBG={'rgba(54, 47, 90, .4)'} borderColor={'#54498c'} animaColor={'#a696f5'} />
            </div>
        </motion.div>
    </div>
</div>


    )
}

export default Header;
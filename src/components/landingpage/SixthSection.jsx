import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParallaxImage from '../animations/ParallaxImage';
import SlideReveal from '../animations/SlideReveal';
import HoverText from '../animations/HoverText';


function SixthSection() {

    return (
        <div className='bg-[#352d5e] p-12 flex flex-col justify-center gap-10 text-[#f8b3ac]'>

            <div className='mt-28 mb-12'>
                <p className='uppercase'>Case studies</p>
                <p className='text-6xl md:text-7xl'>Proven Results</p>
            </div>

            <div className='h-[200vh] md:h-[80vh] flex flex-col md:flex-row gap-10'>

                <div className='relative w-full h-[150%] md:h-[95%] md:w-1/4 overflow-hidden hover:-translate-y-2 transition-all duration-100'>
                    <ParallaxImage src={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/6515b6cff673e6595d2f866a_the-blowup-hK-jdvutWoU-unsplash.jpg"}
                        alt={"fifthSection_img1"} scrollNum={52} delay={1} height={'120%'}/>
                    <SlideReveal bgColor={'#54498c'} />
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0, transition: { duration:1, delay: 1.2, type: 'spring' } }}
                        whileHover="textHover"
                        className='absolute inset-0 h-full flex flex-col gap-6'>
                        <div className='flex justify-evenly pt-6'>
                            <motion.p initial={{scale: 0}} variants={{textHover: {scale: 1}}} transition={{duration: .5}}
                             className='text-xs uppercase'>Karen's Art Gallery</motion.p>
                            <motion.p initial={{scale: 0}} variants={{textHover: {scale: 1}}} transition={{duration: .5}}
                             className='text-xs uppercase'>Art and Culture</motion.p>
                        </div>
                        <div className='flex flex-col items-center justify-between h-full pb-10'>
                            <motion.p initial={{scale: 0}} variants={{textHover: {scale: 1}}} transition={{duration: .5}}
                             className='text-3xl'>Smart Investments</motion.p>
                            <Link to='/case_study/smart-investment' className='w-full flex justify-center'><HoverText text={'Smart Investments'} overlayBG={'#4c2e2b'} mainBG={'rgba(204, 123, 114, 0.5)'} borderColor={'rgba(230, 148, 140, .5)'} /></Link>
                        </div>
                    </motion.div >
                </div>

                <div className='relative w-full h-[150%] md:h-[95%] md:w-1/4 overflow-hidden hover:-translate-y-2 transition-all duration-100'>
                    <ParallaxImage src={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/6515b6f479391f5e688d7586_katherine-carlyon-MV43AzaFalM-unsplash.jpg"}
                        alt={"fifthSection_img2"} scrollNum={52} delay={1} height={'120%'}/>
                    <SlideReveal bgColor={'#54498c'} />
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0, transition: { duration:1, delay: 1.2, type: 'spring' } }}
                        whileHover="textHover"
                        className='absolute inset-0 h-full flex flex-col gap-6'>
                        <div className='flex justify-evenly pt-6'>
                            <motion.p initial={{scale: 0}} variants={{textHover: {scale: 1}}} transition={{duration: .5}}
                             className='text-xs uppercase'>TechPulse Solutions</motion.p>
                            <motion.p initial={{scale: 0}} variants={{textHover: {scale: 1}}} transition={{duration: .5}}
                             className='text-xs uppercase'>Information Technology</motion.p>
                        </div>
                        <div className='flex flex-col items-center justify-between h-full pb-10'>
                            <motion.p initial={{scale: 0}} variants={{textHover: {scale: 1}}} transition={{duration: .5}}
                             className='text-3xl'>Tax Triumph</motion.p>
                             <Link to='/case_study/tax-triumph' className='w-full flex justify-center'><HoverText text={'Tax Triumph'} overlayBG={'#4c2e2b'} mainBG={'rgba(204, 123, 114, 0.5)'} borderColor={'rgba(230, 148, 140, .5)'} /></Link>
                        </div>
                    </motion.div >
                </div>

                <div className='relative w-full h-[150%] md:h-[95%] md:w-1/4 overflow-hidden hover:-translate-y-2 transition-all duration-100'>
                    <ParallaxImage src={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651c4f43eed1ec5d4fc871a5_drahomir-hugo-posteby-mach-9Zb6mnHBH7E-unsplash.jpg"}
                        alt={"fifthSection_img3"} scrollNum={52} delay={1} height={'120%'}/>
                    <SlideReveal bgColor={'#54498c'} />
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0, transition: { duration:1, delay: 1.2, type: 'spring' } }}
                        whileHover="textHover"
                        className='absolute inset-0 h-full flex flex-col gap-6'>
                        <div className='flex justify-evenly pt-10 md:pt-6'>
                            <motion.p initial={{scale: 0}} variants={{textHover: {scale: 1}}} transition={{duration: .5}}
                             className='text-xs uppercase'>Emily Thompson</motion.p>
                            <motion.p initial={{scale: 0}} variants={{textHover: {scale: 1}}} transition={{duration: .5}}
                             className='text-xs uppercase'>Personal Finance</motion.p>
                        </div>
                        <div className='flex flex-col items-center justify-between h-full pb-10'>
                            <motion.p initial={{scale: 0}} variants={{textHover: {scale: 1}}} transition={{duration: .5}}
                             className='text-3xl'>Wealth Boost</motion.p>
                            <Link to='/case_study/wealth-boost' className='w-full flex justify-center'><HoverText text={'Wealth Boost'} overlayBG={'#4c2e2b'} mainBG={'rgba(204, 123, 114, 0.5)'} borderColor={'rgba(230, 148, 140, .5)'} /></Link>
                        </div>
                    </motion.div >
                </div>

                <div className='relative w-full h-[150%] md:h-[95%] md:w-1/4 overflow-hidden hover:-translate-y-2 transition-all duration-100'>
                    <ParallaxImage src={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/6515d3da912adf16a861c6df_cai-fang-MbxYb4a4AL0-unsplash.jpg"}
                        alt={"fifthSection_img4"} scrollNum={52} delay={1} height={'120%'}/>
                    <SlideReveal bgColor={'#54498c'} />
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0, transition: { duration:1, delay: 1.2, type: 'spring' } }}
                        whileHover="textHover"
                        className='absolute inset-0 h-full flex flex-col gap-6'>
                        <div className='flex justify-evenly pt-12 md:pt-6'>
                            <motion.p initial={{scale: 0}} variants={{textHover: {scale: 1}}} transition={{duration: .5}}
                             className='text-xs uppercase'>Evergreen co.</motion.p>
                            <motion.p initial={{scale: 0}} variants={{textHover: {scale: 1}}} transition={{duration: .5}}
                             className='text-xs uppercase'>Renewable Energy</motion.p>
                        </div>
                        <div className='flex flex-col items-center justify-between h-full pb-10'>
                            <motion.p initial={{scale: 0}} variants={{textHover: {scale: 1}}} transition={{duration: .5}}
                             className='text-3xl'>Green Growth</motion.p>
                            <Link to='/case_study/green-growth' className='w-full flex justify-center'><HoverText text={'Green Growth'} overlayBG={'#4c2e2b'} mainBG={'rgba(204, 123, 114, 0.5)'} borderColor={'rgba(230, 148, 140, .5)'} /></Link>
                        </div>
                    </motion.div >
                </div>
            </div>

        </div>
    )
}

export default SixthSection;
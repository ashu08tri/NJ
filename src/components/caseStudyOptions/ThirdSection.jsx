import { useParams } from "react-router-dom";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParallaxImage from '../animations/ParallaxImage';
import SlideReveal from '../animations/SlideReveal';
import HoverText from '../animations/HoverText';


function ThirdSection() {

    const { id } = useParams();
    
    return (
        <div className='bg-[#1e1a33] p-8 md:p-12 flex flex-col justify-center gap-10 text-[#f8b3ac]'>

            <div className='mt-28 mb-12 flex flex-col md:px-10 justify-start gap-6'>
                <p className="text-3xl md:text-7xl">Other Case Studies</p>
                <div className="mt-5 flex justify-start gap-6">
                <p className='uppercase'>Clientele</p>
                <p className='opacity-80 md:px-16 md:w-3/6'>Our case studies showcase a variety of financial solutions, customized to meet individual needs, that have led to significant gains and secure financial futures for our clients.</p>
                </div>
            </div>

            <div className='grid grid-cols-1 grid-rows-5 md:grid-cols-3 md:grid-rows-2 gap-10'>

            {id !== 'smart-investment' && <div className='relative w-full h-[100%] md:h-[95%] overflow-hidden hover:-translate-y-2 hover:shadow-black transition-all duration-100'>
                    <ParallaxImage src={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/6515b6cff673e6595d2f866a_the-blowup-hK-jdvutWoU-unsplash.jpg"}
                        alt={"fifthSection_img1"} scrollNum={35} delay={1} height={'120%'} />
                    <div className='h-full absolute inset-0 bg-gradient-to-t from-purpleGradient to-purpleGradient mix-blend-multiply' />
                    <SlideReveal bgColor={'#54498c'} />
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0, transition: { duration: 1, delay: 1.2, type: 'spring' } }}
                        whileHover="textHover"
                        className='absolute inset-0 h-full flex flex-col gap-6'>
                        <div className='flex justify-start gap-5 p-6'>
                            <p className='text-xs uppercase'>Investment Advisoty</p>
                            <p className='text-xs uppercase'>Art and Culture</p>
                        </div>
                        <div className='flex flex-col items-center justify-between h-full px-8 pb-10'>
                            <div className='border-l border-[#f8b3ac] px-5 self-start'>
                                <p className='text-xs uppercase'>Karen's Art Gallery</p>
                                <p className='text-3xl'>Smart Investments</p>
                            </div>
                            <Link to='/case_study/smart-investment' className='w-full'><HoverText text={'Smart Investments'} overlayBG={'#4c2e2b'} mainBG={'rgba(204, 123, 114, 0.5)'} borderColor={'rgba(230, 148, 140, .5)'} /></Link>
                        </div>
                    </motion.div >
                </div>}

                {id !== 'tax-triumph' && <div className='relative w-full h-[100%] md:h-[95%] overflow-hidden hover:shadow-black hover:-translate-y-2 transition-all duration-100'>
                    <ParallaxImage src={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/6515b6f479391f5e688d7586_katherine-carlyon-MV43AzaFalM-unsplash.jpg"}
                        alt={"fifthSection_img2"} scrollNum={35} delay={1} height={'120%'} />
                    <div className='h-full absolute inset-0 bg-gradient-to-t from-purpleGradient to-purpleGradient mix-blend-multiply' />
                    <SlideReveal bgColor={'#54498c'} />
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0, transition: { duration: 1, delay: 1.2, type: 'spring' } }}
                        whileHover="textHover"
                        className='absolute inset-0 h-full flex flex-col gap-6'>
                        <div className='flex justify-start gap-5 p-6'>

                            <p className='text-xs uppercase'>Tax Optimization</p>
                            <p className='text-xs uppercase'>Information Technology</p>


                        </div>
                        <div className='flex flex-col items-center justify-between h-full px-8 pb-10'>
                            <div className='border-l border-[#f8b3ac] px-5 self-start'>
                                <p className='text-xs uppercase'>TechPulse Solutions</p>
                                <p className='text-3xl'>Tax Triumph</p>
                            </div>
                            <Link to='/case_study/tax-triumph' className='w-full'><HoverText text={'Tax Triumph'} overlayBG={'#4c2e2b'} mainBG={'rgba(204, 123, 114, 0.5)'} borderColor={'rgba(230, 148, 140, .5)'} /></Link>
                        </div>
                    </motion.div >
                </div>}

                <div className='relative w-full h-[100%] md:h-[95%] overflow-hidden hover:shadow-black hover:-translate-y-2 transition-all duration-100'>
                    <ParallaxImage src={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651c4f43eed1ec5d4fc871a5_drahomir-hugo-posteby-mach-9Zb6mnHBH7E-unsplash.jpg"}
                        alt={"fifthSection_img3"} scrollNum={38} delay={1} height={'120%'} />
                    <motion.div className='h-full absolute inset-0 bg-gradient-to-t from-purpleGradient to-purpleGradient mix-blend-multiply' />
                    <SlideReveal bgColor={'#54498c'} />
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0, transition: { duration: 1, delay: 1.2, type: 'spring' } }}
                        whileHover="textHover"
                        className='absolute inset-0 h-full flex flex-col gap-6'>
                        <div className='flex justify-start gap-5 p-6'>
                            <p className='text-xs uppercase'>Wealth Management</p>
                            <p className='text-xs uppercase'>Personal Finance</p>
                        </div>
                        <div className='flex flex-col items-center justify-between h-full px-8 pb-10'>
                        <div className='border-l border-[#f8b3ac] px-5 self-start'>
                        <p className='text-xs uppercase'>Emily Thompson</p>
                        <p className='text-3xl'>Wealth Boost</p>
                        </div>
                            <HoverText text={'Wealth Boost'} overlayBG={'#4c2e2b'} mainBG={'rgba(204, 123, 114, 0.5)'} borderColor={'rgba(230, 148, 140, .5)'} />
                        </div>
                    </motion.div >
                </div>

                <div className='relative w-full h-[100%] md:h-[95%] overflow-hidden hover:shadow-black hover:-translate-y-2 transition-all duration-100'>
                    <ParallaxImage src={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/6515d3da912adf16a861c6df_cai-fang-MbxYb4a4AL0-unsplash.jpg"}
                        alt={"fifthSection_img1"} scrollNum={50} delay={1} height={'150%'} />
                    <div className='h-full absolute inset-0 bg-gradient-to-t from-purpleGradient to-purpleGradient mix-blend-multiply' />
                    <SlideReveal bgColor={'#54498c'} />
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0, transition: { duration: 1, delay: 1.2, type: 'spring' } }}
                        whileHover="textHover"
                        className='absolute inset-0 h-full flex flex-col gap-6'>
                        <div className='flex justify-start gap-5 p-6'>
                            <p className='text-xs uppercase'>Sustainable Investing</p>
                            <p className='text-xs uppercase'>Renewable Energy</p>
                        </div>
                        <div className='flex flex-col items-center justify-between h-full px-8 pb-10'>
                        <div className='border-l border-[#f8b3ac] px-5 self-start'>
                        <p className='text-xs uppercase'>Evergreen Co.</p>
                        <p className='text-3xl'>Green Growth</p>
                        </div>
                            <HoverText text={'Green Growth'} overlayBG={'#4c2e2b'} mainBG={'rgba(204, 123, 114, 0.5)'} borderColor={'rgba(230, 148, 140, .5)'} />
                        </div>
                    </motion.div >
                </div>

                <div className='relative bg-[#1e1a33] w-full h-[100%] md:h-[95%] overflow-hidden hover:shadow-black hover:-translate-y-2 transition-all duration-100'>
                    <ParallaxImage src={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/6515b6ec44cf53a039adf638_juan-rojas-K7in_Hut_90-unsplash.jpg"}
                        alt={"fifthSection_img2"} scrollNum={52} delay={1} height={'150%'} />
                    <div className='h-full absolute inset-0 bg-gradient-to-t from-purpleGradient to-purpleGradient mix-blend-multiply' />
                    <SlideReveal bgColor={'#54498c'} />
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0, transition: { duration: 1, delay: 1.2, type: 'spring' } }}
                        whileHover="textHover"
                        className='absolute inset-0 h-full flex flex-col gap-6'>
                        <div className='flex justify-start gap-5 p-6'>
                            <p className='text-xs uppercase'>Retirement Planning</p>
                            <p className='text-xs uppercase'>Elder Care</p>
                        </div>
                        <div className='flex flex-col items-center justify-between h-full px-8 pb-10'>
                        <div className='border-l border-[#f8b3ac] px-5 self-start'>
                        <p className='text-xs uppercase'>Harmony Communities</p>
                        <p className='text-3xl'>Retirement Bliss</p>
                        </div>
                            <HoverText text={'Retirement Bliss'} overlayBG={'#4c2e2b'} mainBG={'rgba(204, 123, 114, 0.5)'} borderColor={'rgba(230, 148, 140, .5)'} />
                        </div>
                    </motion.div >
                </div>

                <div className='relative bg-[#1e1a33] w-full h-[100%] md:h-[95%] overflow-hidden hover:shadow-black hover:-translate-y-2 transition-all duration-100'>
                    <ParallaxImage src={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651c4f4ffd22cb82fa445996_cai-fang-k_0bcT6ycDk-unsplash.jpg"}
                        alt={"fifthSection_img3"} scrollNum={52} delay={1} height={'150%'} />
                    <div className='h-full absolute inset-0 bg-gradient-to-t from-purpleGradient to-purpleGradient mix-blend-multiply' />
                    <SlideReveal bgColor={'#54498c'} />
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0, transition: { duration: 1, delay: 1.2, type: 'spring' } }}
                        whileHover="textHover"
                        className='absolute inset-0 h-full flex flex-col gap-6'>
                        <div className='flex justify-start gap-5 p-6'>
                            <p className='text-xs uppercase'>Financial Education</p>
                            <p className='text-xs uppercase'>Food &#38; Beverage</p>
                        </div>
                        <div className='flex flex-col items-center justify-between h-full px-8 pb-10'>
                        <div className='border-l border-[#f8b3ac] px-5 self-start'>
                        <p className='text-xs uppercase'>Jhon&apos;s Catering Services</p>
                        <p className='text-3xl'>Business Flourish</p>
                        </div>
                            <HoverText text={'Business Flourish'} overlayBG={'#4c2e2b'} mainBG={'rgba(204, 123, 114, 0.5)'} borderColor={'rgba(230, 148, 140, .5)'} />
                        </div>
                    </motion.div >
                </div>

            </div>
        </div>
    )
}

export default ThirdSection;
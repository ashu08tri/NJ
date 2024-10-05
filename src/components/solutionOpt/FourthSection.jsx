import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParallaxImage from '../animations/ParallaxImage';
import SlideReveal from '../animations/SlideReveal';
import HoverText from '../animations/HoverText';


function FourthSection() {

    return (
        <div className='bg-[#f5e7e6] p-8 flex flex-col gap-10 text-[#362f5a]'>

            <div className='mt-16 mb-12 text-center'>
                <p className='uppercase'>Case studies</p>
                <p className='text-6xl md:text-7xl'>Proven Results</p>
            </div>

            <div className='h-[200vh] md:h-[60vh] flex flex-col md:flex-row gap-10'>

                <div className='relative w-full h-[100%] md:h-[90%] md:w-1/4 overflow-hidden hover:-translate-y-2 transition-all duration-100'>
                    <ParallaxImage src={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/6515b6cff673e6595d2f866a_the-blowup-hK-jdvutWoU-unsplash.jpg"}
                        alt={"fifthSection_img1"} scrollNum={52} delay={1} height={'120%'}/>
                    <SlideReveal bgColor={'#804d48'} />
                    <div className='absolute inset-0 h-full flex flex-col gap-6'>
                        <div className='flex justify-evenly pt-6'>
                            <p className='text-xs uppercase'>Karen's Art Gallery</p>
                            <p className='text-xs uppercase'>Art and Culture</p>
                        </div>
                        <div className='flex flex-col items-center justify-between h-full pb-10'>
                            <p className='text-3xl'>Smart Investments</p>
                            <Link to='/case_study/smart-investment' className='w-full flex justify-center text-[#f8b3ac] md:pb-3'><HoverText text={'Case Study'} overlayBG={'#4c2e2b'} mainBG={'rgba(204, 123, 114, 0.5)'} borderColor={'rgba(230, 148, 140, .5)'} /></Link>
                        </div>
                    </div>
                </div>

                <div className='relative w-full h-[100%] md:h-[90%] md:w-1/4 overflow-hidden hover:-translate-y-2 transition-all duration-100'>
                    <ParallaxImage src={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/6515b6f479391f5e688d7586_katherine-carlyon-MV43AzaFalM-unsplash.jpg"}
                        alt={"fifthSection_img2"} scrollNum={52} delay={1} height={'120%'}/>
                    <SlideReveal bgColor={'#804d48'} />
                    <div className='absolute inset-0 h-full flex flex-col gap-6'>
                        <div className='flex justify-evenly pt-6'>
                            <p className='text-xs uppercase'>TechPulse Solutions</p>
                            <p className='text-xs uppercase'>Information Technology</p>
                        </div>
                        <div className='flex flex-col items-center justify-between h-full pb-10'>
                            <p className='text-3xl'>Tax Triumph</p>
                             <Link to='/case_study/tax-triumph' className='w-full flex justify-center text-[#f8b3ac] md:pb-3'><HoverText text={'Case Study'} overlayBG={'#4c2e2b'} mainBG={'rgba(204, 123, 114, 0.5)'} borderColor={'rgba(230, 148, 140, .5)'} /></Link>
                        </div>
                    </div>
                </div>

                <div className='relative w-full h-[100%] md:h-[90%] md:w-1/4 overflow-hidden hover:-translate-y-2 transition-all duration-100'>
                    <ParallaxImage src={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651c4f43eed1ec5d4fc871a5_drahomir-hugo-posteby-mach-9Zb6mnHBH7E-unsplash.jpg"}
                        alt={"fifthSection_img3"} scrollNum={52} delay={1} height={'120%'}/>
                    <SlideReveal bgColor={'#804d48'} />
                    <div className='absolute inset-0 h-full flex flex-col gap-6'>
                        <div className='flex justify-evenly pt-10 md:pt-6'>
                            <p className='text-xs uppercase'>Emily Thompson</p>
                            <p className='text-xs uppercase'>Personal Finance</p>
                        </div>
                        <div className='flex flex-col items-center justify-between h-full pb-10'>
                            <p className='text-3xl'>Wealth Boost</p>
                            <Link to='/case_study/wealth-boost' className='w-full flex justify-center text-[#f8b3ac] md:pb-3'><HoverText text={'Case Study'} overlayBG={'#4c2e2b'} mainBG={'rgba(204, 123, 114, 0.5)'} borderColor={'rgba(230, 148, 140, .5)'} /></Link>
                        </div>
                    </div>
                </div>

                <div className='relative 0-full h-[100%] md:h-[90%] md:w-1/4 overflow-hidden hover:-translate-y-2 transition-all duration-100'>
                    <ParallaxImage src={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/6515d3da912adf16a861c6df_cai-fang-MbxYb4a4AL0-unsplash.jpg"}
                        alt={"fifthSection_img4"} scrollNum={52} delay={1} height={'120%'}/>
                    <SlideReveal bgColor={'#804d48'} />
                    <div className='absolute inset-0 h-full flex flex-col gap-6'>
                        <div className='flex justify-evenly pt-12 md:pt-6'>
                            <p className='text-xs uppercase'>Evergreen co.</p>
                            <p className='text-xs uppercase'>Renewable Energy</p>
                        </div>
                        <div className='flex flex-col items-center justify-between h-full pb-10'>
                            <p className='text-3xl'>Green Growth</p>
                            <Link to='/case_study/green-growth' className='w-full flex justify-center text-[#f8b3ac] md:pb-3'><HoverText text={'Case Study'} overlayBG={'#4c2e2b'} mainBG={'rgba(204, 123, 114, 0.5)'} borderColor={'rgba(230, 148, 140, .5)'} /></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FourthSection;
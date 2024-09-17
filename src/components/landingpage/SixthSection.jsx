import ParallaxImage from '../animations/ParallaxImage';
import SlideReveal from '../animations/SlideReveal';
import HoverText from '../animations/HoverText';


function SixthSection() {

    return (
        <div className='bg-[#352d5e] p-12 flex flex-col justify-center gap-10 text-[#f8b3ac] '>

            <div className='mt-28 mb-12'>
                <p className='uppercase'>Case studies</p>
                <p className='text-7xl'>Proven Results</p>
            </div>

            <div className='h-[200vh] md:h-[100vh] flex flex-col md:flex-row gap-10'>
                <div className='relative w-full h-[150%] md:h-[75%] md:w-1/4 overflow-hidden'>
                    <ParallaxImage src={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/6515b6cff673e6595d2f866a_the-blowup-hK-jdvutWoU-unsplash.jpg"}
                        alt={"fifthSection_img1"} scrollNum={52} />
                    <SlideReveal bgColor={'#54498c'} />
                    <div className='absolute inset-0 h-full flex flex-col gap-6'>
                        <div className='flex justify-evenly pt-6'>
                            <p className='text-xs uppercase'>Karen's Art Gallery</p>
                            <p className='text-xs uppercase'>Art and Culture</p>
                        </div>
                        <div className='flex flex-col items-center justify-between h-full pb-10'>
                            <p className='text-3xl'>Smart Investments</p>
                            <HoverText text={'Smart Investments'} />
                        </div>
                    </div>
                </div>

                <div className='relative w-full h-[150%] md:h-[75%] md:w-1/4 overflow-hidden'>
                    <ParallaxImage src={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/6515b6f479391f5e688d7586_katherine-carlyon-MV43AzaFalM-unsplash.jpg"}
                        alt={"fifthSection_img2"} scrollNum={52} />
                    <SlideReveal bgColor={'#54498c'} />
                    <div className='absolute inset-0 h-full flex flex-col gap-6'>
                        <div className='flex justify-evenly pt-6'>
                            <p className='text-xs uppercase'>TechPulse Solutions</p>
                            <p className='text-xs uppercase'>Information Technology</p>
                        </div>
                        <div className='flex flex-col items-center justify-between h-full pb-10'>
                            <p className='text-3xl'>Tax Triumph</p>
                            <HoverText text={'Tax Triumph'} />
                        </div>
                    </div>
                </div>

                <div className='relative w-full h-[150%] md:h-[75%] md:w-1/4 overflow-hidden'>
                    <ParallaxImage src={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651c4f43eed1ec5d4fc871a5_drahomir-hugo-posteby-mach-9Zb6mnHBH7E-unsplash.jpg"}
                        alt={"fifthSection_img3"} scrollNum={52} />
                    <SlideReveal bgColor={'#54498c'} />
                    <div className='absolute inset-0 h-full flex flex-col gap-6'>
                        <div className='flex justify-evenly pt-6'>
                            <p className='text-xs uppercase'>Emily Thompson</p>
                            <p className='text-xs uppercase'>Personal Finance</p>
                        </div>
                        <div className='flex flex-col items-center justify-between h-full pb-10'>
                            <p className='text-3xl'>Wealth Boost</p>
                            <HoverText text={'Wealth Boost'} />
                        </div>
                    </div>
                </div>

                <div className='relative w-full h-[150%] md:h-[75%] md:w-1/4 overflow-hidden'>
                    <ParallaxImage src={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/6515d3da912adf16a861c6df_cai-fang-MbxYb4a4AL0-unsplash.jpg"}
                        alt={"fifthSection_img4"} scrollNum={52} />
                    <SlideReveal bgColor={'#54498c'} />
                    <div className='absolute inset-0 h-full flex flex-col gap-6'>
                        <div className='flex justify-evenly pt-6'>
                            <p className='text-xs uppercase'>Evergreen co.</p>
                            <p className='text-xs uppercase'>Renewable Energy</p>
                        </div>
                        <div className='flex flex-col items-center justify-between h-full pb-10'>
                            <p className='text-3xl'>Green Growth</p>
                            <HoverText text={'Green Growth'} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SixthSection;
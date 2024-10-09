import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MdArrowRight } from "react-icons/md";
import HoverText from '../animations/HoverText';
import { Link } from 'react-router-dom';

const data = [
    {
        sNo: 1,
        title: 'Assest Allocation',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/6515533d9608969bf906f399_pexels-sora-shimazaki-5669614.jpg',
        desc: 'Strategic assests distribution for balanced growth',
        url: 'assest-allocation'
    },
    {
        sNo: 2,
        title: 'Estate Planning',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/652565ed5dfb036da3e9efb9_matthew-henry-VviFtDJakYk-unsplash.jpg',
        desc: 'Safegaurd your legacy throught expert estate planning',
        url: 'estate-planning'
    },
    {
        sNo: 3,
        title: 'Risk Assessment',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651fdc82e7b34681ca7c3067_pexels-karolina-grabowska-4386374.jpg',
        desc: 'Quantify and manage financial risks effectively',
        url: 'risk-assessment'
    },
    {
        sNo: 4,
        title: 'Portfolio Optimization',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651c0630b17bd62222f63be6_clay-banks-JPhVGeY4H7I-unsplash.jpg',
        desc: 'Maximize returns through portfolio optimization',
        url: 'portfolio-optimization'
    },
    {
        sNo: 5,
        title: 'Income Planning',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/65154e35eaecbad0896ec1a5_pexels-gustavo-fring-4173258.jpg',
        desc: 'Strategic planning for stable income flow',
        url: 'income-planning'
    },
    {
        sNo: 6,
        title: 'Tax-Efficient Drawdowns',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/65154e3d3e5c3dc909470d50_pexels-gustavo-fring-3873856.jpg',
        desc: 'Optimize withdrawals with taz-efficient strategies',
        url: 'tax-efficient-drawdowns'
    },

];

function Header({ image, under, title, desc }) {

    const [activeSection, setActiveSection] = useState('');
    const { id } = useParams();

    const toShow = data.filter(item => item.url !== id);
    console.log(toShow);


    useEffect(() => {
        const sections = document.querySelectorAll('.sticky-section');

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: .5, // Trigger when 50% of the section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id); // Set the active section when it enters the viewport
                }
            });
        }, options);

        sections.forEach((section) => {
            observer.observe(section);
        });

        // Clean up the observer when the component unmounts
        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div
            className="h-auto flex md:h-[380vh] md:px-0"
            style={{
                backgroundImage:
                    'linear-gradient(to bottom, rgba(30, 26, 51, .9) 65%, #0f0d1a), url(https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/6516dfb9da737c2b1a589700_tim-stief-dH6IjhWHNQQ-unsplash-p-800.webp)',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
        >
            {/* Navigation List */}
            <div className="w-1/4 md:w-3/12 h-full pt-28 md:p-0">
                <ul className="text-[#e4938a] py-5 md:py-20 px-8 md:px-0 md:pl-20 flex flex-col gap-4 sticky top-28">
                    <li>
                        <a
                            href="#sticky-block-1"
                            className={activeSection === 'sticky-block-1' ? 'text-[#f8b3ac] flex items-stretch' : ''}
                        >
                            <span className='w-10/12 md:w-3/6'><span className="pr-3">01.</span><span>Service</span></span>
                            <span className='flex justify-end w-2/12 md:w-2/6'>{activeSection === 'sticky-block-1' && <MdArrowRight className="ml-2" size={20} />}</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#sticky-block-2"
                            className={activeSection === 'sticky-block-2' ? 'text-[#f8b3ac] flex items-center' : ''}
                        >
                            <span className='w-10/12 md:w-3/6'><span className="pr-3">02.</span><span>Content</span></span>
                            <span className='flex justify-end w-2/12 md:w-2/6'>{activeSection === 'sticky-block-2' && <MdArrowRight className="ml-2" size={20} />}</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#sticky-block-3"
                            className={activeSection === 'sticky-block-3' ? 'text-[#f8b3ac] flex items-center' : ''}
                        >
                            <span className='w-10/12 md:w-3/6'><span><span className="pr-3">03.</span><span>More</span></span></span>
                            <span className='flex justify-end w-2/12 md:w-2/6'>{activeSection === 'sticky-block-3' && <MdArrowRight className="ml-2" size={20} />}</span>
                        </a>
                    </li>
                </ul>
            </div>

            {/* Content Sections */}
            <div className="w-3/4 md:w-7/12 flex flex-col gap-16 md:gap-48 py-32 md:py-48 pl-5 md:pl-0">

                <div className="text-[#f8b3ac] flex justify-evenly sticky-section" id="sticky-block-1">

                    <div className='relative w-3/12  pl-3'>
                        <div className='w-[2px] absolute h-64 md:h-72 bg-brown9HoverBox' />
                        <div className='w-[2px] absolute h-10 md:h-16 bg-brown9' />
                    </div>

                    <div>
                        <p className='md:text-xl opacity-85'>{under}</p>
                        <p className="text-3xl md:text-7xl py-10">{title}</p>
                        <p className="md:w-3/4 md:text-xl">
                            {desc}
                        </p>
                    </div>
                </div>

                <div className="text-[#f8b3ac] flex flex-col gap-10 px-12 border border-[#e6948c] w-11/12 bg-purpleBlurLight py-8 sticky-section" id="sticky-block-2">
                <div>
                        <p className='text-5xl py-3'>About the Service</p>
                        <p className='py-6'>Whether you're an individual investor or a business owner, your financial decisions dictate your future. That's why at Kassa, we offer a range of services designed to elevate your financial strategy.</p>
                        <ul className='list-disc'>
                            <li><span className='font-medium'>Individual Focus:</span> Services tailored for both individual investors and businesses.</li>
                            <li><span className='font-medium'>Wide Range:</span> From Estate Planning to Personal Finance Workshops.</li>
                        </ul>
                    </div>

                    <div>
                        <p className='text-4xl py-3'>Tailored Services, Real Results</p>
                        <p className='py-6'>We understand that each financial situation is unique. Our team is committed to offering personalized, one-on-one consultations to identify the best course of action for you.</p>
                        <ul className='list-disc'>
                            <li><span className='font-medium'>Personal Consultations:</span>One-on-one sessions to identify your financial goals.</li>
                            <li><span className='font-medium'>Custom Plans:</span>Solutions designed specifically for your needs.</li>
                        </ul>
                    </div>

                    <div>
                        <p className='text-4xl py-3'>Why Choose Our Services?</p>
                        <p className='py-6'>Experience, integrity, and a client-centric approach make us the preferred choice for financial services. Our well-rounded offerings are rooted in extensive market research and an in-depth understanding of financial trends.</p>
                        <ul className='list-disc'>
                            <li><span className='font-medium'>Experience:</span>Years of industry expertise at your service.</li>
                            <li><span className='font-medium'>Integrity:</span> Ethical solutions for long-term benefits.</li>
                            <li><span className='font-medium'>Client-Centric: </span>Your needs are our priority.</li>
                        </ul>
                    </div>
                    <Link to='/consultation' className='w-56'>
                        <HoverText text={'Free Consultation'} overlayBG={'#4c2e2b'} mainBG={'rgba(204, 123, 114, 0.5)'} borderColor={'rgba(230, 148, 140, .5)'} />
                    </Link>
                </div>

                <div className="text-[#f8b3ac] flex flex-col gap-10 sticky-section" id="sticky-block-3">
                    {toShow.map((item, i) => <div key={i} className='flex gap-10'>
                        <div className='w-32 md:w-20 h-20 mb-10'>
                            <img src={item.img} alt="more_options" className='w-full h-full object-cover' />
                        </div>

                        <div className='relative'>
                            <div className='w-[2px] absolute h-24 bg-brown9HoverBox' />
                            <div className='w-[2px] absolute h-10 bg-brown9' />
                        </div>

                        <div>
                            <p className='md:text-xl pb-6'>{item.title}</p>
                            <Link to={`/services/${item.url}`} className='md:text-2xl hover:text-brown9'>{item.desc}</Link>
                        </div>
                    </div>)}
                </div>
            </div>

            {/* Background Image Div */}
            <div
                className="hidden md:block md:w-4/12 h-full relative"
                style={{
                    backgroundImage:
                        `url(${image})`,
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    objectFit: 'cover'
                }}


            ></div>
        </div>
    )
}

export default Header;
import React, { useState, useEffect } from 'react';
import { MdArrowRight } from "react-icons/md";


function Header() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sections = document.querySelectorAll('.sticky-section');

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1, // Trigger when 50% of the section is visible
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
            className="h-auto md:flex md:h-[300vh] bg-cover px-5 md:px-0"
            style={{
                backgroundImage:
                    'linear-gradient(to bottom, rgba(15, 13, 26, 0.8) 65%, #0f0d1a), url(https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/6516dfb9da737c2b1a589700_tim-stief-dH6IjhWHNQQ-unsplash-p-500.webp)',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Navigation List */}
            <div className="md:w-3/12 h-full pt-36">
                <ul className="text-brown9 py-5 md:py-20 px-8 md:px-0 md:pl-20 flex flex-col gap-4 sticky top-0 border border-brown15Text md:border-0 border-t-0">
                    <li>
                        <a
                            href="#sticky-block-1"
                            className={activeSection === 'sticky-block-1' ? 'text-[#f8b3ac] flex items-stretch' : ''}
                        >
                            <span className='w-10/12 md:w-3/6'><span className="pr-3">01.</span><span>Consultation</span></span>
                            <span className='flex justify-end w-2/12 md:w-2/6'>{activeSection === 'sticky-block-1' && <MdArrowRight className="ml-2" size={20} />}</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#sticky-block-2"
                            className={activeSection === 'sticky-block-2' ? 'text-[#f8b3ac] flex items-center' : ''}
                        >
                            <span className='w-10/12 md:w-3/6'><span className="pr-3">02.</span><span>Analysis</span></span>
                            <span className='flex justify-end w-2/12 md:w-2/6'>{activeSection === 'sticky-block-2' && <MdArrowRight className="ml-2" size={20} />}</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#sticky-block-3"
                            className={activeSection === 'sticky-block-3' ? 'text-[#f8b3ac] flex items-center' : ''}
                        >
                            <span className='w-10/12 md:w-3/6'><span><span className="pr-3">03.</span><span>Planning</span></span></span>
                            <span className='flex justify-end w-2/12 md:w-2/6'>{activeSection === 'sticky-block-3' && <MdArrowRight className="ml-2" size={20} />}</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#sticky-block-4"
                            className={activeSection === 'sticky-block-4' ? 'text-[#f8b3ac] flex items-center' : ''}
                        >
                            <span className='w-10/12 md:w-3/6'><span className="pr-3">04.</span><span>Implementation</span></span>
                            <span className='flex justify-end w-2/12 md:w-2/6'>{activeSection === 'sticky-block-4' && <MdArrowRight className="ml-2" size={20} />}</span>
                        </a>
                    </li>
                </ul>
            </div>

            {/* Content Sections */}
            <div className="md:w-7/12 flex flex-col justify-between gap-16 md:gap-0 py-10 md:py-20">
                <div className="text-brown9 flex gap-5 md:gap-28 self-start sticky-section pt-36" id="sticky-block-1">
                    <p className='md:pl-10'>01.</p>
                    <div>
                        <p className="text-xs">Meet & Greet</p>
                        <p className="text-3xl md:text-5xl py-5">Initial Consultation</p>
                        <p className="md:w-1/2 opacity-75">
                            We kick off with a no-obligation consultation to understand your financial objectives and initial needs.
                        </p>
                    </div>
                </div>

                <div className="text-brown9 flex gap-5 md:gap-28 sticky-section" id="sticky-block-2">
                    <p className='md:pl-10'>02.</p>
                    <div>
                        <p className="text-xs">DEEP DIVE</p>
                        <p className="text-3xl md:text-5xl py-5">Financial Analysis</p>
                        <p className="md:w-1/2 opacity-75">
                            A comprehensive review of your current financial situation helps us identify strengths and areas to improve.
                        </p>
                    </div>
                </div>

                <div className="text-brown9 flex gap-5 md:gap-28 sticky-section" id="sticky-block-3">
                    <p className='md:pl-10'>03.</p>
                    <div>
                        <p className="text-xs">Map the Plan</p>
                        <p className="text-3xl md:text-5xl py-5">Strategy Planning</p>
                        <p className="md:w-1/2 opacity-75">
                            We develop a customized financial plan with actionable steps to achieve your short-term and long-term goals.
                        </p>
                    </div>
                </div>

                <div className="text-brown9 flex gap-5 md:gap-28 sticky-section" id="sticky-block-4">
                    <p className='md:pl-10'>04.</p>
                    <div>
                        <p className="text-xs">Take Action</p>
                        <p className="text-3xl md:text-5xl py-5">Implementation</p>
                        <p className="md:w-1/2 opacity-75">
                            Once the financial plan is set, we assist in the seamless implementation of each strategic element involved.
                        </p>
                    </div>
                </div>
            </div>

            {/* Background Image Div */}
            <div
                className="hidden md:block md:w-4/12 h-full relative"
                style={{
                    backgroundImage:
                        'url(https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/651b269e8bc922a1263b4ff0_b6da7d-565c-5f32-526-8173f630d762-poster-00001.jpg)',
                    backgroundAttachment: 'fixed',
                    objectPosition: 'center',
                    objectFit: 'cover'
                }}
            >
                
            </div>
        </div>
    );
}

export default Header;

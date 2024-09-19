import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SlideReveal from '../animations/SlideReveal';
import ParallaxImage from '../animations/ParallaxImage';
import HoverText from '../animations/HoverText';
import { IoMdArrowDropdown } from "react-icons/io";

const data = [
    {
        title: 'Serving a Wide Array of Client Segments',
        desc: 'From budding entrepreneurs to established enterprises, we provide bespoke financial solutions that cater to a diverse range of client segments. Whether you&apos;re a freelancer, small business, or a large corporation, our specialized advisors can guide you toward financial success with tailored strategies.',
        button: 'Contact Us'
    },
    {
        title: 'Focused Financial Solutions for Distinct Clients',
        desc: 'We understand that financial needs differ from segment to segment. That&apos;s why we offer targeted financial solutions for retirees, professionals, business owners, and more. Each of our client segments benefits from a set of services uniquely tailored to their specific needs and goals, ensuring the highest levels of client satisfaction.'
    },
    {
        title: 'Find Yourself Amoung Our Valued Client Segments',
        desc: 'Not sure where you fit in? Don&apos;t worry. Our diverse client segments range from individuals looking for personal finance guidance to organizations seeking robust financial management. Each segment receives individualized attention and strategies, guaranteeing that you&apos;ll find a home and a plan with us.'
    }
];

function EighthSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to toggle the expansion of the description
  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse if clicked again
    } else {
      setExpandedIndex(index); // Expand the clicked item
    }
  };

  return (
    <div className='flex justify-center items-center py-12' style={{ background: 'linear-gradient(#262140, rgba(38, 33, 64, 0.5)), url(https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/65212e34d7d94f7da29da317_b3032e6-231a-d0ee-02b5-55cb0f45c4cd-poster-00001.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='w-[90%] text-[#e4938a] bg-purpleBlur border border-[#e4938a] box-border' style={{ backdropFilter: 'blur(15px)' }}>
        <div className='md:h-[50%] w-full p-8 md:p-16 md:flex justify-between'>
          <p className='text-5xl md:text-7xl font-medium'>Clientele</p>
          <div className='md:w-1/2 md:h-full flex flex-col'>
            <div className='relative w-full h-56 mt-10 md:m-0 overflow-hidden order-2 md:order-first'>
              <ParallaxImage src={'https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/65240790969c8e69be61dad0_mindaugas-norvilas-F7aMaB2nw9o-unsplash.webp'} alt={"eigthSection_img1"} scrollNum={76} delay={1} />
              <SlideReveal bgColor={'rgb(38, 33, 64)'} />
            </div>
            <div className='md:flex flex-col items-end'>
              <p className='py-5 md:w-1/2'>We serve a broad range of clients, from individuals seeking financial freedom to corporations looking for investment optimization.</p>
              <div className='w-3/4 md:w-1/2'>
                <HoverText text={'TESTIMONIALS'} overlayBG={'#4c2e2b'} mainBG={'rgba(204, 123, 114, 0.2)'} borderColor={'rgba(230, 148, 140, .4)'} />
              </div>
            </div>
          </div>
        </div>

        <div className='md:h-[50%] text-[#e4938a]'>
          <ul className='w-full h-full'>
            {data.map((item, i) => (
              <motion.li key={i} className='flex flex-col p-5 md:p-8 cursor-pointer hover:bg-[#262140] border-t border-[#e4938a]' onClick={() => toggleExpand(i)}>
                <div className='flex justify-between items-center'>
                  <span className='text-xl md:text-4xl'>{item.title}</span>
                  <IoMdArrowDropdown size={30} />
                </div>
                
                <AnimatePresence>
                  {expandedIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className='overflow-hidden md:w-3/4'
                    >
                      <p className='py-5'>{item.desc}</p>
                      {item.button && (
                        <div className='w-64'>
                            <HoverText text={item.button} overlayBG={'#4c2e2b'} mainBG={'rgba(204, 123, 114, 0.2)'} borderColor={'rgba(230, 148, 140, .4)'} />
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EighthSection;

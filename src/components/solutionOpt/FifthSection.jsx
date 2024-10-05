import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import HoverText from '../animations/HoverText';
import { FaArrowRight } from "react-icons/fa6";

const data = [
    {
        sNo: 1,
        title: 'Wealth Management',
        icon: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651abeef6c6ed99c3db90d4b_account-balance-wallet-fill0-wght400-grad0-opsz24.svg',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/65118546ea066f424888e31a_pexels-tima-miroshnichenko-5717069-p-500.jpg',
        desc: 'Maximize your wealth through personalized asset & estate planning.',
        url: 'wealth-management'
    },
    {
        sNo: 2,
        title: 'Investment Advisory',
        icon: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651abef6a00c6890f0a41cba_account-balance-fill0-wght400-grad0-opsz24.svg',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651191e2be015f37785da01d_pexels-pavel-danilyuk-8112164-p-800.jpg',
        desc: 'Strategic investment advice to help you reach financial success.',
        url: 'investment-advisory'
    },
    {
        sNo: 3,
        title: 'Retirement Planning',
        icon: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651abf0968bed92e6a136eed_payments-fill0-wght400-grad0-opsz24.svg',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/65119201066cbcc2b9789a2d_pexels-sora-shimazaki-5668856-p-500.jpg',
        desc: 'Secure your future with custom retirement income strategies.',
        url: 'retirement-planning'
    },
    {
        sNo: 4,
        title: 'Tax Optimization',
        icon: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651abf10a00c6890f0a43bfb_wallet-fill0-wght400-grad0-opsz24.svg',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/65119222f421c66b366f44bb_pexels-tima-miroshnichenko-5717271-p-1080.jpg',
        desc: 'Save more with strategic tax planning and complete compliance.',
        url: 'tax-optimization'
    },
    {
        sNo: 5,
        title: 'Sustainable Investing',
        icon: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651abf1904a4703082314e5b_corporate-fare-fill0-wght400-grad0-opsz24.svg',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651ec8c2912d191888a871a2_ethan-rougon-oIlix2slmsI-unsplash-p-500.jpg',
        desc: 'Invest responsibly with ESG portfolios and impact measurement.',
        url: 'sustainable-investing'
    },
    {
        sNo: 6,
        title: 'Financial Education',
        icon: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651abee6bdcf7f22afa92a39_card-membership-fill0-wght400-grad0-opsz24.svg',
        img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/6511925718ee4e723e4f13d3_pexels-tima-miroshnichenko-5717313.jpg',
        desc: 'Empower your financial decisions through workshops and webinars.',
        url: 'financial-education'
    }
];

function FifthSection() {

    const { id } = useParams();
    const [screenSize, setScreenSize] = useState('large');
    const [expanded, setExpanded] = useState(null);

    const updateScreenSize = () => {
        if (window.matchMedia('(max-width: 640px)').matches) {
            setScreenSize('small');
        } else if (window.matchMedia('(max-width: 1024px)').matches) {
            setScreenSize('medium');
        } else {
            setScreenSize('large');
        }
    };

    const handleClick = (index) => {
        if (screenSize === 'small') {
            setExpanded(expanded === index ? null : index); // Toggle the expanded state for the clicked item
        }
    };

    const shouldShowDiv = data.filter(item => item.url !== id);

    useEffect(() => {
        updateScreenSize();

        window.addEventListener('resize', updateScreenSize);
        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    }, []);



    return (
        <div className='bg-[#1e1a33] text-[#f8b3ac] pt-12'>
            <p className='text-4xl md:text-6xl text-center py-16'>Comprehensive Solutions</p>
            <div>
                {shouldShowDiv.map((item, i) => <motion.div key={i}
                    onClick={() => handleClick(i)}
                    whileHover='hover'
                    animate={expanded === i ? "hover" : "initial"}
                    className='relative overflow-hidden h-[55vh] md:h-[40vh] border-b border-[#453c73] last:border-0'>
                    <div className='bg-[#1e1a33] mix-blend-multiply h-full'><img src={item.img} alt="img" className='w-full h-full object-cover' /></div>

                    <motion.div initial={{ x: 0 }} variants={{ hover: { x: '100%', transition: { duration: .5, ease: [1, .5, .5, 1] } } }}
                        className='absolute h-full inset-0 bg-[#1e1a33]' />
                    <div className='absolute px-10 md:p-0 inset-0 h-full flex flex-col justify-center items-start md:flex-row gap-10 md:items-center'>

                        <div className='md:w-5/12 flex flex-col md:flex-row items-start md:items-center md:justify-evenly'>
                            <div className='p-2 bg-[#362F5A] border border-[#6B5DB3] mb-4 md:m-0'>
                                <img src={item.icon} alt="icon" className='w-9 h-9 object-cover' />
                            </div>
                            <Link to={`/solutions/${item.url}`} className='text-3xl'>{item.title}</Link>
                        </div>

                        <div
                            className='md:w-7/12 md:h-full md:flex items-center justify-center gap-6'>
                            <motion.p
                                initial={{ x: '-10%', opacity: 0 }}
                                variants={{ hover: { x: 0, opacity: 1, transition: { delay: .3, duration: .7, ease: 'easeIn' } } }}
                                className='md:w-1/3'>{item.desc}</motion.p>
                            <motion.div
                                initial={{ x: '-8%', opacity: 0 }}
                                variants={{ hover: { x: 0, opacity: 1, transition: { delay: .3, duration: .7, ease: 'easeIn' } } }}
                                className='w-56 mt-8 md:m-0'>
                                <Link to={`/solutions/${item.url}`} className='w-full'><HoverText text={'Solutions'} mainBG={'rgba(204, 123, 114, 0.35)'} overlayBG={'rgba(230, 148, 140, .2)'} borderColor={'rgba(204, 123, 114, 0.5)'} /></Link>
                            </motion.div>
                            <motion.p
                                initial={{ x: 0, opacity: 1, scale: 1 }}
                                variants={{ hover: { x: 20, opacity: 0, scale: 0, transition: { delay: .3, duration: .7, ease: 'easeOut' } } }}
                            ><FaArrowRight size={20} /></motion.p>
                        </div>

                    </div>

                </motion.div>)}
            </div>
        </div>
    );
}

export default FifthSection;

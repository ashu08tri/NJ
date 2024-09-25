import {useState} from 'react';
import HoverText from '../animations/HoverText';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";


function ThirdSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const data = [
    {
      title: 'Year-End Tax Planning: Strategies to Maximize Your Savings',
      name1: 'Tax Planning & Compliance',
      desc: 'Discover timely strategies for optimizing your year-end finances to maximize your tax savings.',
      img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651d6da19025736056b3281b_brooke-cagle-uWVWQ8gF8PE-unsplash-p-1080.jpg'
    },
    {
      title: 'The Impact of Recent Tax Reforms: A Closer Look',
      name1: 'Tax Planning & Compliance',
      name2: 'Featured',
      desc: 'Stay updated on how the latest tax reforms can affect your financial planning and what steps to take.',
      img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651d6de3173724960aef55a5_pexels-karolina-grabowska-4386174-p-800.jpg'
    },
    {
      title: "Unlocking Tax Benefits: An Insider's Guide to Efficient Tax Planning",
      name1: 'Tax Planning & Compliance',
      desc: 'Unlock the secrets of effective tax planning. Learn strategies to minimize your tax liability legally.',
      img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651d6dee788a7b11c09eb176_pexels-m%26w-studios-9288447-p-1080.jpg'
    },
    {
      title: 'How Diversification Can Boost Your Investment Portfolio',
      name1: 'Investment Strategies',
      name2: 'Featured',
      desc: 'Learn why putting all your financial eggs in one basket is risky. Discover the power of diversification.',
      img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651d6e042c83a9c85b7eea8c_viktor-forgacs-md1SZCindxE-unsplash-p-1080.jpg'
    },
    {
      title: 'The Future of Sustainable Investing: What You Need to Know',
      name1: 'Investment Strategies',
      desc: 'Delve into the rise of green investments and how you can align profitability with sustainability goals.',
      img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651d6db90fab4a138c76f643_m-ZzOa5G8hSPI-unsplash-p-800.jpg'
    },
    {
      title: 'Navigating the Volatile Markets: A Comprehensive Guide',
      name1: 'Investment Strategies',
      name2: 'Featured',
      desc: 'Explore practical tips for safeguarding your investments during market fluctuations. Stay resilient and thrive.',
      img: 'https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651d6dd586296e439a96c43d_pat-whelen-61pYLHurVKE-unsplash.jpg'
    },
  ];

  // Total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate the divs to show on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  // Next and Previous button handlers
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='bg-[#f5e7e6] py-12 md:py-16 text-[#e4938a]'>
      <p className='text-4xl md:text-5xl text-[#362f5a] py-10 md:py-16 pl-8'>Your Go-To Finance Resource</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center px-8">
  {currentData.map((item, i) => (
    <div key={i} className="relative overflow-hidden border-[2px] border-[#4c2e2b] h-[55vh] md:h-[70vh] w-full">
      <div className="absolute inset-0 h-full bg-purpleNoBlur mix-blend-multiply" />
      <img loading="lazy" src={item.img} alt="optionS_Imgs" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-custom-gradient3 mix-blend-multiply" />

      <div className="absolute inset-0 flex h-full flex-col justify-center gap-20 px-6 md:mt-5">
        <div className="flex flex-col gap-6">
          <div className="flex gap-1">
            {item.name2 && <p className="uppercase text-xs p-1 bg-[#362f5a] border border-[#a696f5]">{item.name2}</p>}
            <p className="uppercase text-xs p-1 bg-brown9HoverBox border border-brown9">{item.name1}</p>
          </div>

          <p className="text-xl md:text-3xl font-medium text-[#cc7b72] md:w-9/12 hover:text-[#e4938a] border-l pl-6 border-[#cc7b72]
            hover:border-[#e4938a] hover:pl-8 cursor-pointer transition-all duration-100 
          ">
            {item.title}
          </p>
        </div>

        <div>
          <p className="md:w-9/12">{item.desc}</p>
          <div className="w-48 md:w-64 py-4 mt-0 md:mt-10" style={{ color: '#e4938a' }}>
            <HoverText
              text="Read the Article"
              overlayBG="#4c2e2b"
              mainBG="rgba(204, 123, 114, 0.5)"
              borderColor="rgba(230, 148, 140, .5)"
            />
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

      <div className="flex justify-end p-8">
        {currentPage > 1 && (
          <button onClick={handlePrevious} className="px-7 py-3 flex justify-between w-40 items-center border border-brown15Text">
            <span><FaArrowLeftLong /></span><span>Previous</span>
          </button>
        )}
        {currentPage < totalPages && (
          <button onClick={handleNext} className=" px-7 py-3 flex justify-between w-40 items-center border border-brown15Text">
            <span>Next</span><span><FaArrowRightLong /></span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ThirdSection;
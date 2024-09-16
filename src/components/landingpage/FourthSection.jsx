import React from 'react';

const data = [
  {
    sNo: 1,
    name: 'Meet & Greet',
    title: 'Initial Consultation',
    desc: 'We kick off with a no-obligation consultation to understand your financial objectives and initial needs.'
  },
  {
    sNo: 2,
    name: 'Deep Dive',
    title: 'Financial Analysis',
    desc: 'A comprehensive review of your current financial situation helps us identify strengths and areas to improve.'
  },
  {
    sNo: 3,
    name: 'Map the Plan',
    title: 'Strategy Planning',
    desc: 'We develop a customized financial plan with actionable steps to achieve your short-term and long-term goals.'
  },
  {
    sNo: 4,
    name: 'Take Action',
    title: 'Implementation',
    desc: 'Once the financial plan is set, we assist in the seamless implementation of each strategic element involved.'
  },
  {
    sNo: 5,
    name: 'Watch & Adapt',
    title: 'Ongoing Monitoring',
    desc: 'We continually monitor your portfolio and financial standing, adapting the strategy as market conditions shift.'
  },
  {
    sNo: 6,
    name: 'Regular Check-ins',
    title: 'Periodic Reviews',
    desc: 'Scheduled reviews ensure that you&apos;re on track to achieve your financial goals and make any necessary adjustments.'
  }
]

function FourthSection() {
  return (
    <div className='bg-[#f5e7e6] pt-20'>
      <div className='grid md:grid-cols-3 gap-4 justify-items-center'>
        {data.map((item,i) => <div key={i} className='w-96 h-64 flex gap-8 text-secondText'>
            <p>{item.sNo}.</p>
            <div>
              <p>{item.name}</p>
              <p className='py-5 text-3xl'>{item.title}</p>
              <p>{item.desc}</p>
            </div>
        </div>)}
      </div>
    </div>
  )
}

export default FourthSection;
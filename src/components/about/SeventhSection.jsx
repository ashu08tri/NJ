import React from 'react'

function SeventhSection() {
    return (
        <div className='h-auto flex relative md:h-[300vh] object-cover' style={{ backgroundImage: 'linear-gradient(to bottom, rgba(15, 13, 26, 0.8) 65%, #0f0d1a), url(https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/6515539f331a3329d9005b5d_refargotohp-x8dTKZ5IWp0-unsplash.webp)', backgroundAttachment: 'fixed' }}>
            <div className='md:w-3/12 md:h-full sticky top-10'>
                <ul className='text-brown9 pt-10 pl-12 flex flex-col gap-5 sticky'>
                    <li><span>01.</span><span>Consultation</span></li>
                    <li><span>02.</span><span>Analysis</span></li>
                    <li><span>03.</span><span>Planning</span></li>
                    <li><span>04.</span><span>Implementation</span></li>
                </ul>
            </div>

            <div className='md:w-5/12'></div>
            <div className='hidden md:block md:w-4/12 h-full relative overflow-hidden' style={{
                backgroundImage: 'url(https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/6516dfb9da737c2b1a589700_tim-stief-dH6IjhWHNQQ-unsplash.webp)', backgroundAttachment: 'fixed',
                objectPosition: 'top', objectFit: 'cover'
            }}></div>
        </div>
    )
}

export default SeventhSection;
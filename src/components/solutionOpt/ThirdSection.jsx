

function ThirdSection() {
  return (
    <div 
  className="object-cover h-[98vh] bg-fixed mix-blend-multiply text-[#f8b3ac]"
  style={{
    backgroundImage: 
      'linear-gradient(rgba(51, 31, 29, 0.6), rgba(51, 31, 29, 0.6)), url(https://cdn.prod.website-files.com/650c51b8e8548a72ca6aba04/6515539e0c97c2d8cd3e809e_pexels-gustavo-fring-4173267.webp)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
    <div className="h-1/3 hover:bg-[#1d111033] hover:backdrop-blur-sm transition-all duration-300 flex justify-between items-center px-4 md:px-16">
    <p className="text-3xl md:text-7xl font-medium">16.3%</p>
    <p className="text-2xl md:text-5xl w-1/2 md:w-auto">Average ROI of 16.3% Annually</p>
    </div>
    <div className="h-1/3 border-y border-brown15Text hover:bg-[#1d111033] hover:backdrop-blur-sm transition-all duration-300 flex justify-between items-center px-4 md:px-16">
    <p className="text-3xl md:text-7xl font-medium">+200</p>
    <p className="text-2xl md:text-5xl">Success Client Stories</p>
    </div>
    <div className="h-1/3 hover:bg-[#1d111033] hover:backdrop-blur-sm transition-all duration-300 flex justify-between items-center px-4 md:px-16">
    <p className="text-3xl md:text-7xl font-medium">$300M</p>
    <p className="text-2xl w-1/2 md:w-auto md:text-5xl">In Sustainable Investments</p>
    </div>
</div>

  )
}

export default ThirdSection;
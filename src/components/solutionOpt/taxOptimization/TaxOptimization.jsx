import Header from "../Header";
import SecondSection from "../SecondSection";
import ThirdSection from "../ThirdSection";
import FourthSection from "../FourthSection";
import FifthSection from "../FifthSection";
import SixthSection from "../SixthSection";
import SeventhSection from "../SeventhSection";

function TaxOptimization() {
  return (
    <>
    <Header iconImg={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651abf10a00c6890f0a43bfb_wallet-fill0-wght400-grad0-opsz24.svg"} 
    image={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/65119222f421c66b366f44bb_pexels-tima-miroshnichenko-5717271.jpg"} title={"Tax Optimization"} desc={"Save more with strategic tax planning and complete compliance."} />
    <SecondSection text={'Maximize your earnings through targeted tax strategies and compliance services. We identify credits, deductions, and loopholes to reduce your tax burden.'}/>
    <ThirdSection />
    <FourthSection />
    <FifthSection />
    <SixthSection image={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/65119222f421c66b366f44bb_pexels-tima-miroshnichenko-5717271.jpg"}/>
    <SeventhSection />
    </>
  )
}

export default TaxOptimization;
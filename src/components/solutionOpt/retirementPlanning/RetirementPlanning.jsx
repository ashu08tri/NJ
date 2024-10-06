import Header from "../Header";
import SecondSection from "../SecondSection";
import ThirdSection from "../ThirdSection";
import FourthSection from "../FourthSection";
import FifthSection from "../FifthSection";
import SixthSection from "../SixthSection";
import SeventhSection from "../SeventhSection";

function RetirementPlanning() {
  return (
    <>
    <Header iconImg={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651abf0968bed92e6a136eed_payments-fill0-wght400-grad0-opsz24.svg"} 
    image={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/65119201066cbcc2b9789a2d_pexels-sora-shimazaki-5668856.jpg"} title={"Retirement Planning"} desc={"Secure your future with custom retirement income strategies."} />
    <SecondSection text={'Plan for a worry-free retirement with income planning and tax-efficient drawdowns. We design solutions that adapt to your lifestyle and extend savings.'}/>
    <ThirdSection />
    <FourthSection />
    <FifthSection />
    <SixthSection image={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/65119201066cbcc2b9789a2d_pexels-sora-shimazaki-5668856.jpg"}/>
    <SeventhSection />
    </>
  )
}

export default RetirementPlanning;
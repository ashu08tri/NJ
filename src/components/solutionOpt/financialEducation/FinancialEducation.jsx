import Header from "../Header";
import SecondSection from "../SecondSection";
import ThirdSection from "../ThirdSection";
import FourthSection from "../FourthSection";
import FifthSection from "../FifthSection";
import SixthSection from "../SixthSection";
import SeventhSection from "../SeventhSection";

function FinancialEducation() {
  return (
    <>
    <Header iconImg={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651abee6bdcf7f22afa92a39_card-membership-fill0-wght400-grad0-opsz24.svg"} 
    image={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/6511925718ee4e723e4f13d3_pexels-tima-miroshnichenko-5717313.jpg"} title={"Financial Education"} desc={"Empower your financial decisions through workshops and webinars."} />
    <SecondSection text={'Boost your financial literacy with our personal finance workshops and investment webinars. We offer expert insights to help you make informed choices.'}/>
    <ThirdSection />
    <FourthSection />
    <FifthSection />
    <SixthSection image={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/6511925718ee4e723e4f13d3_pexels-tima-miroshnichenko-5717313.jpg"}/>
    <SeventhSection />
    </>
  )
}

export default FinancialEducation;
import Header from "../Header";
import SecondSection from "../SecondSection";
import ThirdSection from "../ThirdSection";
import FourthSection from "../FourthSection";
import FifthSection from "../FifthSection";
import SixthSection from "../SixthSection";
import SeventhSection from "../SeventhSection";

function InvestmentAdvisory() {
  return (
    <>
    <Header iconImg={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651abef6a00c6890f0a41cba_account-balance-fill0-wght400-grad0-opsz24.svg"} 
    image={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651191e2be015f37785da01d_pexels-pavel-danilyuk-8112164.jpg"} title={"Investment Advisory"} desc={"Strategic investment advice to help you reach financial success."} />
    <SecondSection text={'Navigate the investment landscape with confidence. Our risk assessments and portfolio optimizations are designed to maximize returns while minimizing risks.'}/>
    <ThirdSection />
    <FourthSection />
    <FifthSection />
    <SixthSection image={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651191e2be015f37785da01d_pexels-pavel-danilyuk-8112164.jpg"}/>
    <SeventhSection />
    </>
  )
}

export default InvestmentAdvisory;
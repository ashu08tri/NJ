import Header from "../Header";
import SecondSection from "../SecondSection";
import ThirdSection from "../ThirdSection";
import FourthSection from "../FourthSection";
import FifthSection from "../FifthSection";
import SixthSection from "../SixthSection";
import SeventhSection from "../SeventhSection";

function SustainableInvesting() {
  return (
    <>
    <Header iconImg={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651abf10a00c6890f0a43bfb_wallet-fill0-wght400-grad0-opsz24.svg"} 
    image={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651ec8c2912d191888a871a2_ethan-rougon-oIlix2slmsI-unsplash.jpg"} title={"Sustainable Investing"} desc={"Invest responsibly with ESG portfolios and impact measurement."} />
    <SecondSection text={'Align your investments with your values through ESG portfolios. Our impact measurement service quantifies the societal and environmental benefits.'}/>
    <ThirdSection />
    <FourthSection />
    <FifthSection />
    <SixthSection image={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651ec8c2912d191888a871a2_ethan-rougon-oIlix2slmsI-unsplash.jpg"}/>
    <SeventhSection />
    </>
  )
}

export default SustainableInvesting;
import Header from "../Header";
import SecondSection from "../SecondSection";
import ThirdSection from "../ThirdSection";
import FourthSection from "../FourthSection";
import FifthSection from "../FifthSection";
import SixthSection from "../SixthSection";
import SeventhSection from "../SeventhSection";

function WealthManagement() {
  return (
    <>
    <Header iconImg={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651abeef6c6ed99c3db90d4b_account-balance-wallet-fill0-wght400-grad0-opsz24.svg"} 
    image={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/65118546ea066f424888e31a_pexels-tima-miroshnichenko-5717069.jpg"} title={"Wealth Management"} desc={"Maximize your wealth through personalized asset & estate planning."} />
    <SecondSection text={'Achieve your financial dreams with tailored asset allocation and estate planning. Our experts work closely with you to build and preserve your wealth.'}/>
    <ThirdSection />
    <FourthSection />
    <FifthSection />
    <SixthSection image={"https://cdn.prod.website-files.com/650c51b8e8548a72ca6ab9d9/651191e2be015f37785da01d_pexels-pavel-danilyuk-8112164.jpg"}/>
    <SeventhSection />
    </>
  )
}

export default WealthManagement;
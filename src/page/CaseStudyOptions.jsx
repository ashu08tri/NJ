import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SmartInvestment from "../components/caseStudyOptions/smartInvestment/SmartInvestment";
import TaxTriumph from "../components/caseStudyOptions/taxTriumph/TaxTriumph";
import WealthBoost from "../components/caseStudyOptions/wealthBoost/WealthBoost";
import GreenGrowth from "../components/caseStudyOptions/greenGrowth/GreenGrowth";
import RetirementBliss from "../components/caseStudyOptions/retirementBliss/RetirementBliss";
import BusinessFlourish from "../components/caseStudyOptions/businessFlourish/BusinessFlourish";
import ErrorPage from "./ErrorPage"; // Import the error page component

const CaseStudyOptions = () => {
  const { id } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      const caseStudies = [
        { id: "smart-investment"},
        { id: "tax-triumph"},
        { id: "wealth-boost"},
        { id: "green-growth"},
        { id: "retirement-bliss"},
        { id: "business-flourish"}
      ];

      const foundCaseStudy = caseStudies.find((study) => study.id === id);
      setCaseStudy(foundCaseStudy);
      setLoading(false);
    };

    fetchCaseStudy();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  if (!caseStudy) {
    return <ErrorPage />; // If the case study is not found, show the error page
  }

  return (
    <>
    {id === "smart-investment" && <SmartInvestment />}
    {id === "tax-triumph" && <TaxTriumph />}
    {id === "wealth-boost" && <WealthBoost />}
    {id === "green-growth" && <GreenGrowth />}
    {id === "retirement-bliss" && <RetirementBliss />}
    {id === "business-flourish" && <BusinessFlourish />}
    </>
  );
};

export default CaseStudyOptions;

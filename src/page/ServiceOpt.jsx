import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AssestAllocation from "../components/serviceOpt/assestAllocations/AssestAllocation";
import EstatePlanning from "../components/serviceOpt/estatePlanning/EstatePlanning";
import RiskAssessment from "../components/serviceOpt/riskAssessment/RiskAssessment";
import PortfolioOpt from "../components/serviceOpt/portfolio/PortfolioOpt";
import IncomePlanning from "../components/serviceOpt/incomePlanning/IncomePlanning";
import TaxEfficient from "../components/serviceOpt/taxEfficientDrawdowns/TaxEfficient";
import TaxStrategy from "../components/serviceOpt/taxStrategy/TaxStrategy";
import TaxCompliance from "../components/serviceOpt/taxCompliance/TaxCompliance";
import PersonalFinance from "../components/serviceOpt/personalFinance/PersonalFinance";
import InvestmentWebinar from "../components/serviceOpt/investmentWebinar/InvestmentWebinar";
import ErrorPage from "./ErrorPage";

function ServiceOpt() {

    const { id } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
          const services = [
            { id: "assest-allocation"},
            { id: "estate-planning"},
            { id: "risk-assessment"},
            { id: "portfolio-optimization"},
            { id: "income-planning"},
            { id: "tax-efficient-drawdowns"},
            { id: "tax-strategy-consultation"},
            { id: "tax-compliance"},
            { id: "personal-finance-workshops"},
            { id: "investment-webinars"}
          ];
    
          const foundServices = services.find((service) => service.id === id);
          setService(foundServices);
          setLoading(false);
        };
    
        fetchServices();
      }, [id]);
    
      if (loading) return <p>Loading...</p>;
    
      if (!service) {
        return <ErrorPage />; // If the case study is not found, show the error page
      }

  return (
    <>
    {id === 'assest-allocation' && <AssestAllocation />}
    {id === 'estate-planning' && <EstatePlanning />}
    {id === 'risk-assessment' && <RiskAssessment />}
    {id === 'portfolio-optimization' && <PortfolioOpt />}
    {id === 'income-planning' && <IncomePlanning />}
    {id === 'tax-efficient-drawdowns' && <TaxEfficient />}
    {id === 'tax-strategy-consultation' && <TaxStrategy />}
    {id === 'tax-compliance' && <TaxCompliance />}
    {id === 'personal-finance-workshops' && <PersonalFinance />}
    {id === 'investment-webinars' && <InvestmentWebinar />}
    </>
  )
}

export default ServiceOpt;
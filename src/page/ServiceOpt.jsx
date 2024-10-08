import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AssestAllocation from "../components/serviceOpt/assestAllocations/AssestAllocation";
import EstatePlanning from "../components/serviceOpt/estatePlanning/EstatePlanning";
import RiskAssessment from "../components/serviceOpt/riskAssessment/RiskAssessment";
import PortfolioOpt from "../components/serviceOpt/portfolio/PortfolioOpt";
import IncomePlanning from "../components/serviceOpt/incomePlanning/IncomePlanning";
import TaxEfficient from "../components/serviceOpt/taxEfficientDrawdowns/TaxEfficient";
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
            { id: "tax-efficient-drawdowns"}
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
    </>
  )
}

export default ServiceOpt;
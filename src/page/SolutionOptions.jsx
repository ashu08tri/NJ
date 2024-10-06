import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import WealthManagement from '../components/solutionOpt/wealthManagement/WealthManagement';
import InvestmentAdvisory from "../components/solutionOpt/investmentAdvisory/InvestmentAdvisory";
import RetirementPlanning from "../components/solutionOpt/retirementPlanning/RetirementPlanning";
import TaxOptimization from "../components/solutionOpt/taxOptimization/TaxOptimization";
import SustainableInvesting from "../components/solutionOpt/sustainableInvesting/SustainableInvesting";
import FinancialEducation from "../components/solutionOpt/financialEducation/FinancialEducation";
import ErrorPage from "./ErrorPage";

function SolutionOptions() {
    const { id } = useParams();
    const [solution, setSolution] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSolutions = async () => {
          const solutions = [
            { id: "investment-advisory"},
            { id: "retirement-planning"},
            { id: "wealth-management"},
            { id: "tax-optimization"},
            { id: "sustainable-investing"},
            { id: "financial-education"}
          ];
    
          const foundSolutions = solutions.find((solution) => solution.id === id);
          setSolution(foundSolutions);
          setLoading(false);
        };
    
        fetchSolutions();
      }, [id]);
    
      if (loading) return <p>Loading...</p>;
    
      if (!solution) {
        return <ErrorPage />; // If the case study is not found, show the error page
      }

  return (
    <>
    {id === 'wealth-management' && <WealthManagement />}
    {id === 'investment-advisory' && <InvestmentAdvisory />}
    {id === 'retirement-planning' && <RetirementPlanning />}
    {id === 'tax-optimization' && <TaxOptimization />}
    {id === 'sustainable-investing' && <SustainableInvesting />}
    {id === 'financial-education' && <FinancialEducation />}
    </>
  )
}

export default SolutionOptions;
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import WealthManagement from '../components/solutionOpt/wealthManagement/WealthManagement';
import ErrorPage from "./ErrorPage";

function SolutionOptions() {
    const { id } = useParams();
    const [solution, setSolution] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSolutions = async () => {
          const solutions = [
            { id: "smart-investment"},
            { id: "tax-triumph"},
            { id: "wealth-management"},
            { id: "green-growth"},
            { id: "retirement-bliss"},
            { id: "business-flourish"}
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
    </>
  )
}

export default SolutionOptions;
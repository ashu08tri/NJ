import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SmartInvestment from "../components/caseStudyOptions/smartInvestment/SmartInvestment";
import ErrorPage from "./ErrorPage"; // Import the error page component

const CaseStudyOptions = () => {
  const { id } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching or API call for the case study by id
    const fetchCaseStudy = async () => {
      const caseStudies = [
        { id: "smart_investment"},
        // ...other case studies
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
    {id === "smart_investment" && <SmartInvestment />}
    </>
  );
};

export default CaseStudyOptions;

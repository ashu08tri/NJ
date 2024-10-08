import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AssestAllocation from "../components/serviceOpt/assestAllocations/AssestAllocation";
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
    </>
  )
}

export default ServiceOpt;
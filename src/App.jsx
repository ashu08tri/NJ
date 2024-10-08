import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import ErrorPage from "./page/ErrorPage";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Solutions from './page/Solutions';
import Services from './page/Services';
import About from "./page/About";
import Contact from './page/Contact';
import Consultation from "./page/Consultation";
import Blog from './page/Blog';
import CaseStudy from "./page/CaseStudy";
import SolutionOptions from "./page/SolutionOptions";
import ServiceOpt from "./page/ServiceOpt";
import CaseStudyOptions from "./page/CaseStudyOptions";
import Testimonials from "./page/Testimonials";
import Footer from './components/Footer';


function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative">
      <Navbar />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/case_study" element={<CaseStudy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/case_study/:id" element={<CaseStudyOptions />} />
          <Route path="/solutions/:id" element={<SolutionOptions />} />
          <Route path="/services/:id" element={<ServiceOpt />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App;